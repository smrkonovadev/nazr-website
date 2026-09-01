# Hidden Footer Pages Backup

This file contains the exact JSX code and backup instructions to restore the hidden pages in `src/components/ui/Footer.tsx`.

## Hidden Pages List:
- **ABOUT** (`/about`)
- **WHY NAZR** (`/whynazrexists`)
- **NAZR APP** (`/nazrapp`)
- **HELPLINE** (`/helpline`)
- **BLOG** (`/blog`)

> **Active Pages**: Home (`/`), Shop (`/shop`), Support (`/support`), Login (`#`).

---

## Restoration Code Snippets

To restore any of these links, open [Footer.tsx](file:///c:/Users/harsh/Downloads/nazrf/nazr-website/src/components/ui/Footer.tsx) and insert the corresponding line into the `[ PAGES ]` section:

### Column 1 (Left):
```tsx
<Link href="/about" className={getLinkClass("/about")}>
  ABOUT
</Link>
<Link href="/whynazrexists" className={`${getLinkClass("/whynazrexists")} uppercase`}>
  WHY NAZR
</Link>
<Link href="/nazrapp" className={`${getLinkClass("/nazrapp")} uppercase`}>
  NAZR APP
</Link>
```

### Column 2 (Right):
```tsx
<Link href="/helpline" className={getLinkClass("/helpline")}>
  HELPLINE
</Link>
<Link href="/blog" className={getLinkClass("/blog")}>
  BLOG
</Link>
```

---

## Full Original Pages Grid in `Footer.tsx`:

```tsx
<div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-8 gap-y-1.5 md:gap-y-2">
  <div className="flex flex-col gap-1 md:gap-2">
    <Link href="/" className={getLinkClass("/")}>
      HOME
    </Link>
    <Link href="/about" className={getLinkClass("/about")}>
      ABOUT
    </Link>
    <Link href="/whynazrexists" className={`${getLinkClass("/whynazrexists")} uppercase`}>
      WHY NAZR
    </Link>
    <Link href="/shop" className={getLinkClass("/shop")}>
      SHOP
    </Link>
    <Link href="/nazrapp" className={`${getLinkClass("/nazrapp")} uppercase`}>
      NAZR APP
    </Link>
  </div>
  <div className="flex flex-col gap-1 md:gap-2">
    <Link href="/helpline" className={getLinkClass("/helpline")}>
      HELPLINE
    </Link>
    <Link href="/support" className={getLinkClass("/support")}>
      SUPPORT
    </Link>
    <Link href="/blog" className={getLinkClass("/blog")}>
      BLOG
    </Link>
    <Link href="#" className={getLinkClass("#")}>
      LOGIN
    </Link>
  </div>
</div>
```
