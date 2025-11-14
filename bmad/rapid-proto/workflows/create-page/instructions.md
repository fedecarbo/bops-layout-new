# Create Page Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/create-page/workflow.yaml</critical>
<critical>ALWAYS read context files to understand project state before creating pages</critical>

<workflow>

<step n="1" goal="Load project context and scan existing pages">

<action>Load context files to understand what exists</action>
<action>Read: {project-root}/docs/rapid-prototype/project-brief.md</action>
<action>Read: {project-root}/docs/rapid-prototype/build-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Scan existing app directory structure</action>
<action>List directories in: {project-root}/app/</action>
<action>Note existing routes and pages</action>

</step>

<step n="2" goal="Gather page requirements">

<ask response="page_name">What's the page route? (e.g., "dashboard", "about", "users/[id]")</ask>
<action>Parse route for dynamic segments (look for [...] patterns)</action>

<ask response="page_purpose">What does this page do? (one sentence)</ask>

<ask response="is_dynamic">Is this a dynamic route with params? (y/n)</ask>

<check if="is_dynamic == 'y'">
  <ask response="param_name">What's the dynamic parameter? (e.g., "id", "slug")</ask>
  <action>Set route pattern: {{page_name}}/[{{param_name}}]</action>
</check>

<ask response="needs_layout" optional="true">Create a custom layout for this route? (y/n, default: n)</ask>

<ask response="needs_metadata" optional="true">Add custom metadata (title, description)? (y/n, default: y)</ask>

<ask response="needs_components" optional="true">Will this page need new components? (y/n, default: n)</ask>

</step>

<step n="3" goal="Select application shell from UI Blocks library">

<action>Load UI Blocks catalog to find matching page layouts</action>
<action>Read: {project-root}/bmad/tech-kb/tailwind-ui-blocks/catalog.md</action>

<action>Search for application shells based on page requirements</action>
<check if="page_purpose indicates 'dashboard' or 'admin panel'">
  <action>Recommend: Application Shells → Sidebar Layouts (dashboard-focused)</action>
</check>
<check if="page_purpose indicates 'marketing' or 'landing' or 'public'">
  <action>Recommend: Application Shells → Stacked Layouts (marketing-focused)</action>
</check>

<ask response="use_ui_block">Would you like to use a pre-built application shell from the UI Blocks library? (y/n, default: y)</ask>

<check if="use_ui_block == 'y'">
  <action>Execute select-ui-block workflow</action>
  <action>Call workflow: {project-root}/bmad/rapid-proto/workflows/select-ui-block/workflow.yaml</action>
  <action>Input: "application shell for {{page_purpose}}"</action>
  <action>User selects preferred layout variant</action>
  <action>Retrieve selected component code</action>
  <action>Note: Use selected component as foundation for page structure</action>
</check>

<check if="use_ui_block != 'y'">
  <action>Proceed with basic page template instead</action>
</check>

</step>

<step n="4" goal="Create page directory and files">

<action>Determine page path based on route</action>
<check if="is_dynamic == 'y'">
  <action>Create: {project-root}/app/{{page_name}}/[{{param_name}}]/page.tsx</action>
</check>
<check if="is_dynamic != 'y'">
  <action>Create: {project-root}/app/{{page_name}}/page.tsx</action>
</check>

<action>Generate page component with Next.js 16 patterns</action>

<critical>Next.js 16 Page Component Rules:
- Async components by default (Server Components)
- Await params and searchParams (Next.js 16 requirement)
- Export metadata if custom metadata needed
- Use TypeScript with proper param types
- Import components from @/components/
</critical>

<action>Template structure:</action>

```typescript
{{if needs_metadata == 'y'}}
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{{page_title}}',
  description: '{{page_description}}',
}
{{endif}}

{{if is_dynamic == 'y'}}
interface PageProps {
  params: Promise<{ {{param_name}}: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function {{PageName}}({ params, searchParams }: PageProps) {
  // Await params (Next.js 16 requirement)
  const { {{param_name}} } = await params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{{page_name}}</h1>
      {/* Page content */}
    </div>
  )
}
{{else}}
export default function {{PageName}}() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{{page_name}}</h1>
      {/* Page content */}
    </div>
  )
}
{{endif}}
```

