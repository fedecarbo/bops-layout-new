# Rapid Prototype Workflow Instructions

<critical>The workflow execution engine is governed by: {project_root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project_root}/bmad/rapid-proto/workflows/rapid-prototype/workflow.yaml</critical>

<workflow>

<step n="1" goal="Detect environment and determine execution mode">

<action>Check if Node.js is available</action>
<action>Run: node --version</action>

<check if="nodejs_found">
  <action>Store Node.js version</action>
  <action>Check if Docker is also available: docker --version</action>
  <check if="docker_found">
    <action>Both Node.js and Docker available</action>
    <ask response="use_docker">Node.js detected. Use Docker instead? (y/n, default: n)</ask>
    <check if="use_docker == 'y'">
      <action>Set: environment = "docker"</action>
      <action>Verify Docker daemon is running: docker ps</action>
      <check if="docker_not_running">
        <action>ERROR - Docker not running. Start Docker Desktop/daemon first.</action>
        <ask>Start Docker and retry? (y/n)</ask>
      </check>
    </check>
    <check if="use_docker != 'y'">
      <action>Set: environment = "native"</action>
    </check>
  </check>
  <check if="docker_not_found">
    <action>Set: environment = "native"</action>
    <action>Note: Using native Node.js installation</action>
  </check>
</check>

<check if="nodejs_not_found">
  <action>Node.js not available</action>
  <action>Check if Docker is available: docker --version</action>
  <check if="docker_found">
    <ask>Node.js not detected. Setup Docker environment? (y/n)</ask>
    <check if="user_agrees">
      <invoke-workflow path="{project-root}/bmad/rapid-proto/workflows/setup-docker/workflow.yaml"/>
      <action>Set: environment = "docker"</action>
    </check>
    <check if="user_declines">
      <action>ERROR - Cannot proceed without Node.js or Docker</action>
      <action>Install Node.js from https://nodejs.org or run *setup-docker</action>
      <action>STOP workflow</action>
    </check>
  </check>
  <check if="docker_not_found">
    <action>ERROR - Neither Node.js nor Docker available</action>
    <action>Install Node.js from https://nodejs.org OR Docker from https://docker.com</action>
    <action>STOP workflow</action>
  </check>
</check>

<action>Environment determined: {{environment}}</action>

<check if="mode == 'quick'">
  <action>Use default project name: "prototype-{{date}}"</action>
  <action>Use current directory as target location</action>
  <action>Skip all optional questions</action>
  <action>Proceed directly to scaffolding with defaults</action>
</check>

<check if="mode != 'quick'">
  <ask response="project_name">What's the name of your prototype? (e.g., "my-dashboard", "booking-app")</ask>
  <ask response="project_description">Brief description (one sentence) of what this prototype does:</ask>
  <ask response="target_location">Where should I scaffold this? (default: current directory)</ask>
</check>

<action>Store project metadata for documentation</action>
<action>Validate target location exists or can be created</action>

</step>

<step n="2" goal="Scaffold Next.js project structure">

<action>Create Next.js 16 project with TypeScript and App Router</action>

<check if="environment == 'docker'">
  <action>Note: Commands will run inside Docker container</action>
  <action>Run: docker compose exec app npx create-next-app@latest {{project_name}} --typescript --tailwind --app --no-src-dir --import-alias "@/*" --turbopack</action>
</check>

<check if="environment == 'native'">
  <action>Run: npx create-next-app@latest {{project_name}} --typescript --tailwind --app --no-src-dir --import-alias "@/*" --turbopack</action>
</check>

<critical>Project structure to create:</critical>

```
{{project_name}}/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with Tailwind
├── components/
│   ├── catalyst/            # Catalyst UI components
│   └── shared/              # Shared custom components
├── lib/
│   ├── utils.ts             # Utility functions
│   └── mock-data/           # Mock data infrastructure
│       ├── index.ts         # Central export
│       └── schemas/         # Type definitions
├── public/                  # Static assets
├── docs/
│   └── rapid-prototype/     # Living documentation
│       ├── project-brief.md
│       ├── build-log.md
│       ├── changes-log.md
│       ├── refactor-log.md
│       └── context-summary.md
├── package.json
├── tsconfig.json
├── postcss.config.mjs       # PostCSS config for Tailwind v4.1
├── next.config.js
└── .gitignore
```

