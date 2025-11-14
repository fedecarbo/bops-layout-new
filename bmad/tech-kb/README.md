# Tech Knowledge Base (tech-kb)

**Version:** 1.0.0
**Status:** Active
**Part of:** BMAD-CORE™ ecosystem

---

## Purpose

The Tech Knowledge Base (tech-kb) is a centralized repository of technical knowledge and best practices for modern web technologies. It ensures agents work with current versions of frameworks and libraries, avoiding outdated patterns that can lead to setup mistakes and build errors.

---

## Problem It Solves

AI agents may have training data that includes outdated patterns (e.g., Tailwind v3 when v4.1 is current). This can lead to:

- Incorrect project setup
- Build errors
- Using deprecated syntax
- Configuration anti-patterns
- Wasted time debugging issues

The tech-kb provides **authoritative, version-specific guidance** that agents load before performing technical tasks.

---

## Current Knowledge Domains

### Tailwind CSS v4.1

**Location:** `tailwind-v4/`

**Files:**
- **essentials.md** (~480 lines) - Core v4.1 setup patterns, `@theme` usage, Next.js integration
- **troubleshooting.md** (~100 lines) - Common mistakes and quick fixes

**When to Load:**
- **Atlas:** Before scaffolding any project with Tailwind v4.1
- **Forge:** Before building UI components in Tailwind projects

**Key Topics:**
- CSS-first configuration (no `tailwind.config.js` needed)
- Correct PostCSS plugin setup (`@tailwindcss/postcss`)
- `@theme` vs `@theme inline` patterns
- Next.js font integration
- Context7 library IDs for latest docs
- Common v3 → v4 mistakes to avoid

---

### Catalyst UI

**Location:** `catalyst-ui/`

**Files:**
- **essentials.md** (~550 lines) - Component patterns, best practices, import patterns, form structure
- **troubleshooting.md** (~480 lines) - Common mistakes, errors, and fixes

**When to Load:**
- **Forge:** Before creating or working with Catalyst UI components

**Key Topics:**
- Component location and import patterns
- Headless UI wrapper architecture
- Compound component patterns (Field + Label + Input)
- Form components and validation
- Layout components (SidebarLayout, StackedLayout)
- Feedback components (Alert, Dialog)
- Styling patterns with clsx and data attributes
- Accessibility features built-in
- Context7 library IDs for Catalyst and Headless UI docs
- Common component behavior issues and fixes

---

## Integration with Agents

### Atlas (Prototype Architect)

**Integration Point:** Critical actions section

**Logic:**
```xml
<i critical="MANDATORY">
  Before scaffolding Tailwind v4.1:
  - Load {project-root}/bmad/tech-kb/tailwind-v4/essentials.md
  - Load {project-root}/bmad/tech-kb/tailwind-v4/troubleshooting.md
  - Apply v4.1 patterns for PostCSS, CSS imports, and theme configuration
</i>
```

**Expected Behavior:**
- Atlas scaffolds projects with correct v4.1 setup
- No `tailwind.config.js` created (unless needed for plugins)
- PostCSS uses `@tailwindcss/postcss` plugin
- CSS uses `@import "tailwindcss"` syntax
- Theme configuration in CSS using `@theme` blocks

---

### Forge (Builder)

**Integration Point:** Critical actions section

**Logic:**
```xml
<i critical="MANDATORY">
  Before building UI components:
  - Load {project-root}/bmad/tech-kb/tailwind-v4/essentials.md for Tailwind v4.1 patterns
  - Load {project-root}/bmad/tech-kb/catalyst-ui/essentials.md for Catalyst component usage
  - Apply correct utility classes, component patterns, and structure
</i>
```

**Expected Behavior:**
- Forge uses correct v4.1 utility classes
- Uses updated shadow scale (`shadow-xs` not `shadow-sm`)
- Uses explicit ring widths (`ring-3` not `ring`)
- Implements theme customization correctly
- Uses Catalyst components correctly (imports, compound patterns, props)
- Copies components from BMAD data folder to project, imports from `@/components/*`
- Uses proper form structure (Field + Label + Input)
- Adds `data-slot="icon"` to icons in InputGroup

