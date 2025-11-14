# Tailwind CSS v4.1 Troubleshooting

**Purpose:** Common mistakes to avoid when working with Tailwind v4.1, especially for agents trained on v3 patterns.

---

## Common Mistakes & Solutions

### Mistake 1: Using `@tailwind` Directives

**Symptom:**
```
Warning: `@tailwind` is deprecated in v4. Use `@import "tailwindcss"` instead.
```

**Wrong (v3 syntax):**
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Correct (v4.1):**
```css
/* globals.css */
@import "tailwindcss";
```

---

### Mistake 2: Wrong PostCSS Plugin

**Symptom:**
```
Error: Cannot find module 'tailwindcss'
Error: Tailwind is not generating any styles
```

**Wrong:**
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Correct:**
```javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Key Points:**
- Plugin name is `@tailwindcss/postcss` (NOT `tailwindcss`)
- No `autoprefixer` needed (built-in)
- Use `.mjs` extension or set `"type": "module"` in package.json

---

### Mistake 3: Creating `tailwind.config.js` File

**Symptom:**
Agent creates unnecessary `tailwind.config.js` file with content paths and theme extensions.

**Wrong:**
```javascript
// tailwind.config.js - DON'T CREATE THIS!
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      },
    },
  },
}
```

**Correct:**
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
}
```

**Note:** Only create `tailwind.config.js` if using third-party plugins that require it. For pure theme customization, use CSS `@theme` blocks.

---

### Mistake 4: Forgetting `inline` for CSS Variables

**Symptom:**
- Theme utilities don't work
- Utilities resolve to literal string `var(--variable)` instead of actual values
- Next.js font variables don't apply

**Wrong:**
```css
:root {
  --font-geist-sans: Geist, sans-serif;
}

@theme {
  --font-sans: var(--font-geist-sans);  /* ❌ Won't resolve properly */
}
```

**Correct:**
```css
:root {
  --font-geist-sans: Geist, sans-serif;
}

@theme inline {
  --font-sans: var(--font-geist-sans);  /* ✅ Resolves correctly */
}
```

**Rule:**
- **Static values** → `@theme`
- **CSS variable references** → `@theme inline`

---

### Mistake 5: Manual Content Configuration

**Symptom:**
Agent tries to manually configure content paths.

**Wrong:**
```javascript
// tailwind.config.js - unnecessary!
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
```

**Correct:**
Do nothing! Content detection is **automatic** in v4.1.

**If really needed** (rare cases):
```css
@import "tailwindcss";
@source "./src/**/*.tsx";
@source "../../packages/ui/**/*.tsx";
```

---

### Mistake 6: Using Old Shadow Utilities

**Symptom:**
Shadows look different than expected or don't render.

**Wrong:**
```tsx
<div className="shadow-sm">...</div>
```

**Correct:**
```tsx
<div className="shadow-xs">...</div>
```

**Shadow scale changed in v4.1:**

| v3 | v4.1 |
|----|------|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `shadow-md` | `shadow` |
| `shadow-lg` | `shadow-md` |
| `shadow-xl` | `shadow-lg` |
| `shadow-2xl` | `shadow-xl` |

---

### Mistake 7: Using `ring` Without Width

**Symptom:**
The `ring` utility doesn't show anything.

**Wrong:**
```tsx
<button className="ring">Click me</button>
```

**Correct:**
```tsx
<button className="ring-3">Click me</button>
```

In v4.1, ring utilities require **explicit width**:
- `ring-1`, `ring-2`, `ring-3`, `ring-4`, `ring-8`

---

### Mistake 8: Wrong CSS Variable Syntax

**Symptom:**
Arbitrary values with CSS variables don't work.

**Wrong:**
```tsx
<div className="bg-[--brand]">...</div>
```

**Correct:**
```tsx
<div className="bg-(--brand)">...</div>
```

Changed from square brackets `[]` to **parentheses** `()` in v4.1.

---

### Mistake 9: Installing Autoprefixer Separately

**Symptom:**
Agent installs `autoprefixer` package unnecessarily.

**Wrong:**
```bash
npm install tailwindcss@next @tailwindcss/postcss@next autoprefixer
```

**Correct:**
```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

Autoprefixer is **built-in** to `@tailwindcss/postcss` in v4.1.

---

### Mistake 10: Using JavaScript Theme Extensions

**Symptom:**
Agent defines theme in `tailwind.config.js` instead of CSS.

**Wrong:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

**Correct:**
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --font-sans: Inter, sans-serif;
}
```

