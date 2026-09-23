/**
 * Confirmed Content Handoff for NAZR:
 * 1. About Section (Story, Ecosystem, Approach, Entity, Short Version)
 * 2. Help Center (In-app / Web searchable index structure)
 * 3. Confirmed FAQs (Categorized by domain with verified answers)
 */

export interface AboutContent {
  title: string;
  lead: string;
  question: string;
  ecosystem: {
    item: string;
    description: string;
  }[];
  approach: string;
  legalEntity: string;
  shortVersion: string;
}

export interface HelpCenterTopic {
  id: string;
  title: string;
  articles: string[];
}

export interface FaqItem {
  id: string;
  category: "PRODUCTS" | "THE APP" | "ORDERS" | "ABOUT";
  subcategory?: string;
  question: string;
  answer: string;
}

export const ABOUT_NAZR_CONTENT: AboutContent = {
  title: "About Nazr",
  lead: "Nazr is India's first integrated women's safety ecosystem, built to give you protection that actually fits into your life, not just an app you download and forget.",
  question:
    "We started with a simple question: why does women's safety in India feel scattered? A pepper spray here, a helpline number saved somewhere, a 'share your location' text sent in a hurry. Nazr brings all of it together, app, physical products, and a support network, so safety feels like one system instead of a patchwork of workarounds.",
  ecosystem: [
    {
      item: "The Nazr App",
      description:
        "Shield Mode for active protection, a Trusted Circle for instant SOS alerts, and a curated Helpline Directory",
    },
    {
      item: "On Me",
      description:
        "A pocket-sized pepper spray designed to actually be carried, not left in a drawer",
    },
    {
      item: "Sip Check",
      description:
        "A peel-off drink cover that protects against spiking, worn right over your glass",
    },
  ],
  approach:
    "We believe safety tools should be discreet, dependable, and designed with real situations in mind, not built as an afterthought. Every product and feature in the Nazr ecosystem is made in India and built around how women actually move through their day, at work, out at night, in transit, and everywhere in between.",
  legalEntity:
    "Nazr is a product of Lumina Hospitality Private Limited, based in Mumbai.",
  shortVersion:
    "Nazr is India's first integrated women's safety ecosystem, combining an app, wearable safety products, and a support network into one system. Shield Mode, Trusted Circle SOS, and a Helpline Directory, built to keep you safer, every day.",
};

export const HELP_CENTER_TOPICS: HelpCenterTopic[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    articles: [
      "Creating your Nazr account",
      "Setting up your Trusted Circle",
      "Granting location and notification permissions (why we need them, explained plainly)",
      "Understanding your Nazr dashboard",
    ],
  },
  {
    id: "using-shield-mode",
    title: "Using Shield Mode",
    articles: [
      "What Shield Mode does and when to use it",
      "How to start and end a Shield Mode session",
      "What your Trusted Circle sees when Shield Mode is active",
      "What happens if you don't check in during a session",
    ],
  },
  {
    id: "trusted-circle-and-sos",
    title: "Trusted Circle and SOS",
    articles: [
      "Adding and removing people from your Trusted Circle",
      "How the SOS alert works, and what gets shared (location, timestamp, status)",
      "Sending an SOS alert",
      "Canceling an accidental SOS alert",
      "What your Trusted Circle members need to do to receive alerts",
    ],
  },
  {
    id: "helpline-directory",
    title: "Helpline Directory",
    articles: [
      "How the directory is organized (national helplines, local/city-specific numbers)",
      "Calling a helpline directly from the app",
      "Suggesting a helpline to be added",
    ],
  },
  {
    id: "account-and-privacy",
    title: "Account and Privacy",
    articles: [
      "Updating your profile and contact details",
      "How your data is stored and for how long",
      "Managing app permissions",
      "Deleting your account and data",
    ],
  },
  {
    id: "nazr-products",
    title: "Nazr Products (On Me and Sip Check)",
    articles: [
      "How to order On Me or Sip Check",
      "Using On Me safely",
      "Using Sip Check correctly",
      "Shipping and delivery",
      "Returns and product issues",
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    articles: [
      "App not sending location during SOS",
      "Trusted Circle member not receiving alerts",
      "Notifications not working",
      "Reporting a bug or app issue",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    articles: [
      "In-app support / feedback form",
      "Email support (support@nazrco.in)",
      "Response time expectations (within 24-48 hours on weekdays)",
    ],
  },
];
