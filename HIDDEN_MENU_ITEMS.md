# Hidden Menu Items & Restoration Reference

This document tracks all temporarily hidden menu items and provides clear instructions for unhiding them.

---

## 📌 Hidden Navigation Items

The following menu items in the sliding navigation drawer have been hidden temporarily (not deleted):

| Item Name | Route Path | Status |
| :--- | :--- | :--- |
| **About** | `/about` | `hidden: true` |
| **Why Nazr** | `/whynazrexists` | `hidden: true` |
| **Nazr App** | `/nazrapp` | **Visible** |
| **Helpline** | `/helpline` | `hidden: true` |
| **Blog** | `/blog` | `hidden: true` |

> **Currently Visible Menu Items**: Home (`/`), Shop (`/shop`), Nazr App (`/nazrapp`), Support (`/support`).

---

## 📁 Source File

All navigation drawer links are configured in:
- **File**: `src/components/ui/NavigationMenu.tsx` (Lines ~39–48)

---

## ⚙️ Current Configuration in `NavigationMenu.tsx`

```tsx
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", hidden: true },
    { name: "Why Nazr", path: "/whynazrexists", hidden: true },
    { name: "Shop", path: "/shop" },
    { name: "Nazr App", path: "/nazrapp" },
    { name: "Helpline", path: "/helpline", hidden: true },
    { name: "Support", path: "/support" },
    { name: "Blog", path: "/blog", hidden: true },
  ];
```

The rendering loop filters out hidden items dynamically:
```tsx
  {links
    .filter((link) => !link.hidden)
    .map((link) => {
      // renders menu link
    })}
```

---

## 🔄 How to Unhide Items

### Option 1: Unhide All Items
To unhide everything, remove the `hidden: true` flag from all entries in `src/components/ui/NavigationMenu.tsx`:

```tsx
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Why Nazr", path: "/whynazrexists" },
    { name: "Shop", path: "/shop" },
    { name: "Nazr App", path: "/nazrapp" },
    { name: "Helpline", path: "/helpline" },
    { name: "Support", path: "/support" },
    { name: "Blog", path: "/blog" },
  ];
```

### Option 2: Unhide Specific Item(s)
To restore a specific item (e.g., Why Nazr, Blog, or About), set `hidden: false` or delete the `hidden: true` property on that specific item:

```tsx
    { name: "Why Nazr", path: "/whynazrexists" }, // Unhidden
    { name: "About", path: "/about" },             // Unhidden
    { name: "Blog", path: "/blog" },               // Unhidden
```

---

## 📱 Socials Note

- **X/Twitter**: Removed from the Socials section in both:
  - `src/components/ui/NavigationMenu.tsx`
  - `src/components/ui/Footer.tsx`
- Active socials remaining: **Instagram** and **LinkedIn**.
