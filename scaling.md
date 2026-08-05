# NAZR Home Page - Scaling, Layout & Viewport Section-Fitting Guide

This document defines the core architecture, layout specifications, viewport section-fitting rules, and desktop scaling mechanics applied across the NAZR web home page. Share this guide with any developer or AI to replicate the exact section-by-section fitting and layout behavior.

---

## 1. Core Architectural Principle: Single-Screen Viewport Section Fitting

### **The Rule:**
Every main section on the NAZR home page is engineered and height-budgeted to **fit completely within the user's viewport screen (`100vh`)** on desktop screens. As the user scrolls, each section presents a self-contained, beautifully scaled single-screen view without requiring awkward partial-section scrolling or element overflow.

### **How it Works (`DesktopScaler` & Canvas Proportions):**
1. **Base Design Canvas Width**: `1440px`.
2. **Proportional Fluid Zoom**: `DesktopScaler` calculates `scale = window.innerWidth / 1440`.
3. **Viewport Height Budgeting**: Each section uses fixed desktop height constraints (`md:h-[780px]`, `md:h-[800px]`, etc.) or tight vertical padding budgets so that when scaled via `DesktopScaler`, the entire section height maps cleanly to standard desktop screen aspect ratios (16:9, 16:10, 1440×900, 1920×1080).

```tsx
// DesktopScaler logic ensuring global section-by-section scaling
const checkScale = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    setScale(Math.min(1.1, windowWidth / 390));
  } else {
    setScale(windowWidth / 1440); // Base canvas 1440px
  }
};
```

---

## 2. Section-by-Section Height & Fitting Specifications

### **1. Hero Section**
- **Height Budget**: `h-[720px]` – `h-[800px]` (Fitted to 100vh viewport).
- **Layout Structure (3-Line Grid)**:
  - **Line 1 ("THE")**: `top-[60px]`, `left-[32px]`, Font size: `130px` (`Bebas Neue`).
  - **Line 2 ("WORLD STARES")**: `top-[170px]`, `left-[31px]`, Font size: `275px` (`Bebas Neue`). Spans full width to eliminate right-side black dead space.
  - **Line 3 ("STARE BACK")**: `top-[400px]`, `left-[550px]`, Font size: `230px` (`Bebas Neue`).
  - **Subtext & Action Buttons**: Positioned in the bottom-left area (`top-[420px]`, `left-[40px]`, subtext width `397px`; buttons at `top-[520px]`). Fits inside section height without bleeding into the next section.
  - **Floating Spray Bottles**: Pink bottle at `top-[35px]`, `left-[1220px]`; White bottle at `top-[355px]`, `left-[895px]`, scaled `2.75x`.

### **2. Problem Statement & Reaction Cards Section**
- **Height Budget**: Sticky viewport container fitting `100vh`.
- **Layout Mechanics**: Pinning container that displays text reveals on the left while holding reaction cards on the right in view.
- **Badge Offset**: Sip Check circular badge enlarged to `370px × 370px` with `-ml-16` inward pull toward the text column.

### **3. Help Without Hold Up (SOS Section)**
- **Height Budget**: **`md:h-[780px]`** (`overflow-hidden`).
- **Layout Structure**: Single-screen view holding section header, 3 interactive feature cards, and active Lottie animation preview box.
- **Fitting Rule**: Keeps interactive cards and preview height bound within 780px desktop height so no scrollbar appears inside the section.

### **4. Safety Habits Section**
- **Height Budget**: `md:py-[36px]` ~ `760px` total fitted canvas.
- **Heading**: `"THE SAFETY HABITS YOU ALREADY HAVE. UPGRADED."` at `80px` (`Bebas Neue`, centered, line-height `90%`).
- **Cards Fit**: 3 auto-advancing Lottie feature cards arranged in grid, fitted within section height.

### **5. Safety Designed Section (Product Highlights)**
- **Height Budget**: ~`750px` single-screen section.
- **Layout Structure**: Dual-column product highlight (Pepper Spray & Sip Check covers) with badge graphics fitted in screen view.

### **6. Safety Community Section**
- **Height Budget**: ~`780px` screen section.
- **Layout Structure**: Centered community statement, count-up numbers, and background wave graphics fitted in viewport.

### **7. Cream Theme Container (Why Nazr Exists / Interactive Cards / Join Conversation)**
- **Height Budget**: Fitted multi-card views inside DesktopScaler wrapper with `rounded-[26px]` container corners.

---

## 3. Reaction Image Card Scaling & Edge-to-Edge Fit

### **Issue Solved:**
Reaction cards (`/home why (1).svg`, `/home why (2).svg`) contain internal SVG canvas rotation padding (`viewBox="0 0 310 421"` with `-4.4°` element rotation). Rendering them at standard size (`scale-[1.0]`) leaves light margins/canvas borders around photos inside rounded containers.

### **Implementation Rule:**
Increase image container scaling to **`scale-[1.18]`** (`object-cover scale-[1.18]`). This zooms past internal SVG rotation margins, forcing photos to fit edge-to-edge seamlessly inside card containers without exposing canvas borders.

### **Target Components:**
- `InteractiveCards.tsx`
- `ShopProblemSteps.tsx`
- `WhyNazrExists.tsx`

```tsx
<Image
  src="/images/home why (1).svg"
  alt="Reaction Card"
  fill
  className="object-cover scale-[1.18]"
/>
```

---

## 4. Footer Section Edge-to-Edge Layout & Alignment

### **1. Section & Container Padding:**
- **Outer Footer**: `px-4 sm:px-6 md:px-8`
- **Content Wrapper**: `max-w-[1440px] px-2 sm:px-4 md:px-6 mx-auto`

### **2. Category Headers with Dropdown Indicators:**
Add downward chevron SVG icon (`∨`) next to each section header (`[ PAGES ] ∨`, `[ SOCIALS ] ∨`, `[ CONTACT ] ∨`).

### **3. Subtitle Alignment ("THE WORLD STARES, STARE BACK"):**
- **Font**: `Bebas Neue` (`var(--font-bebas)`)
- **Size & Color**: `text-[22px]`, `#FFF1EB`
- **Alignment**: `ml-0.5 sm:ml-1 md:ml-2` (aligned over the left ear/wing tip of the Owl logo mark below).

### **4. Owl Logo & NAZR Brand SVG Expansion:**
- **Container Class**: `relative w-[calc(100%+3rem)] -mx-4 sm:-mx-6 md:-mx-6 h-[110px] sm:h-[180px] md:h-[380px] lg:h-[420px]`
- **Image Class**: `object-cover md:object-contain object-bottom`

### **5. 3-Column Bottom Copyright Bar:**
Structured into a single 3-column inline grid on desktop (`Left`, `Center`, `Right`).

---

## Quick Developer Summary Checklist
1. **Fit Every Section in Viewport**: Maintain desktop height constraints (`md:h-[780px]`, `h-[800px]`) so each section fits inside `100vh` single screen view.
2. **Apply DesktopScaler**: Ensure all sections are wrapped in `DesktopScaler` (1440px width base zoom) for proportional scaling across screen resolutions.
3. **Card Reaction Scaling**: Set reaction images to `scale-[1.18]` (`object-cover`).
4. **Hero Line 2 ("WORLD STARES")**: Set size to `275px` to eliminate right-side gaps.
5. **Hero Line 3 ("STARE BACK")**: Set size to `230px` at `top-[400px]`, `left-[550px]`.
6. **Safety Habits Heading**: Set font size to `80px` centered.
7. **Footer Expansion**: Expand footer SVG edge-to-edge using `-mx-6` and `h-[420px]`.
