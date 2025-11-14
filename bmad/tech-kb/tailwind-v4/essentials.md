# Tailwind CSS v4.1 Essentials

**Purpose:** Critical knowledge for setting up and working with Tailwind CSS v4.1 from scratch. This guide ensures agents setup projects correctly using v4.1's CSS-first paradigm, avoiding outdated v3 patterns.

**Version:** Tailwind CSS v4.1+
**Target:** Fresh project setup (NOT migration)

---

## Table of Contents

1. [The Fundamental Shift](#the-fundamental-shift)
2. [Correct v4.1 Setup from Scratch](#correct-v41-setup-from-scratch)
3. [Theme Configuration with @theme](#theme-configuration-with-theme)
4. [Common Patterns](#common-patterns)
5. [Context7 MCP Integration](#context7-mcp-integration)
6. [Quick Reference](#quick-reference)

---

## The Fundamental Shift

### v4.1 is CSS-First, NOT JavaScript-First

**What Changed:**

| Aspect | v3 (Old) | v4.1 (Current) |
|--------|----------|----------------|
| **Configuration** | `tailwind.config.js` (required) | CSS files via `@theme` (no JS config needed) |
| **Import Syntax** | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| **PostCSS Plugin** | `tailwindcss` | `@tailwindcss/postcss` |
| **Content Detection** | Manual in config | Automatic |
| **Autoprefixer** | Separate package | Built-in |
| **Theme Extension** | JavaScript objects | CSS variables |

### Critical Rules for v4.1

1. **NO `tailwind.config.js` file needed** (unless using plugins)
2. **NO `@tailwind` directives** - use `@import "tailwindcss"`
3. **NO manual content paths** - detection is automatic
4. **Use `@tailwindcss/postcss`** - NOT `tailwindcss` plugin
5. **Define themes in CSS** - using `@theme` blocks

---

## Correct v4.1 Setup from Scratch

### Step 1: Install Packages

```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

**Key Points:**
- Install **both** `tailwindcss` AND `@tailwindcss/postcss`
- Use `@next` tag for v4.1 (or `^4.0.0` for stable releases)
- **Do NOT** install `autoprefixer` (built-in to v4.1)

---

### Step 2: Configure PostCSS

**Create `postcss.config.mjs`:**

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**Critical:**
- Plugin name is `@tailwindcss/postcss` (NOT `tailwindcss`)
- Use `.mjs` extension OR `.js` with `"type": "module"` in package.json
- No other plugins needed (autoprefixer is built-in)

---

### Step 3: Create CSS Entry Point

**Create `app/globals.css`:**

```css
@import "tailwindcss";
```

**That's it!** One line. No other directives needed.

**NEVER use these (v3 syntax):**
```css
/* ❌ WRONG - v3 syntax */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Step 4: Import CSS in Layout

**Next.js App Router (`app/layout.tsx`):**

```typescript
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Step 5: Start Using Utilities

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Tailwind v4.1 is working!
</div>
```

**No configuration file needed. Content detection is automatic.**

---

## Theme Configuration with @theme

### Understanding @theme vs @theme inline

There are **two variants** of the `@theme` directive:

#### 1. `@theme` - For Static Values

Use for **hardcoded values** defined directly in your CSS:

```css
@theme {
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --font-display: Satoshi, sans-serif;
  --spacing-huge: 8rem;
}
```

**Generates utilities:**
- `bg-brand-500`, `text-brand-500`, `border-brand-500`
- `font-display`
- `p-huge`, `m-huge`, `gap-huge`

---

#### 2. `@theme inline` - For CSS Variable References

Use when referencing **other CSS variables** (like Next.js fonts, dynamic themes):

```css
:root {
  --my-primary: #3b82f6;
  --font-geist-sans: Geist, sans-serif;
}

@theme inline {
  --color-primary: var(--my-primary);
  --font-sans: var(--font-geist-sans);
}
```

**Why `inline` matters:**

Without `inline`, Tailwind treats `var(--my-primary)` as a literal string. With `inline`, it preserves the CSS variable reference so it resolves correctly in the cascade.

**Rule of thumb:**
- Static values → `@theme`
- References to CSS variables → `@theme inline`

---

### CSS Variable Naming Convention

The prefix determines which utilities are generated:

| Prefix | Generated Utilities | Example |
|--------|---------------------|---------|
| `--color-*` | `bg-*`, `text-*`, `border-*`, `ring-*` | `--color-accent` → `bg-accent` |
| `--font-*` | `font-*` | `--font-display` → `font-display` |
| `--text-*` | `text-*` (font-size) | `--text-huge` → `text-huge` |
| `--spacing-*` | `p-*`, `m-*`, `w-*`, `h-*`, `gap-*` | `--spacing-xl` → `p-xl` |
| `--breakpoint-*` | Responsive variants | `--breakpoint-3xl` → `3xl:` |
| `--width-*` | `w-*` | `--width-sidebar` → `w-sidebar` |
| `--height-*` | `h-*` | `--height-header` → `h-header` |

---

## Common Patterns

### Pattern 1: Static Brand Colors

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-900: #1e3a8a;
}
```

**Usage:**
```tsx
<button className="bg-brand-500 hover:bg-brand-600 text-white">
  Click me
</button>
```

---

### Pattern 2: Next.js Font Integration

**app/layout.tsx:**
```typescript
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

**app/globals.css:**
```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-fira-code);
}
```

**Usage:**
```tsx
<p className="font-sans">Inter font</p>
<code className="font-mono">Fira Code</code>
```

**Why `inline`?** Because we're referencing Next.js font CSS variables.

---

### Pattern 3: Dynamic Theming with CSS Variables

```css
@import "tailwindcss";

/* Define base theme */
:root {
  --primary: #3b82f6;
  --background: #ffffff;
  --foreground: #171717;
}

/* Dark mode override */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

/* Map to Tailwind utilities */
@theme inline {
  --color-primary: var(--primary);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

**Usage:**
```tsx
<div className="bg-background text-foreground">
  Automatically switches with system theme!
</div>
```

---

### Pattern 4: Data Attribute Theme Switching

```css
@import "tailwindcss";

:root {
  --bg: #ffffff;
  --text: #171717;
}

[data-theme="dark"] {
  --bg: #0a0a0a;
  --text: #ededed;
}

[data-theme="blue"] {
  --bg: #dbeafe;
  --text: #1e3a8a;
}

@theme inline {
  --color-bg: var(--bg);
  --color-text: var(--text);
}
```

**JavaScript control:**
```typescript
// Toggle theme
document.documentElement.dataset.theme = 'dark';
```

---

### Pattern 5: Custom Content Sources (if needed)

If automatic detection fails, specify sources explicitly:

```css
@import "tailwindcss";
@source "../../packages/ui/src/**/*.tsx";
@source "../components/**/*.{js,jsx,ts,tsx}";

@theme {
  --color-brand: #3b82f6;
}
```

**Note:** Rarely needed - v4.1's auto-detection is excellent.

---

### Pattern 6: Using JS Config (for plugins only)

If you need JavaScript configuration for plugins:

**tailwind.config.js:**
```javascript
export default {
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

**globals.css:**
```css
@import "tailwindcss";
@config "./tailwind.config.js";

@theme {
  --color-brand: #3b82f6;
}
```

---

## Context7 MCP Integration

When scaffolding or building with Tailwind v4.1, agents can fetch the latest official documentation using Context7 MCP.

### Recommended Library IDs

**Primary (Recommended):**
- **Library ID:** `/tailwindlabs/tailwindcss.com`
- **Trust Score:** 10/10
- **Code Snippets:** 1,418
- **Use For:** Official v4 documentation, installation, configuration, all features

**Example usage in agent code:**
```typescript
// Fetch latest Tailwind v4 docs before setup
const docs = await mcp__context7__get_library_docs({
  context7CompatibleLibraryID: '/tailwindlabs/tailwindcss.com',
  topic: 'installation next.js v4',
  tokens: 5000
});
```

### Useful Plugins

| Plugin | Library ID | Use Case |
|--------|-----------|----------|
| Forms | `/tailwindlabs/tailwindcss-forms` | Form styling |
| Typography | `/tailwindlabs/tailwindcss-typography` | Article/blog content |
| Animations | `/jamiebuilds/tailwindcss-animate` | Pre-built animations |
| Icons | `/egoist/tailwindcss-icons` | Iconify integration |

---

## Quick Reference

### Minimal v4.1 Setup Checklist

- [ ] Install: `npm install tailwindcss@next @tailwindcss/postcss@next`
- [ ] Create `postcss.config.mjs` with `@tailwindcss/postcss` plugin
- [ ] Create `globals.css` with `@import "tailwindcss"`
- [ ] Import `globals.css` in root layout
- [ ] Define custom theme in `@theme` blocks (optional)
- [ ] Use `@theme inline` for CSS variable references

### Key Differences from v3

| Feature | v3 | v4.1 |
|---------|----|----- |
| Import | `@tailwind base;` etc | `@import "tailwindcss"` |
| Plugin | `tailwindcss` | `@tailwindcss/postcss` |
| Config | Required JS file | Optional, use CSS `@theme` |
| Content | Manual paths | Automatic detection |
| Autoprefixer | Separate package | Built-in |

### Utility Changes

| v3 | v4.1 |
|----|------|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `shadow-md` | `shadow` |
| `shadow-lg` | `shadow-md` |
| `shadow-xl` | `shadow-lg` |
| `shadow-2xl` | `shadow-xl` |
| `ring` | `ring-3` (explicit width) |
| `outline-none` | `outline-hidden` |
| `bg-[--var]` | `bg-(--var)` (parentheses) |

### Browser Requirements

Minimum versions for v4.1:
- Safari 16.4+ (Sept 2023)
- Chrome 111+ (March 2023)
- Firefox 128+ (July 2024)
- Edge 111+ (March 2023)

---

## Summary

Tailwind v4.1 represents a paradigm shift to CSS-first configuration:

1. **No `tailwind.config.js` needed** - use `@theme` in CSS
2. **Single import** - `@import "tailwindcss"`
3. **Correct plugin** - `@tailwindcss/postcss`
4. **Automatic content detection** - no manual paths
5. **Use `@theme inline`** - when referencing CSS variables

Follow these patterns, and v4.1 setup will be fast, clean, and error-free.
