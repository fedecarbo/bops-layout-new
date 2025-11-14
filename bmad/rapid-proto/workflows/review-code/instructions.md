# Review Code Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/review-code/workflow.yaml</critical>
<critical>ALWAYS read build log to understand what needs review</critical>

<workflow>

<step n="1" goal="Load project context and identify review scope">

<action>Load context files to understand what's been built</action>
<action>Read: {project-root}/docs/rapid-prototype/project-brief.md</action>
<action>Read: {project-root}/docs/rapid-prototype/build-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/refactor-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Parse build log to identify recent changes and additions</action>

</step>

<step n="2" goal="Determine review scope">

<ask response="review_scope">What should I review?
a) Recent changes (last 3 entries in build log)
b) Full project review
c) Specific files/components
</ask>

<check if="review_scope == 'a' or review_scope == 'recent'">
  <action>Extract last 3 entries from build log</action>
  <action>Identify files changed in those entries</action>
  <action>Set: files_to_review = recent change files</action>
</check>

<check if="review_scope == 'b' or review_scope == 'full'">
  <action>Scan entire codebase:</action>
  <action>List all files in: {project-root}/app/</action>
  <action>List all files in: {project-root}/components/</action>
  <action>List all files in: {project-root}/lib/</action>
  <action>Set: files_to_review = all project files</action>
</check>

<check if="review_scope == 'c' or review_scope == 'specific'">
  <ask response="specific_files">Which files? (comma-separated paths)</ask>
  <action>Parse files list</action>
  <action>Set: files_to_review = specified files</action>
</check>

<action>Display files to be reviewed for confirmation</action>

</step>

<step n="3" goal="Review TypeScript and type safety">

<action>For each file in files_to_review:</action>

<action>Check TypeScript compliance:</action>
- Are all variables and parameters typed?
- Are there any `any` types (anti-pattern)?
- Are interfaces properly defined?
- Are types imported correctly?
- Is strict mode being followed?

<action>Run TypeScript compiler check:</action>
<action>Execute: npx tsc --noEmit</action>
<action>Capture any type errors</action>

<action>Log type safety issues found</action>

</step>

<step n="4" goal="Review React and Next.js 16 patterns">

<action>For each component/page:</action>

<action>Check Next.js 16 compliance:</action>
- Server Components used by default?
- Async/await params pattern for dynamic routes?
- 'use client' only when necessary?
- No client-only features in Server Components?
- Metadata properly exported?

<action>Check React best practices:</action>
- Proper hook usage (if client component)?
- No unnecessary re-renders?
- Event handlers named correctly?
- Props destructured appropriately?
- Components focused and single-purpose?

<action>Log React/Next.js issues found</action>

</step>

<step n="5" goal="Review Tailwind v4.1 and styling">

<action>For each component with styling:</action>

<action>Check Tailwind v4.1 compliance:</action>
- Using correct shadow scale (shadow-xs, shadow-sm, etc.)?
- Using explicit ring widths (ring-1, ring-2) not bare "ring"?
- No deprecated v3 patterns?
- Responsive classes used appropriately?
- No conflicting Tailwind classes?

<action>Check Catalyst UI patterns (if UI components):</action>
- Using Headless UI imports correctly?
- Following Catalyst accessibility patterns?
- Motion animations appropriate?

<action>Log styling issues found</action>

</step>

<step n="6" goal="Review code organization and structure">

<action>For each file:</action>

<action>Check organization:</action>
- Imports organized (React, third-party, local)?
- No unused imports?
- File in correct directory?
- Naming conventions followed?
- Code properly formatted?

<action>Check logic clarity:</action>
- Functions focused and clear?
- Complex logic extracted to utilities?
- Magic numbers/strings avoided?
- Comments where needed (not obvious code)?

<action>Log organization issues found</action>

</step>

<step n="7" goal="Review performance and optimization">

<action>Check for performance issues:</action>
- Large components that should be split?
- Missing React.memo where beneficial?
- Heavy computations in render?
- Inefficient data transformations?
- Large bundle size concerns?

