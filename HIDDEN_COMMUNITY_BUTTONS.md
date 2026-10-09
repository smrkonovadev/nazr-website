# Hidden "Beyond The Ecosystem" Buttons & Restoration Reference

This document tracks the temporarily hidden Call-To-Action (CTA) buttons in the **"Beyond The Ecosystem"** (Safety Community) section and provides clear instructions for unhiding them.

---

## 📌 Hidden Buttons

The following pink CTA buttons inside each card have been hidden temporarily (not removed from code):

| Card # | Card Topic | Button Text | Current Status |
| :--- | :--- | :--- | :--- |
| **1** | Events | `See upcoming events` | `Visible` (`SHOW_CARD_BUTTONS = true`, `disabled = false`) |
| **2** | Community Stories | `Read Their Stories` | `Visible` (`SHOW_CARD_BUTTONS = true`, `disabled = false`) |
| **3** | Field Notes | `Read Field Notes` | `Visible` (`SHOW_CARD_BUTTONS = true`, `disabled = false`) |
| **4** | Join The Community | `Join the community` | `Visible` (`SHOW_CARD_BUTTONS = true`, `disabled = false`) |

---

## 📁 Source File

All configuration for this section is located in:
- **File**: `src/components/ui/SafetyCommunitySection.tsx`

---

## ⚙️ How It Works in `SafetyCommunitySection.tsx`

At the top of the component (around line 56):
```tsx
// Toggle to show/hide the pink CTA buttons ("Read Their Stories", "View All Events", etc.)
const SHOW_CARD_BUTTONS = false;
```

When `SHOW_CARD_BUTTONS` is `false`, the button elements are not rendered, and the card description bottom margin adjusts automatically so the card layout remains balanced.

---

## 🔄 How to Unhide the Buttons

To unhide all buttons across mobile and desktop layouts, simply open `src/components/ui/SafetyCommunitySection.tsx` and change `SHOW_CARD_BUTTONS` to `true`:

```tsx
// Set to true to restore the pink CTA buttons
const SHOW_CARD_BUTTONS = true;
```

No further code changes are required!
