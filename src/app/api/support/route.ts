import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    let rawToken = (process.env.ZEPTOMAIL_TOKEN || "").trim();
    if (!rawToken) {
      rawToken = "Zoho-enczapikey PHtE6r0FQb/tj2V78BBVs/LrH8X2N4x49O0xLARH5oYQCvcAGU1T+YwqkmWxrR0uUPgUFPfIzIpr47zOt+mHJjvuZG4ZVWqyqK3sx/VYSPOZsbq6x00aslkadkLdV4DscNJr0SPes97TNA==";
    }
    const authToken = rawToken.startsWith("Zoho-enczapikey")
      ? rawToken
      : `Zoho-enczapikey ${rawToken}`;

    const senderEmail = "support@nazrco.in";
    const receiverEmail = process.env.SUPPORT_RECEIVER_EMAIL || "support@nazrco.in";

    const payload = {
      from: {
        address: senderEmail,
        name: "NAZR Website Support",
      },
      to: [
        {
          email_address: {
            address: receiverEmail,
            name: "NAZR Support Team",
          },
        },
      ],
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: `New Support Request from ${name}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #F80090; border-bottom: 2px solid #F80090; padding-bottom: 8px;">New Support Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #F80090; white-space: pre-wrap;">${message}</div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #888;">Sent from NAZR Website Support Page</p>
        </div>
      `,
    };

    // Try ZeptoMail India endpoint first, fallback to Global .com endpoint
    const endpoints = [
      "https://api.zeptomail.in/v1.1/email",
      "https://api.zeptomail.com/v1.1/email",
    ];

    let response: Response | null = null;
    let lastError: any = null;

    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          return NextResponse.json({ success: true, message: "Email sent successfully!" });
        }

        const errJson = await res.json().catch(() => ({}));
        console.error(`ZeptoMail error from ${url}:`, errJson);
        lastError = errJson;
        response = res;
      } catch (err) {
        console.error(`Fetch error for ${url}:`, err);
      }
    }

    return NextResponse.json(
      { error: "Failed to send email via ZeptoMail.", details: lastError },
      { status: response ? response.status : 401 }
    );
  } catch (error) {
    console.error("Error sending support email:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
