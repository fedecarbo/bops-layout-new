# Government Blue Color Scale

Complete color palette for the UK Government Blue brand colors, now available throughout your application.

## Color Scale Reference

| Shade | Variable | Hex Code | Usage | Official Brand Color |
|-------|----------|----------|-------|---------------------|
| **50** | `gov-blue-50` | `#f9fbfd` | Lightest tint, backgrounds | |
| **100** | `gov-blue-100` | `#f4f8fb` | Very light blue backgrounds | ✅ Official |
| **200** | `gov-blue-200` | `#d9e8f4` | Light tints, dividers | |
| **300** | `gov-blue-300` | `#8eb8dc` | Medium light, borders | ✅ Official |
| **400** | `gov-blue-400` | `#6fa5d1` | Medium blue, icons | |
| **500** | `gov-blue-500` | `#5694ca` | Primary medium blue | ✅ Official |
| **600** | `gov-blue-600` | `#1d70b8` | Primary brand blue | ✅ Official |
| **700** | `gov-blue-700` | `#1a65a6` | Button text, links | |
| **800** | `gov-blue-800` | `#003078` | Button hover, dark text | |
| **900** | `gov-blue-900` | `#002952` | Very dark blue | |
| **950** | `gov-blue-950` | `#001a33` | Darkest shade | |

## How to Use

### In Tailwind Classes

You can now use these colors with standard Tailwind utilities:

```tsx
// Background colors
<div className="bg-gov-blue-100">Lightest blue background</div>
<div className="bg-gov-blue-600">Primary brand blue background</div>

// Text colors
<p className="text-gov-blue-700">Button text color</p>
<p className="text-gov-blue-800">Hover state text</p>

// Borders
<div className="border border-gov-blue-300">Medium light blue border</div>

// Hover states
<button className="text-gov-blue-700 hover:text-gov-blue-800">
  Hover me
</button>

// With opacity
<div className="bg-gov-blue-300/20">20% opacity blue</div>
```

### In CSS Variables

Access directly in your CSS or inline styles:

```css
/* In CSS files */
.custom-element {
  background-color: var(--color-gov-blue-100);
  border-color: var(--color-gov-blue-300);
  color: var(--color-gov-blue-700);
}

/* Hover states */
.custom-link:hover {
  color: var(--color-gov-blue-800);
}
```

```tsx
// In inline styles
<div style={{ backgroundColor: 'var(--color-gov-blue-100)' }}>
  Content
</div>
```

### Brand Color Aliases

All `gov-blue-*` colors are also available as `brand-*`:

```tsx
<div className="bg-brand-100">Same as gov-blue-100</div>
<p className="text-brand-600">Same as gov-blue-600</p>
```

### Blue Override

The default Tailwind `blue-*` scale is overridden with government blues:

```tsx
<div className="bg-blue-100">Uses gov-blue-100</div>
<p className="text-blue-600">Uses gov-blue-600</p>
```

## V2 Sidebar Theme - Professional Tinting Pattern

The V2 theme follows **Tailwind UI Blocks brand sidebar tinting patterns** for visual consistency and professional appearance.

### Tinting Logic Explained

Based on Tailwind UI's brand sidebars (like the indigo-800 variant), we apply the same progressive tinting logic to gov-blue:

**Brand Sidebar Pattern:**
- Dark background (indigo-800)
- Light text (indigo-100) → White on hover/active
- Darkest overlay for hover (indigo-950/25)

**Our Light Sidebar Pattern (Inverse):**
- Light background (gov-blue-100)
- Dark text (gov-blue-700) → Darker on hover (800) → Darkest when active (900)
- Light overlay for hover (gov-blue-300 @ 15-25%)

### V2 Color Mapping