<action>Note: Next.js 16 uses Turbopack as default bundler for 2-5× faster builds</action>

</step>

<step n="3" goal="Install and configure Catalyst UI">

<action>Install Catalyst UI dependencies</action>
<action>Run: npm install @headlessui/react motion clsx</action>
<action>Note: Catalyst UI components are file-based - no CLI installation needed</action>

<action>Copy Catalyst UI component files to the project</action>
<action>Source: Copy TypeScript components from {module_root}/data/catalyst-ui-kit/typescript/ to components/catalyst/</action>

<action>Install essential Catalyst components by copying these files:</action>
- button.tsx
- input.tsx
- fieldset.tsx
- dialog.tsx
- dropdown.tsx
- badge.tsx
- avatar.tsx
- divider.tsx
- heading.tsx
- text.tsx

<action>Note: Catalyst uses Headless UI for accessibility and Motion for animations</action>
<action>Note: Components work directly with Tailwind v4.1's CSS variable system</action>

</step>

<step n="4" goal="Configure Tailwind CSS v4.1">

<action>Install Tailwind CSS v4.1 and PostCSS dependencies</action>
<action>Run: npm install tailwindcss@latest @tailwindcss/postcss@latest postcss@latest</action>

<action>Create PostCSS configuration file: postcss.config.mjs</action>

```javascript
/** @type {import('postcss').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
```

<action>Update app/globals.css to import Tailwind</action>
<action>Add to the TOP of app/globals.css:</action>

```css
@import "tailwindcss";
```

<action>Note: Tailwind v4.1 uses PostCSS plugin approach instead of traditional config file</action>
<action>Note: The tailwind.config.ts file is now OPTIONAL - only needed for theme extensions</action>
<action>Note: Catalyst UI components are built for Tailwind v4.1 and work seamlessly with CSS variables</action>

</step>

<step n="5" goal="Setup TypeScript strict mode for Next.js 16">

<action>Verify TypeScript version meets Next.js 16 minimum requirement (5.1.0+)</action>
<action>Update tsconfig.json for strict type checking compatible with Next.js 16:</action>

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

<action>Note: Next.js 16 requires TypeScript 5.1.0 or higher</action>
<action>Note: Async params/searchParams in Next.js 16 require await syntax in page components</action>

</step>

<step n="6" goal="Create mock data infrastructure">

<action>Create lib/mock-data/index.ts as central mock data hub:</action>

```typescript
// Mock Data Infrastructure
// All mock data exports are centralized here

export * from './schemas';
export * from './users';
export * from './products';
// Add more as needed
```

<action>Create lib/mock-data/schemas/index.ts for type definitions:</action>

```typescript
// Type-safe schemas for mock data

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

// Add more schemas as needed
```

<action>Create example mock data file lib/mock-data/users.ts:</action>

```typescript
import { User } from './schemas';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'user',
  },
];
```

</step>

<step n="7" goal="Create living documentation system">

<action>Create docs/rapid-prototype/ directory</action>

<action>Create docs/rapid-prototype/project-brief.md:</action>

```markdown
# {{project_name}} - Project Brief

**Created:** {{date}}
**Scaffolded by:** Atlas (Prototype Architect)

## Project Overview

{{project_description}}

## Tech Stack

- Framework: Next.js 16 (App Router, Server Components, Turbopack)
- Language: TypeScript 5.1+ (strict mode)
- Styling: Tailwind CSS v4.1 (PostCSS)
- UI Components: Catalyst UI (Tailwind's official UI kit with Headless UI + Motion)
- Mock Data: Type-safe infrastructure in lib/mock-data/
- Bundler: Turbopack (2-5× faster builds)

## Project Structure

[Document the key folders and their purposes]

## Initial Setup Decisions

- Next.js 16 with Turbopack for faster builds and development
- App Router for routing
- Server Components by default
- Async params/searchParams pattern (Next.js 16 standard)
- Strict TypeScript 5.1+ configuration
- Tailwind v4.1 with PostCSS plugin architecture
- Catalyst UI for component library (Headless UI + Motion)
- Centralized mock data system

## Next Steps

1. Use Forge (Builder) to add features and components
2. Use Sentinel (QA Refactor) to review and optimize
3. Reference this brief for project context
```

<action>Create docs/rapid-prototype/build-log.md:</action>

