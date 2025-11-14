# Build Feature Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/build-feature/workflow.yaml</critical>
<critical>ALWAYS read context files to understand project state before building features</critical>

<workflow>

<step n="1" goal="Load project context and understand current state">

<action>Load context files to understand what exists</action>
<action>Read: {project-root}/docs/rapid-prototype/project-brief.md</action>
<action>Read: {project-root}/docs/rapid-prototype/build-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Note: Understanding existing structure prevents duplicates and ensures consistency</action>

</step>

<step n="2" goal="Define feature scope and requirements">

<ask response="feature_name">What's the feature name? (e.g., "User Dashboard", "Booking System", "Product Catalog")</ask>

<ask response="feature_description">Describe the feature in 2-3 sentences:</ask>

<ask response="feature_components">What components does this feature need? (comma-separated, e.g., "StatsCard, UserTable, FilterBar")</ask>
<action>Parse components list into array</action>

<ask response="feature_pages">What pages does this feature need? (comma-separated routes, e.g., "dashboard, dashboard/analytics")</ask>
<action>Parse pages list into array</action>

<ask response="needs_mock_data">Does this feature need mock data? (y/n, default: y)</ask>

<check if="needs_mock_data == 'y'">
  <ask response="data_entities">What data entities? (e.g., "users, stats, activities")</ask>
  <action>Parse data entities into array</action>
</check>

</step>

<step n="3" goal="Search UI Blocks library for feature components">

<action>Load UI Blocks catalog to find production-ready components for this feature</action>
<action>Read: {project-root}/bmad/tech-kb/tailwind-ui-blocks/catalog.md</action>

<action>Analyze feature requirements and search for matching UI Blocks</action>
<action>Check "Use Case Recommendations" section for feature type</action>

<check if="feature_name contains 'dashboard' or 'admin'">
  <action>Recommend Use Case: "Dashboard Layout" or "Admin Panel"</action>
  <action>Search for: Application shells, stats, tables, charts</action>
</check>

<check if="feature_name contains 'user' or 'profile' or 'account'">
  <action>Recommend Use Case: "User Profile Page" or "Settings Page"</action>
  <action>Search for: Page headings, description lists, form layouts, avatars</action>
</check>

<check if="feature_name contains 'data' or 'table' or 'list'">
  <action>Recommend Use Case: "Data Table with Filters"</action>
  <action>Search for: Tables, section headings, input groups, pagination</action>
</check>

<ask response="use_ui_blocks">Found potential UI Blocks for this feature. Would you like to review and select components from the library before building custom ones? (y/n, default: y)</ask>

<check if="use_ui_blocks == 'y'">
  <action>For each component needed, offer to search UI Blocks first</action>
  <action>List components where UI Blocks might have good matches</action>
  <action>Note: Can mix UI Blocks (for structure) with custom components (for specific features)</action>
</check>

</step>

<step n="4" goal="Create feature directory structure">

<action>Create feature-specific directory for components</action>
<action>Create: {project-root}/components/{{feature_name}}/</action>

<action>Note: Feature components go in dedicated folder for organization</action>

</step>

<step n="5" goal="Create all feature components">

<action>For each component in {{feature_components}} list:</action>

<action>Invoke create-component workflow for each component</action>

<critical>For each component:
1. Use component name from list
2. Set component type as "feature"
3. Specify feature_name as folder
4. Auto-generate based on feature context
5. Skip asking user - use feature requirements
</critical>

<action>Log each component creation</action>
<action>Track created components for summary</action>

</step>

<step n="6" goal="Create all feature pages">

<action>For each page in {{feature_pages}} list:</action>

<action>Invoke create-page workflow for each page</action>

<critical>For each page:
1. Use page route from list
2. Reference feature components created in step 4
3. Import and integrate components
4. Add proper layout and structure
5. Skip asking user - use feature requirements
</critical>

<action>Log each page creation</action>
<action>Track created pages for summary</action>

</step>

<step n="7" goal="Create mock data for feature">

<check if="needs_mock_data == 'y'">
  <action>For each data entity in {{data_entities}} list:</action>

  <action>Create mock data file: {project-root}/lib/mock-data/{{entity}}.ts</action>

  <action>Generate type-safe data structures with realistic sample data</action>

  <action>Template:</action>

