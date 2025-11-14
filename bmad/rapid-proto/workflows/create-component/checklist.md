# Create Component Validation Checklist

Use this checklist to validate component creation before completion.

## Component File Quality

- [ ] Component file exists at correct path
- [ ] File uses `.tsx` extension (TypeScript + JSX)
- [ ] Component name matches requirements (PascalCase)
- [ ] File is properly formatted and readable

## TypeScript Compliance

- [ ] TypeScript strict mode compliant (no `any` types)
- [ ] Props interface exported (if component has props)
- [ ] All props properly typed
- [ ] Return type is valid JSX
- [ ] No TypeScript errors when checked

## Catalyst UI & Tailwind v4.1

- [ ] Uses correct Tailwind v4.1 shadow scale (shadow-xs, shadow-sm, etc.)
- [ ] Uses explicit ring widths (ring-1, ring-2, ring-3) not bare "ring"
- [ ] Imports Catalyst components correctly from '@headlessui/react' (if UI component)
- [ ] Follows Catalyst patterns for accessibility (if UI component)
- [ ] Tailwind classes are valid and render correctly

## React Best Practices

- [ ] Uses 'use client' directive if interactive (state, events, hooks)
- [ ] No unnecessary re-renders (proper use of React patterns)
- [ ] Proper event handler naming (onClick, onChange, etc.)
- [ ] State management is appropriate (if uses state)
- [ ] Component is properly exported

## Code Organization

- [ ] Component is in correct directory (catalyst/, shared/, or feature/)
- [ ] Imports are organized (React, third-party, local)
- [ ] No unused imports
- [ ] Component logic is clear and maintainable
- [ ] Code follows project conventions

## Documentation

- [ ] JSDoc comment describes component purpose
- [ ] Props are documented (if applicable)
- [ ] Usage example is clear and correct
- [ ] Build log entry created with all details
- [ ] Context summary updated

## Mock Data (if created)

- [ ] Mock data file exists in lib/mock-data/
- [ ] Data is type-safe with proper interface
- [ ] Data is realistic and useful for testing
- [ ] Export added to lib/mock-data/index.ts
- [ ] No conflicts with existing mock data

## Integration

- [ ] Component can be imported from expected path
- [ ] No circular dependencies
- [ ] Works with existing project structure
- [ ] Compatible with Next.js 16 App Router
- [ ] Server/Client component designation is correct

## Final Verification

- [ ] Component renders without errors
- [ ] TypeScript compilation succeeds
- [ ] No console warnings or errors
- [ ] Component is ready for use in pages
- [ ] Documentation is complete and accurate

---

## Validation Notes

Record any issues found during validation and how they were resolved:

**Issues Found:**
- [List any issues]

**Resolutions:**
- [How issues were fixed]

**Validation Status:** ✅ PASS / ❌ FAIL

**Validated By:** Forge (Builder)
**Validation Date:** {{date}}
