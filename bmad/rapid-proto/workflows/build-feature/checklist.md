# Build Feature Validation Checklist

## Feature Scope

- [ ] Feature name is clear and descriptive
- [ ] Feature description explains purpose
- [ ] All required components identified
- [ ] All required pages identified
- [ ] Data needs are clear

## Components

- [ ] All feature components created
- [ ] Components are in correct directory (components/{{feature_name}}/)
- [ ] Components follow TypeScript strict mode
- [ ] Components use Catalyst UI patterns (where applicable)
- [ ] Component props are properly typed
- [ ] No TypeScript errors in components

## Pages

- [ ] All feature pages created
- [ ] Pages are in correct app directory
- [ ] Pages follow Next.js 16 patterns (async/await params)
- [ ] Pages import and use feature components
- [ ] Page routing works correctly
- [ ] No TypeScript errors in pages

## Mock Data

- [ ] Mock data created for all entities (if applicable)
- [ ] Data structures are type-safe
- [ ] Data is realistic and useful
- [ ] Data exported from lib/mock-data/index.ts
- [ ] No data type mismatches

## Integration

- [ ] Mock data integrated into pages
- [ ] Data passed to components correctly
- [ ] Type safety maintained across data→page→component chain
- [ ] Components render data properly
- [ ] No runtime errors

## Code Quality

- [ ] All files properly formatted
- [ ] Imports are organized
- [ ] No unused imports or variables
- [ ] Tailwind classes are valid
- [ ] Code follows project conventions
- [ ] No console errors or warnings

## Documentation

- [ ] Comprehensive feature entry in build-log.md
- [ ] All components listed
- [ ] All pages listed
- [ ] Mock data documented (if applicable)
- [ ] Context summary updated
- [ ] Feature structure diagram included

## User Experience

- [ ] All pages accessible via URLs
- [ ] Navigation between pages works
- [ ] Components render correctly
- [ ] Data displays properly
- [ ] No broken links or routes

## TypeScript & Build

- [ ] TypeScript compilation succeeds
- [ ] No type errors across feature
- [ ] Build succeeds (npm run build)
- [ ] No build warnings for feature files

## Final Verification

- [ ] Feature works end-to-end
- [ ] All pages render without errors
- [ ] Components interact correctly
- [ ] Mock data flows through system
- [ ] Feature is ready for user testing
- [ ] Documentation is complete

---

**Feature Summary:**
- Components: {{component_count}}
- Pages: {{page_count}}
- Mock Data Entities: {{entity_count}}

**Validation Status:** ✅ PASS / ❌ FAIL

**Validated By:** Forge (Builder)
**Validation Date:** {{date}}
