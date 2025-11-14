# Refactor Quality Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/refactor-quality/workflow.yaml</critical>
<critical>ALWAYS read refactor log to see previous improvements and avoid rework</critical>

<workflow>

<step n="1" goal="Load project context and understand current state">

<action>Load context files to understand what's been built and reviewed</action>
<action>Read: {project-root}/docs/rapid-prototype/project-brief.md</action>
<action>Read: {project-root}/docs/rapid-prototype/build-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/refactor-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Note: Refactor log shows previous improvements and outstanding issues from reviews</action>

</step>

<step n="2" goal="Determine refactor focus">

<ask response="refactor_type">What type of refactoring?
a) Type safety - Fix TypeScript issues
b) Performance - Optimize renders, bundle size, loading
c) Structure - Improve code organization
d) Patterns - Apply Next.js 16 & React best practices
e) Accessibility - Enhance a11y compliance
f) Full - Comprehensive refactor (all of the above)
</ask>

<ask response="refactor_scope">What should I refactor?
a) Recent code (from review findings)
b) Specific files
c) Entire project
</ask>

<check if="refactor_scope == 'a' or refactor_scope == 'recent'">
  <action>Extract recent review findings from refactor-log.md</action>
  <action>Identify files with issues</action>
  <action>Set: files_to_refactor = files from review</action>
</check>

<check if="refactor_scope == 'b' or refactor_scope == 'specific'">
  <ask response="specific_files">Which files? (comma-separated paths)</ask>
  <action>Parse files list</action>
  <action>Set: files_to_refactor = specified files</action>
</check>

<check if="refactor_scope == 'c' or refactor_scope == 'entire'">
  <action>Scan codebase:</action>
  <action>List all files in: {project-root}/app/</action>
  <action>List all files in: {project-root}/components/</action>
  <action>List all files in: {project-root}/lib/</action>
  <action>Set: files_to_refactor = all project files</action>
</check>

</step>

<step n="3" goal="Refactor type safety" if="refactor_type includes type_safety or full">

<action>For each file in files_to_refactor:</action>

<action>Fix TypeScript issues:</action>
- Replace `any` types with proper types
- Add missing type annotations
- Define interfaces for complex objects
- Ensure strict mode compliance
- Fix type errors from tsc --noEmit

<action>Example refactors:</action>

```typescript
// Before
function handleClick(data: any) { ... }

// After
interface ClickData {
  id: string
  action: 'submit' | 'cancel'
}
function handleClick(data: ClickData) { ... }
```

<action>Track type safety improvements made</action>

</step>

<step n="4" goal="Refactor performance" if="refactor_type includes performance or full">

<action>For each file:</action>

<action>Optimize React performance:</action>
- Convert Client Components to Server Components where possible
- Add React.memo for expensive components
- Extract heavy computations
- Optimize re-renders
- Use next/image for images

<action>Optimize bundle size:</action>
- Remove unused dependencies
- Lazy load heavy components
- Code split where beneficial

<action>Example refactors:</action>

```typescript
// Before (Client Component)
'use client'
export function StaticCard({ title }: Props) {
  return <div>{title}</div>
}

// After (Server Component - better performance)
export function StaticCard({ title }: Props) {
  return <div>{title}</div>
}
```

<action>Track performance improvements made</action>

</step>

<step n="5" goal="Refactor structure and organization" if="refactor_type includes structure or full">

<action>For each file:</action>

<action>Improve organization:</action>
- Organize imports (React, third-party, local)
- Remove unused imports
- Extract complex logic to utilities
- Split large components
- Improve naming

<action>Improve code clarity:</action>
- Extract magic numbers to constants
- Add meaningful variable names
- Break down complex functions
- Add helpful comments

<action>Example refactors:</action>

```typescript
// Before
const x = data.filter(d => d.status === 'active' && d.count > 5)

// After
const MIN_COUNT_THRESHOLD = 5
const activeItems = data.filter(
  item => item.status === 'active' && item.count > MIN_COUNT_THRESHOLD
)
```

<action>Track structural improvements made</action>

</step>

<step n="6" goal="Refactor patterns and best practices" if="refactor_type includes patterns or full">

<action>For each file:</action>

<action>Apply Next.js 16 patterns:</action>
- Ensure async/await params for dynamic routes
- Use Server Components by default
- Proper metadata exports
- Correct Next.js imports

<action>Apply React best practices:</action>
- Proper hook usage
- Correct event handler patterns
- Component composition
- Props destructuring

<action>Apply Tailwind v4.1 patterns:</action>
- Fix shadow scale (shadow-xs, shadow-sm, etc.)
- Fix ring widths (ring-1, ring-2, etc.)
- Use utility classes correctly

<action>Example refactors:</action>

```typescript
// Before (Next.js 16 violation)
export function Page({ params }: PageProps) {
  const { id } = params // ❌ params must be awaited
}

// After (Next.js 16 compliant)
export async function Page({ params }: PageProps) {
  const { id } = await params // ✅ Correct
}
```

<action>Track pattern improvements made</action>