| Element | Variable | Gov-Blue Shade | Hex | Tinting Logic |
|---------|----------|----------------|-----|---------------|
| **Background** | `--sidebar-bg` | 100 | #f4f8fb | Lightest background |
| **Border** | `--sidebar-border` | 300 | #8eb8dc | Medium-light border |
| **Text Default** | `--sidebar-text-default` | 700 | #1a65a6 | Dark for contrast |
| **Text Hover** | `--sidebar-text-hover` | 800 | #003078 | Darker on hover |
| **Text Active** | `--sidebar-text-active` | 900 | #002952 | Darkest when active |
| **Hover BG** | `--sidebar-bg-hover` | 300 @ 15% | rgba(142,184,220,0.15) | Subtle overlay |
| **Active BG** | `--sidebar-bg-active` | 300 @ 25% | rgba(142,184,220,0.25) | Visible overlay |
| **Icon Default** | `--sidebar-icon-default` | 500 | #5694ca | Medium blue (lighter than text) |
| **Icon Hover** | `--sidebar-icon-hover` | 800 | #003078 | Dark on hover |
| **Icon Active** | `--sidebar-icon-active` | 900 | #002952 | Darkest when active |
| **Heading** | `--sidebar-heading` | 600 | #1d70b8 | Primary brand for emphasis |
| **Divider** | `--sidebar-divider` | 200 | #d9e8f4 | Very subtle line |
| **Checkbox Border** | `--sidebar-checkbox-complete-border` | 400 | #6fa5d1 | Medium border |
| **Checkbox BG** | `--sidebar-checkbox-complete-bg` | 600 | #1d70b8 | Primary brand fill |
| **Checkbox Incomplete** | `--sidebar-checkbox-incomplete-border` | 300 | #8eb8dc | Matches border |

### Progressive Tinting Patterns

**Text & Icons (Interactive Elements):**
```
Default State:  700 (medium-dark) / 500 (medium for icons)
    ↓
Hover State:    800 (darker)
    ↓
Active State:   900 (darkest)
```

**Backgrounds (Overlays):**
```
Default:        Transparent
    ↓
Hover:          300 @ 15% opacity (subtle hint)
    ↓
Active:         300 @ 25% opacity (more visible)
```

**Visual Hierarchy:**
- Icons are lighter (500) than text (700) for proper visual weight
- Headings use primary brand (600) for emphasis
- Dividers are very subtle (200) to avoid competing with content

## Experimenting with V2 Theme

To experiment with different tints for sidebar elements, edit the V2 theme in:
- **CSS:** `/app/applications/[id]/assessment/sidebar-themes.css`
- **TypeScript:** `/app/applications/[id]/assessment/sidebar-themes.ts`

### Quick Variations to Try

**Lighter Background (More Blue Tint):**
```css
--sidebar-bg: var(--color-gov-blue-200);  /* #d9e8f4 - slightly darker blue tint */
```

**Stronger Text Contrast:**
```css
--sidebar-text-default: var(--color-gov-blue-800);  /* #003078 - much darker text */
--sidebar-text-hover: var(--color-gov-blue-900);    /* #002952 - near black on hover */
```

**More Visible Hover States:**
```css
--sidebar-bg-hover: rgba(142, 184, 220, 0.25);   /* 25% instead of 15% */
--sidebar-bg-active: rgba(142, 184, 220, 0.35);  /* 35% instead of 25% */
```

**Different Icon Weights:**
```css
/* Lighter, more subtle icons */
--sidebar-icon-default: var(--color-gov-blue-400);  /* #6fa5d1 - lighter */

/* Or darker, more prominent icons */
--sidebar-icon-default: var(--color-gov-blue-600);  /* #1d70b8 - primary brand */
```

**Stronger Border:**
```css
--sidebar-border: var(--color-gov-blue-400);  /* #6fa5d1 - more visible border */
--sidebar-border: var(--color-gov-blue-500);  /* #5694ca - even stronger */
```

### Following the Tinting Pattern

When adjusting colors, maintain the **progressive darkening pattern**:

✅ **Good:** Default (600) → Hover (700) → Active (800)
❌ **Bad:** Default (800) → Hover (600) → Active (500)

**Key Principle:** Interactive states should progressively darken (or lighten if on dark background) to indicate increased engagement.

## Quick Reference: Common Combinations

### Light Blue Theme
- Background: `gov-blue-50` or `gov-blue-100`
- Text: `gov-blue-700` or `gov-blue-800`
- Borders: `gov-blue-200` or `gov-blue-300`

### Medium Blue Theme
- Background: `gov-blue-200` or `gov-blue-300`
- Text: `gov-blue-800` or `gov-blue-900`
- Borders: `gov-blue-400` or `gov-blue-500`

### Dark Blue Theme
- Background: `gov-blue-800` or `gov-blue-900`
- Text: `gov-blue-100` or white
- Borders: `gov-blue-600` or `gov-blue-700`

## Where Colors Are Defined

**Global CSS:** `/app/globals.css` - Contains the `@theme` directive with all color definitions
**Sidebar Theme CSS:** `/app/applications/[id]/assessment/sidebar-themes.css` - V2 theme implementation
**Sidebar Theme TS:** `/app/applications/[id]/assessment/sidebar-themes.ts` - TypeScript theme definitions