---

## Context7 MCP Fallback

The tech-kb includes Context7 library IDs for fetching the latest official documentation when available.

**Tailwind CSS:**
- **Primary:** `/tailwindlabs/tailwindcss.com` (trust score: 10/10)
- **Fallback:** `/websites/tailwindcss` (trust score: 9.5/10)

**Catalyst UI:**
- **Primary:** `/tailwindlabs/catalyst` (trust score: 10/10)
- **Fallback:** `/tailwindlabs/headlessui.com` (trust score: 10/10)

**Headless UI:**
- **Primary:** `/tailwindlabs/headlessui.com` (trust score: 10/10)

**Usage Pattern:**
1. Agent loads local KB first (fast, reliable)
2. If specific detail needed, fetch from Context7 for latest official docs
3. Combine local patterns + latest docs for comprehensive knowledge

---

## File Structure

```
tech-kb/
├── config.yaml                      # Module configuration
├── README.md                        # This file
├── tailwind-v4/
│   ├── essentials.md                # Core setup & patterns
│   └── troubleshooting.md           # Common mistakes & fixes
└── catalyst-ui/
    ├── essentials.md                # Component patterns & best practices
    └── troubleshooting.md           # Common mistakes & fixes
```

---

## Future Expansion

The tech-kb is designed to grow with additional technology domains:

**Planned Domains:**
- **react-19/** - React 19 patterns, Server Components, hooks
- **next-16/** - Next.js 16 App Router, routing, metadata
- **typescript-5/** - TypeScript 5+ features, strict patterns

**Adding New Domains:**

1. Create new folder: `tech-kb/{technology-name}/`
2. Add knowledge files (essentials, troubleshooting, patterns)
3. Update `config.yaml` with new domain
4. Integrate loading logic into relevant agents
5. Document in this README

---

## Maintenance

### When to Update

**Trigger Events:**
- Major version releases (e.g., Tailwind v5)
- Breaking changes in dependencies
- Discovery of new common mistakes
- Agent making repeated errors

**Update Process:**
1. Review agent errors/mistakes in logs
2. Identify knowledge gaps
3. Update relevant KB files
4. Test with agents
5. Document changes in CHANGELOG

### Version Control

- **Module Version:** Semantic versioning in `config.yaml`
- **File Versions:** Update dates in file headers
- **Change Tracking:** Maintain CHANGELOG for significant updates

---

## Usage Example

### Agent Loading KB Before Task

```typescript
// Pseudo-code for agent logic

async function scaffoldProject(options) {
  // Check if Tailwind v4+ in tech stack
  if (options.techStack.includes('tailwind-v4')) {
    // Load KB
    const essentials = await readFile('{project-root}/bmad/tech-kb/tailwind-v4/essentials.md');
    const troubleshooting = await readFile('{project-root}/bmad/tech-kb/tailwind-v4/troubleshooting.md');

    // Apply knowledge to task
    // - Use @import "tailwindcss" not @tailwind
    // - Use @tailwindcss/postcss plugin
    // - No tailwind.config.js needed
    // - Theme in CSS via @theme blocks
  }

  // Proceed with scaffolding using correct patterns
}
```

---

## Benefits

**For Agents:**
- Access to current, accurate technical knowledge
- Prevents common setup mistakes
- Reduces trial-and-error debugging
- Enables confident implementation

**For Users:**
- Projects setup correctly from the start
- No time wasted on configuration issues
- Consistent patterns across projects
- Faster development velocity

**For the Ecosystem:**
- Centralized knowledge management
- Easy to update when technologies evolve
- Scalable to new domains
- Improves over time as mistakes are captured

---

## Contributing

When you discover a common mistake or setup issue:

1. Document the problem in `troubleshooting.md`
2. Add the correct pattern to `essentials.md` if needed
3. Update agent integration logic if required
4. Test with agents to verify resolution

---

## License

Part of BMAD-CORE™ ecosystem.

---

## Contact

For questions, issues, or suggestions regarding the tech-kb module, consult the BMAD documentation or create an issue in the project repository.