```markdown
# Build Log

Track all features, components, and pages built by Forge (Builder).

## Format
**Date** | **Feature/Component** | **Description** | **Files Changed**

---

## Initial Scaffold - {{date}}

- **Scaffolded by:** Atlas (Prototype Architect)
- **Project:** {{project_name}}
- **Structure:** Next.js 16 + TypeScript 5.1+ + Tailwind v4.1 + Catalyst UI
- **Bundler:** Turbopack (default, 2-5× faster builds)
- **Status:** Ready for development

---
```

<action>Create docs/rapid-prototype/changes-log.md:</action>

```markdown
# Changes & Fixes Log

Track all bug fixes and modifications.

## Format
**Date** | **Issue** | **Resolution** | **Files Changed**

---

_No changes yet - initial scaffold complete._

---
```

<action>Create docs/rapid-prototype/refactor-log.md:</action>

```markdown
# Refactor Log

Track all code improvements and refactors by Sentinel (QA Refactor).

## Format
**Date** | **Refactor** | **Rationale** | **Impact**

---

_No refactors yet - awaiting initial implementation._

---
```

<action>Create docs/rapid-prototype/context-summary.md:</action>

```markdown
# Context Summary

**Last Updated:** {{date}}
**Current State:** Initial scaffold complete

## Quick Overview

- **Project:** {{project_name}}
- **Description:** {{project_description}}
- **Tech Stack:** Next.js 16, TypeScript 5.1+, Tailwind v4.1, Catalyst UI
- **Bundler:** Turbopack (2-5× faster builds)

## What's Been Built

- Initial Next.js 16 scaffold with App Router and Turbopack
- Tailwind CSS v4.1 with PostCSS plugin architecture
- Catalyst UI components installed (Headless UI + Motion dependencies)
- Mock data infrastructure created
- Living documentation system initialized

## What's Next

Ready for feature development. Use Forge (Builder) to start adding components and pages.

## Recent Activity

- {{date}}: Project scaffolded by Atlas with Next.js 16 + Tailwind v4.1

---

**For Agents:**
- Read project-brief.md for project context
- Read build-log.md for implementation history
- Read refactor-log.md for code quality improvements
- Update this summary after significant changes
```

</step>

<step n="8" goal="Initialize git repository">

<action>Initialize git in project directory</action>
<action>Run: git init</action>
<action>Create initial commit with scaffold</action>
<action>Run: git add . && git commit -m "Initial scaffold by Atlas (Rapid Prototype)"</action>

</step>

<step n="9" goal="Install dependencies and verify setup">

<action>Install all npm packages</action>
<action>Run: npm install</action>

<action>Verify build works</action>
<action>Run: npm run build</action>

<check if="build fails">
  <action>Fix any build errors</action>
  <action>Document fixes in changes-log.md</action>
  <action>Retry build</action>
</check>

</step>

<step n="10" goal="Generate handoff summary">

<action>Display completion summary:</action>

```
✅ Prototype Scaffolded: {{project_name}}
📁 Location: {{target_location}}
🏗️ Structure: Next.js 16 + TypeScript 5.1+ + Tailwind v4.1 + Catalyst UI
⚡ Bundler: Turbopack (2-5× faster builds)
📋 Documentation: docs/rapid-prototype/
🔄 Git: Initialized with initial commit
```

<action>Show next steps:</action>

**Next Steps:**

1. **Start development server:**
   ```
   npm run dev
   ```
   Note: Next.js 16 uses Turbopack by default for faster development

2. **Build features with Forge:**
   - Use `*component` to create UI components
   - Use `*page` to add new pages
   - Use `*feature` for complete features

3. **Review quality with Sentinel:**
   - Use `*review` for code review
   - Use `*refactor` for improvements
   - Use `*test` to add tests

**Context Files Created:**
- `docs/rapid-prototype/project-brief.md` - Project overview
- `docs/rapid-prototype/build-log.md` - Implementation tracking
- `docs/rapid-prototype/context-summary.md` - Current state

**Tech Stack Highlights:**
- Next.js 16 with Turbopack (2-5× faster builds)
- Tailwind CSS v4.1 with PostCSS architecture
- TypeScript 5.1+ with strict mode
- Catalyst UI components ready to use

**Ready to build!** 🚀

</step>

</workflow>