```typescript
// Mock data for {{feature_name}} - {{entity}}
// Generated by Forge (Builder)

export interface {{EntityName}} {
  id: string
  // Define fields based on feature requirements
}

export const mock{{EntityName}}Data: {{EntityName}}[] = [
  // Realistic sample data entries
]
```

  <action>Export from central index: {project-root}/lib/mock-data/index.ts</action>
  <action>Add line: export * from './{{entity}}';</action>

  <action>Track created mock data for summary</action>
</check>

</step>

<step n="8" goal="Integrate mock data with components">

<check if="needs_mock_data == 'y'">
  <action>Update feature pages to import and use mock data</action>

  <action>For each page, add data imports and integration:</action>

```typescript
import { mock{{EntityName}}Data } from '@/lib/mock-data'

// Use data in Server Component
const data = mock{{EntityName}}Data

// Pass to components
<{{ComponentName}} data={data} />
```

  <action>Verify type safety between data and component props</action>
</check>

</step>

<step n="9" goal="Document feature in build log">

<action>Load current build log: {project-root}/docs/rapid-prototype/build-log.md</action>

<action>Append comprehensive feature entry:</action>

```markdown
## {{date}} - {{feature_name}} Feature

- **Created by:** Forge (Builder)
- **Description:** {{feature_description}}

**Components Created:**
{{for each component}}
- {{component_name}} ({{component_path}})
{{endfor}}

**Pages Created:**
{{for each page}}
- /{{page_route}} ({{page_path}})
{{endfor}}

{{if needs_mock_data}}
**Mock Data Created:**
{{for each entity}}
- {{entity}} data (lib/mock-data/{{entity}}.ts)
{{endfor}}
{{endif}}

**Feature Structure:**
```
{{feature_name}}/
├── components/{{feature_name}}/
│   {{for each component}}
│   ├── {{component_file}}
│   {{endfor}}
├── app/{{feature_pages[0]}}/
│   ├── page.tsx
│   {{for remaining pages}}
│   └── {{page}}/page.tsx
│   {{endfor}}
{{if needs_mock_data}}
└── lib/mock-data/
    {{for each entity}}
    ├── {{entity}}.ts
    {{endfor}}
{{endif}}
```

**Access:**
{{for each page}}
- http://localhost:3000/{{page_route}}
{{endfor}}

**Status:** ✅ Feature complete and integrated

---
```

<action>Save updated build log</action>

</step>

<step n="10" goal="Update context summary">

<action>Load: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Update "What's Been Built" section</action>
<action>Add: "- {{feature_name}} feature ({{component_count}} components, {{page_count}} pages)"</action>

<action>Update "Recent Activity" section</action>
<action>Add: "- {{date}}: Built complete {{feature_name}} feature"</action>

<action>Save updated context summary</action>

</step>

<step n="11" goal="Validate feature">

<action>Load validation checklist: {installed_path}/checklist.md</action>
<action>Run through checklist items</action>

<check if="validation_issues_found">
  <action>Fix issues immediately</action>
  <action>Re-validate</action>
</check>

<action>Confirm feature is ready:</action>
- ✅ All components created and working
- ✅ All pages created and accessible
- ✅ Mock data integrated (if applicable)
- ✅ Type safety across data-component-page chain
- ✅ No TypeScript errors
- ✅ Documented in build log
- ✅ Context summary updated

</step>

<step n="12" goal="Provide completion summary and next steps">

<action>Display comprehensive summary:</action>

```
✅ Feature Complete: {{feature_name}}

📦 Components: {{component_count}}
{{for each component}}
  - {{component_name}}
{{endfor}}

📄 Pages: {{page_count}}
{{for each page}}
  - /{{page_route}}
{{endfor}}

{{if needs_mock_data}}
📊 Mock Data: {{entity_count}} entities
{{for each entity}}
  - {{entity}} data
{{endfor}}
{{endif}}

📋 Documentation Updated:
- build-log.md (comprehensive feature entry)
- context-summary.md

🎯 Feature is fully integrated and ready to use!
```

<action>Suggest next steps:</action>

**Next Steps:**

1. **Test the feature:**
   ```
   npm run dev
   ```
   Visit each page and interact with components

2. **Refine:**
   - Adjust styling with Tailwind
   - Fine-tune component behavior
   - Add more mock data if needed

3. **Quality check:**
   - Run Sentinel's `*review` for code review
   - Use `*refactor` for optimizations
   - Add tests with `*test`

4. **Iterate:**
   - Add more components as needed (*component)
   - Extend pages (*page)
   - Create related features

**Feature ready for user testing!** 🚀

</step>

</workflow>