<action>Write actual implementation based on page requirements</action>

</step>

<step n="5" goal="Create layout if requested">

<check if="needs_layout == 'y'">
  <action>Create: {project-root}/app/{{page_name}}/layout.tsx</action>

  <action>Template:</action>

```typescript
import type { ReactNode } from 'react'

export default function {{PageName}}Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="{{layout_wrapper_classes}}">
      {/* Layout header, sidebar, etc. */}
      <main>{children}</main>
    </div>
  )
}
```

  <action>Write layout implementation</action>
</check>

</step>

<step n="6" goal="Suggest component creation if needed">

<check if="needs_components == 'y'">
  <action>List components to create for this page</action>
  <action>Suggest using *component workflow for each</action>
  <action>Note: Components can be created after page is scaffolded</action>
</check>

</step>

<step n="7" goal="Document page creation in build log">

<action>Load current build log: {project-root}/docs/rapid-prototype/build-log.md</action>

<action>Append entry:</action>

```markdown
## {{date}} - {{page_name}} Page

- **Created by:** Forge (Builder)
- **Route:** /{{page_name}}
{{if is_dynamic}}
- **Type:** Dynamic route with [{{param_name}}] parameter
{{else}}
- **Type:** Static page
{{endif}}
- **Purpose:** {{page_purpose}}
{{if needs_layout}}
- **Custom Layout:** Yes
{{endif}}
{{if needs_metadata}}
- **Metadata:** Custom title and description
{{endif}}

**Files Created:**
- app/{{page_path}}/page.tsx
{{if needs_layout}}
- app/{{page_path}}/layout.tsx
{{endif}}

**Access:** http://localhost:3000/{{page_name}}

---
```

<action>Save updated build log</action>

</step>

<step n="7" goal="Update context summary">

<action>Load: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Update "What's Been Built" section</action>
<action>Add: "- /{{page_name}} page{{if is_dynamic}} (dynamic route){{endif}}"</action>

<action>Update "Recent Activity" section</action>
<action>Add: "- {{date}}: Created /{{page_name}} page"</action>

<action>Save updated context summary</action>

</step>

<step n="8" goal="Validate page">

<action>Load validation checklist: {installed_path}/checklist.md</action>
<action>Run through checklist items</action>

<check if="validation_issues_found">
  <action>Fix issues immediately</action>
  <action>Re-validate</action>
</check>

<action>Confirm page is ready:</action>
- ✅ Page file created in correct app directory
- ✅ Next.js 16 async/await params pattern (if dynamic)
- ✅ TypeScript types correct
- ✅ Metadata exported (if custom)
- ✅ Documented in build log
- ✅ Context summary updated

</step>

<step n="9" goal="Provide completion summary and next steps">

<action>Display summary:</action>

```
✅ Page Created: /{{page_name}}

📁 Location: app/{{page_path}}/page.tsx
🎯 Purpose: {{page_purpose}}
{{if is_dynamic}}
🔀 Type: Dynamic route with [{{param_name}}]
{{else}}
📄 Type: Static page
{{endif}}
{{if needs_layout}}
🎨 Layout: Custom layout created
{{endif}}

📋 Documentation Updated:
- build-log.md
- context-summary.md
```

<action>Suggest next steps:</action>

**Next Steps:**

1. **View the page:**
   ```
   npm run dev
   ```
   Visit: http://localhost:3000/{{page_name}}

2. **Add components:**
   {{if needs_components}}
   Use `*component` to create needed components
   {{endif}}
   Import and use in page.tsx

3. **Add data:**
   - Create mock data with `*mock-data`
   - Fetch data in Server Component
   - Display using components

4. **Refine:**
   - Add styling with Tailwind
   - Review with Sentinel (*review)

**Page ready!** 🚀

</step>

</workflow>
