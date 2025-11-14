# prototype-bops - Project Brief

**Created:** 2025-11-14
**Scaffolded by:** Atlas (Prototype Architect)

## Project Overview

UK back office planning system for processing planning applications

## Tech Stack

- Framework: Next.js 16 (App Router, Server Components, Turbopack)
- Language: TypeScript 5.1+ (strict mode)
- Styling: Tailwind CSS v4.1 (PostCSS)
- UI Components: Catalyst UI (Tailwind's official UI kit with Headless UI + Motion)
- Mock Data: Type-safe infrastructure in lib/mock-data/
- Bundler: Turbopack (2-5× faster builds)
- Deployment: Docker containerized

## Project Structure

```
prototype-bops/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with Tailwind v4.1
├── components/
│   ├── catalyst/            # Catalyst UI components (10 core components)
│   └── shared/              # Shared custom components
├── lib/
│   ├── utils.ts             # Utility functions (cn, formatDate, formatCurrency)
│   └── mock-data/           # Mock data infrastructure
│       ├── index.ts         # Central export
│       ├── schemas/         # Type definitions
│       ├── users.ts         # Mock users
│       └── planning-applications.ts  # Mock planning applications
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
├── next.config.ts
├── Dockerfile               # Docker development container
├── docker-compose.yml       # Docker Compose configuration
└── .gitignore
```

## Initial Setup Decisions

- Next.js 16 with Turbopack for faster builds and development
- App Router for routing
- Server Components by default
- Async params/searchParams pattern (Next.js 16 standard)
- Strict TypeScript 5.1+ configuration
- Tailwind v4.1 with PostCSS plugin architecture
- Catalyst UI for component library (Headless UI + Motion)
- Centralized mock data system with planning-specific schemas
- Docker containerization for consistent development environment

## Domain-Specific Features

### Planning Application System
- Mock planning applications with UK-style references (PA/2024/XXX)
- Application statuses: pending, in-review, approved, rejected
- UK address formatting
- Planning officer assignment tracking

## Next Steps

1. Use Forge (Builder) to add features and components
2. Use Sentinel (QA Refactor) to review and optimize
3. Reference this brief for project context

## Key Workflows Available

- `*component` - Create UI components
- `*page` - Add new pages
- `*feature` - Build complete features
- `*review` - Code review
- `*refactor` - Code improvements