<action>Check for optimization opportunities:</action>
- Can Server Components be used instead of Client?
- Are images optimized (next/image)?
- Is data fetching efficient?
- Are there unnecessary dependencies?

<action>Log performance issues and opportunities</action>

</step>

<step n="8" goal="Review security and best practices">

<action>Check security basics:</action>
- No hardcoded secrets or API keys?
- User input sanitized?
- No XSS vulnerabilities?
- Dependencies up to date?

<action>Check best practices:</action>
- Error handling present?
- Loading states for async operations?
- Accessibility attributes (aria-*)?
- Semantic HTML used?

<action>Log security and best practice issues</action>

</step>

<step n="9" goal="Compile review findings">

<action>Organize all findings by severity:</action>

**CRITICAL Issues:**
- Type safety violations
- Security vulnerabilities
- Breaking errors

**IMPORTANT Issues:**
- Next.js 16 pattern violations
- Performance problems
- Accessibility gaps

**NICE-TO-HAVE Improvements:**
- Code organization
- Styling refinements
- Optimization opportunities

<action>Count issues: {{critical_count}} critical, {{important_count}} important, {{nice_to_have_count}} nice-to-have</action>

</step>

<step n="10" goal="Document review in refactor log">

<action>Load refactor log: {project-root}/docs/rapid-prototype/refactor-log.md</action>

<action>Append review entry:</action>

```markdown
## {{date}} - Code Review by Sentinel

- **Review Scope:** {{review_scope}}
- **Files Reviewed:** {{file_count}}
- **Findings:** {{total_issues}} issues

### Critical Issues ({{critical_count}})
{{for each critical}}
- **{{file}}:{{line}}** - {{issue_description}}
  - **Fix:** {{suggested_fix}}
{{endfor}}

### Important Issues ({{important_count}})
{{for each important}}
- **{{file}}:{{line}}** - {{issue_description}}
  - **Fix:** {{suggested_fix}}
{{endfor}}

### Nice-to-Have Improvements ({{nice_to_have_count}})
{{for each nice_to_have}}
- **{{file}}:{{line}}** - {{suggestion}}
{{endfor}}

### Summary
{{if critical_count == 0 and important_count == 0}}
✅ Code quality is excellent! Only minor improvements suggested.
{{else}}
⚠️  Found {{critical_count + important_count}} issues requiring attention.
{{endif}}

**Recommendations:**
1. {{recommendation_1}}
2. {{recommendation_2}}
3. {{recommendation_3}}

---
```

<action>Save updated refactor log</action>

</step>

<step n="11" goal="Provide review summary and next steps">

<action>Display comprehensive review summary:</action>

```
📋 Code Review Complete

🔍 Scope: {{review_scope}}
📁 Files Reviewed: {{file_count}}

🚨 Critical Issues: {{critical_count}}
⚠️  Important Issues: {{important_count}}
💡 Nice-to-Have: {{nice_to_have_count}}

{{if critical_count > 0}}
⚠️  CRITICAL ISSUES REQUIRE IMMEDIATE ATTENTION
{{endif}}

{{if critical_count == 0 and important_count == 0}}
✅ Code quality is excellent!
{{else}}
📝 Review details logged to refactor-log.md
{{endif}}
```

<action>Suggest next steps:</action>

**Next Steps:**

{{if critical_count > 0 or important_count > 0}}
1. **Fix issues with Sentinel:**
   ```
   Use *refactor to address findings
   ```

2. **Prioritize:**
   - Critical issues first (blocking problems)
   - Important issues next (quality improvements)
   - Nice-to-have when time permits

3. **Re-review after fixes:**
   - Run *review again to validate fixes
{{else}}
1. **Consider nice-to-have improvements**
   - Use *refactor for optimizations
   - Enhance code organization
   - Improve documentation

2. **Add tests (if needed):**
   - Use *test command
   - Ensure critical paths covered

3. **Continue development:**
   - Code quality is solid
   - Ready for new features
{{endif}}

**Review complete!** 📋

</step>

</workflow>