---

### Mistake 11: Not Checking Browser Requirements

**Symptom:**
Styles don't work in older browsers.

**Solution:**
Tailwind v4.1 requires modern browsers:
- Safari 16.4+ (Sept 2023)
- Chrome 111+ (March 2023)
- Firefox 128+ (July 2024)
- Edge 111+ (March 2023)

If broader support is needed, consider staying with v3.

---

## Build Error Diagnostics

### Error: "Cannot find module '@tailwindcss/postcss'"

**Cause:** Package not installed

**Solution:**
```bash
npm install @tailwindcss/postcss@next
```

---

### Error: "No utility classes are being generated"

**Possible causes:**

1. **Wrong PostCSS plugin**
   - Check `postcss.config.mjs` uses `@tailwindcss/postcss`

2. **Wrong CSS import**
   - Check `globals.css` has `@import "tailwindcss"` (not `@tailwind`)

3. **CSS not imported in layout**
   - Check root layout imports the CSS file

4. **Build cache issue**
   - Clear `.next` folder and rebuild:
     ```bash
     rm -rf .next
     npm run dev
     ```

---

### Error: "PostCSS plugin was not exported correctly"

**Cause:** Wrong file extension or module type

**Solution:**
- Use `postcss.config.mjs` extension
- OR use `.js` with `"type": "module"` in package.json
- Ensure using ES modules syntax: `export default`

---

### Warning: "Deprecation warnings about @tailwind"

**Cause:** Using old v3 directives

**Solution:**
Replace in `globals.css`:
```css
- @tailwind base;
- @tailwind components;
- @tailwind utilities;
+ @import "tailwindcss";
```

---

## Theme Issues

### Custom colors not working

**Check:**

1. **Correct prefix:**
   ```css
   /* ✅ Correct */
   @theme {
     --color-brand: #3b82f6;
   }

   /* ❌ Wrong - missing "color" prefix */
   @theme {
     --brand: #3b82f6;
   }
   ```

2. **Using `inline` when needed:**
   ```css
   /* If referencing CSS variables, use inline */
   @theme inline {
     --color-primary: var(--my-primary);
   }
   ```

---

### Custom fonts not applying

**Check:**

1. **Using `@theme inline` for CSS variables:**
   ```css
   /* ✅ Correct */
   @theme inline {
     --font-sans: var(--font-inter);
   }

   /* ❌ Wrong - missing "inline" */
   @theme {
     --font-sans: var(--font-inter);
   }
   ```

2. **Font variable applied to body:**
   ```tsx
   <body className={inter.variable}>
   ```

3. **Font imported correctly:**
   ```typescript
   import { Inter } from "next/font/google";

   const inter = Inter({
     variable: "--font-inter",
     subsets: ["latin"],
   });
   ```

---

## Prevention Checklist

When setting up Tailwind v4.1, verify:

- [ ] Installed correct packages: `tailwindcss@next` and `@tailwindcss/postcss@next`
- [ ] PostCSS config uses `@tailwindcss/postcss` plugin
- [ ] PostCSS config uses `.mjs` extension or ES modules
- [ ] `globals.css` uses `@import "tailwindcss"` (not `@tailwind`)
- [ ] CSS imported in root layout
- [ ] Custom theme uses `@theme` blocks in CSS (not JS config)
- [ ] Used `@theme inline` for CSS variable references
- [ ] No `tailwind.config.js` created (unless needed for plugins)
- [ ] No `autoprefixer` installed separately
- [ ] Updated shadow utilities to new names (e.g., `shadow-xs`)

---

## Quick Fixes Summary

| Problem | Quick Fix |
|---------|-----------|
| Build errors | Check PostCSS plugin is `@tailwindcss/postcss` |
| No styles | Change `@tailwind` to `@import "tailwindcss"` |
| Fonts don't work | Use `@theme inline` for CSS variable fonts |
| Colors don't work | Check prefix is `--color-*` in `@theme` block |
| Shadows wrong | Update to new scale (`shadow-sm` → `shadow-xs`) |
| Ring invisible | Add explicit width (`ring` → `ring-3`) |
| CSS vars don't work | Change `bg-[--var]` to `bg-(--var)` |

---

## When to Load This Guide

**Atlas (Prototype Architect):** Load before scaffolding any project with Tailwind v4.1

**Forge (Builder):** Load before building UI components if Tailwind detected in dependencies

**Any Agent:** Reference when encountering unexplained Tailwind build errors or styling issues
