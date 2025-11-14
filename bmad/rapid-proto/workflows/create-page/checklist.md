# Create Page Validation Checklist

## Page File Structure

- [ ] Page file exists at correct app directory path
- [ ] File uses `.tsx` extension (TypeScript + JSX)
- [ ] Page component name is valid (PascalCase)
- [ ] File is properly formatted and readable

## Next.js 16 Compliance

- [ ] Server Component by default (no 'use client' unless needed)
- [ ] Async function if dynamic route
- [ ] Params and searchParams properly awaited (Next.js 16 pattern)
- [ ] Param types correctly defined
- [ ] No client-only features in Server Component

## TypeScript Compliance

- [ ] TypeScript strict mode compliant
- [ ] PageProps interface defined (if dynamic route)
- [ ] Param types match route pattern
- [ ] Return type is valid JSX
- [ ] No TypeScript errors

## Metadata & SEO

- [ ] Metadata exported (if custom metadata requested)
- [ ] Title and description are meaningful
- [ ] Metadata follows Next.js 16 patterns
- [ ] No duplicate metadata definitions

## Routing

- [ ] Route path matches intended URL structure
- [ ] Dynamic segments use [...] bracket notation correctly
- [ ] No conflicts with existing routes
- [ ] Route is accessible via browser

## Layout (if created)

- [ ] Layout file exists in correct directory
- [ ] Layout accepts children prop
- [ ] Layout uses proper TypeScript types
- [ ] Layout wraps content correctly
- [ ] No layout conflicts

## Code Quality

- [ ] Imports are organized (React, Next, components, utils)
- [ ] No unused imports
- [ ] Tailwind classes are valid
- [ ] Component logic is clear
- [ ] Follows project conventions

## Documentation

- [ ] Build log entry created with route details
- [ ] Context summary updated
- [ ] Dynamic route params documented (if applicable)
- [ ] Custom layout noted (if created)

## Integration

- [ ] Page can be accessed via URL
- [ ] No runtime errors on page load
- [ ] Compatible with Next.js 16 App Router
- [ ] Works with existing layout structure
- [ ] No console warnings

## Final Verification

- [ ] Page renders without errors
- [ ] TypeScript compilation succeeds
- [ ] Navigation to page works
- [ ] Page is ready for content/components
- [ ] Documentation is complete

---

**Validation Status:** ✅ PASS / ❌ FAIL

**Validated By:** Forge (Builder)
**Validation Date:** {{date}}
