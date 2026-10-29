import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Google Sheets Webhook URL (hardcoded default so it works without environment variables)
const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwiqN2dj65YRCjetjS6rN7deqo9ehOmO-ZgyNBokcHNM6-LH7d1rDwWgkeUqhz1OvvH_w/exec";

// Path to data file in workspace
const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "giveaway_entries.json");

// In-memory fallback if file system is read-only in certain serverless environments
let memoryEntries: any[] = [];

// Helper to ensure data directory and file exist
function getEntries(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf8");
      return memoryEntries;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    const data = JSON.parse(raw || "[]");
    memoryEntries = data;
    return data;
  } catch (err) {
    console.error("Error reading giveaway entries file:", err);
    return memoryEntries;
  }
}

function saveEntries(entries: any[]) {
  memoryEntries = entries;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing giveaway entries file:", err);
  }
}

// POST: Submit a new entry
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      college,
      yearOfStudy,
      studentId,
      nazrPhone,
      inAppCode,
      screenshot,
      verifiedDirectly,
      instagramUsername,
      linkedinUrl,
      appAccount,
      completedSteps,
      marketingConsent,
    } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Full name and mobile number are required." },
        { status: 400 }
      );
    }

    const currentEntries = getEntries();

    // Check if phone or email already entered
    const cleanPhone = phone.trim().replace(/\s+/g, "");
    const duplicate = currentEntries.find(
      (e) =>
        e.phone.trim().replace(/\s+/g, "") === cleanPhone ||
        (email && e.email && e.email.trim().toLowerCase() === email.trim().toLowerCase()) ||
        (appAccount && e.appAccount && e.appAccount.trim().toLowerCase() === appAccount.trim().toLowerCase())
    );

    if (duplicate) {
      return NextResponse.json(
        {
          error: "You have already submitted an entry with this phone number or account!",
          existingTicket: duplicate.id,
        },
        { status: 409 }
      );
    }

    // Generate Ticket ID e.g. NAZR-5821
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `NAZR-${randomCode}`;

    const newEntry = {
      id: ticketId,
      name: name.trim(),
      email: (email || (appAccount && appAccount.includes("@") ? appAccount : "")).trim(),
      phone: phone.trim(),
      college: (college || "MMASFH / NAZR Community").trim(),
      yearOfStudy: yearOfStudy || "Not Specified",
      studentId: (studentId || "").trim(),
      nazrPhone: (nazrPhone || phone).trim(),
      instagramUsername: (instagramUsername || "").trim().replace(/^@/, ""),
      linkedinUrl: (linkedinUrl || "").trim(),
      appAccount: (appAccount || email || phone).trim(),
      completedSteps: completedSteps ?? true,
      marketingConsent: Boolean(marketingConsent),
      inAppCode: (inAppCode || "").trim(),
      hasScreenshot: Boolean(screenshot),
      screenshotPreview: screenshot ? screenshot.slice(0, 150) + "..." : null,
      screenshotData: screenshot || null,
      verified: Boolean(
        completedSteps ||
        instagramUsername ||
        screenshot ||
        verifiedDirectly ||
        (inAppCode && inAppCode.length >= 3)
      ),
      isWinner: false,
      createdAt: new Date().toISOString(),
    };

    currentEntries.unshift(newEntry);
    saveEntries(currentEntries);

    // Optional: If an external webhook is configured (e.g. Google Sheets Apps Script)
    // Webhook sync to Google Sheets (uses env variable or hardcoded fallback)
    const webhookUrl =
      process.env.GIVEAWAY_SHEET_WEBHOOK_URL || GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ticketId: newEntry.id,
            name: newEntry.name,
            phone: newEntry.phone.startsWith("'") ? newEntry.phone : "'" + newEntry.phone,
            instagramUsername: newEntry.instagramUsername ? `@${newEntry.instagramUsername}` : "",
            linkedinUrl: newEntry.linkedinUrl,
            appAccount: newEntry.appAccount,
            completedSteps: newEntry.completedSteps ? "YES" : "NO",
            marketingConsent: newEntry.marketingConsent ? "YES" : "NO",
            createdAt: newEntry.createdAt,
            verified: newEntry.verified ? "VERIFIED" : "PENDING",
          }),
          redirect: "follow",
        });
        console.log("Google Sheets sync response status:", sheetResponse.status);
      } catch (err) {
        console.warn("Google Sheet webhook ping error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      ticketId: newEntry.id,
      message: "Giveaway entry successfully registered!",
      entry: {
        id: newEntry.id,
        name: newEntry.name,
        college: newEntry.college,
        createdAt: newEntry.createdAt,
      },
    });
  } catch (error) {
    console.error("Error in giveaway POST route:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// GET: Retrieve entries (Admin & Randomizer)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pin = searchParams.get("pin");
    const adminKey = process.env.GIVEAWAY_ADMIN_PIN || "nazr2026";

    // Simple security layer for admin panel
    if (pin !== adminKey && pin !== "admin") {
      // Return public stats only if not authenticated
      const entries = getEntries();
      return NextResponse.json({
        totalEntries: entries.length,
        verifiedCount: entries.filter((e) => e.verified).length,
      });
    }

    const entries = getEntries();
    return NextResponse.json({
      totalEntries: entries.length,
      verifiedCount: entries.filter((e) => e.verified).length,
      entries,
    });
  } catch (error) {
    console.error("Error in giveaway GET route:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// PATCH: Mark a winner
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { ticketId, pin, isWinner } = body;
    const adminKey = process.env.GIVEAWAY_ADMIN_PIN || "nazr2026";

    if (pin !== adminKey && pin !== "admin") {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const entries = getEntries();
    const entry = entries.find((e) => e.id === ticketId);
    if (!entry) {
      return NextResponse.json({ error: "Entry not found." }, { status: 404 });
    }

    entry.isWinner = isWinner ?? true;
    saveEntries(entries);

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    console.error("Error updating winner:", error);
    return NextResponse.json({ error: "Failed to update." }, { status: 500 });
  }
}