</step>

<step n="7" goal="Refactor accessibility" if="refactor_type includes accessibility or full">

<action>For each component:</action>

<action>Enhance accessibility:</action>
- Add aria-labels where needed
- Ensure keyboard navigation
- Add proper semantic HTML
- Include alt text for images
- Ensure color contrast

<action>Apply Catalyst UI a11y patterns:</action>
- Use Headless UI components (built-in a11y)
- Proper focus management
- Screen reader support

<action>Example refactors:</action>

```typescript
// Before
<button onClick={handleClick}>X</button>

// After
<button onClick={handleClick} aria-label="Close dialog">
  X
</button>
```

<action>Track accessibility improvements made</action>

</step>

<step n="8" goal="Validate refactored code">

<action>Run validation checks:</action>

<action>TypeScript compilation:</action>
<action>Execute: npx tsc --noEmit</action>
<action>Verify: No type errors</action>

<action>Build check:</action>
<action>Execute: npm run build</action>
<action>Verify: Build succeeds</action>

<action>Runtime check:</action>
<action>Note: Suggest testing in browser</action>
<action>Verify: No runtime errors</action>

<check if="validation_fails">
  <action>Fix validation errors</action>
  <action>Re-validate</action>
</check>

</step>

<step n="9" goal="Document refactors in refactor log">

<action>Load refactor log: {project-root}/docs/rapid-prototype/refactor-log.md</action>

<action>Append refactor entry:</action>

```markdown
## {{date}} - {{refactor_type}} Refactor by Sentinel

- **Type:** {{refactor_type}}
- **Scope:** {{refactor_scope}}
- **Files Modified:** {{file_count}}

### Improvements Made

{{if type_safety_refactors}}
**Type Safety:**
{{for each type_safety_refactor}}
- **{{file}}** - {{improvement_description}}
  - Rationale: {{why_this_matters}}
  - Impact: {{benefit}}
{{endfor}}
{{endif}}

{{if performance_refactors}}
**Performance:**
{{for each performance_refactor}}
- **{{file}}** - {{improvement_description}}
  - Rationale: {{why_this_matters}}
  - Impact: {{performance_gain}}
{{endfor}}
{{endif}}

{{if structure_refactors}}
**Structure & Organization:**
{{for each structure_refactor}}
- **{{file}}** - {{improvement_description}}
  - Rationale: {{why_this_matters}}
  - Impact: {{maintainability_gain}}
{{endfor}}
{{endif}}

{{if pattern_refactors}}
**Patterns & Best Practices:**
{{for each pattern_refactor}}
- **{{file}}** - {{improvement_description}}
  - Rationale: {{why_this_matters}}
  - Impact: {{benefit}}
{{endfor}}
{{endif}}

{{if accessibility_refactors}}
**Accessibility:**
{{for each a11y_refactor}}
- **{{file}}** - {{improvement_description}}
  - Rationale: {{why_this_matters}}
  - Impact: {{a11y_improvement}}
{{endfor}}
{{endif}}

### Validation
- ✅ TypeScript compilation: PASS
- ✅ Build: SUCCESS
- ✅ No runtime errors

### Overall Impact
{{overall_summary}}

**Files Modified:** {{files_modified_list}}

---
```

<action>Save updated refactor log</action>

</step>

<step n="10" goal="Update context summary">

<action>Load: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Update "Recent Activity" section</action>
<action>Add: "- {{date}}: Refactored {{file_count}} files for {{refactor_type}}"</action>

<action>Save updated context summary</action>

</step>

<step n="11" goal="Provide refactor summary and next steps">

<action>Display comprehensive summary:</action>

```
✅ Refactor Complete: {{refactor_type}}

📁 Files Modified: {{file_count}}
🔧 Improvements: {{total_improvements}}

{{if type_safety_refactors}}
🛡️  Type Safety: {{type_safety_count}} improvements
{{endif}}
{{if performance_refactors}}
⚡ Performance: {{performance_count}} optimizations
{{endif}}
{{if structure_refactors}}
📐 Structure: {{structure_count}} improvements
{{endif}}
{{if pattern_refactors}}
✨ Patterns: {{pattern_count}} best practices applied
{{endif}}
{{if accessibility_refactors}}
♿ Accessibility: {{a11y_count}} enhancements
{{endif}}

✅ Validation: All checks passed
📋 Documentation: refactor-log.md updated

💪 Code quality significantly improved!
```

<action>Suggest next steps:</action>

**Next Steps:**

1. **Test the refactored code:**
   ```
   npm run dev
   ```
   Verify everything still works correctly

2. **Review improvements:**
   - Check refactor-log.md for details
   - Understand rationale for each change
   - Note performance gains

3. **Consider additional refactoring:**
   {{if refactor_type != 'full'}}
   - Run *refactor again with different focus
   - Address other quality aspects
   {{endif}}

4. **Continue development:**
   - Code quality is improved
   - Foundation is stronger
   - Ready for new features

**Refactor complete!** 💪

</step>

</workflow>
