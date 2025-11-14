# Review Code Validation Checklist

## TypeScript & Type Safety

- [ ] All variables and parameters are typed
- [ ] No `any` types (except truly unavoidable cases)
- [ ] Interfaces properly defined and exported
- [ ] Type imports correct
- [ ] Strict mode compliance verified
- [ ] TypeScript compilation succeeds (npx tsc --noEmit)

## Next.js 16 Patterns

- [ ] Server Components used by default
- [ ] Async/await params for dynamic routes
- [ ] 'use client' only when necessary
- [ ] No client-only features in Server Components
- [ ] Metadata properly exported
- [ ] No deprecated Next.js patterns

## React Best Practices

- [ ] Hooks used correctly (in client components only)
- [ ] No unnecessary re-renders
- [ ] Event handlers named properly (onClick, onChange, etc.)
- [ ] Props destructured appropriately
- [ ] Components are focused and single-purpose
- [ ] No anti-patterns detected

## Tailwind v4.1 & Styling

- [ ] Correct shadow scale used (shadow-xs, shadow-sm, etc.)
- [ ] Explicit ring widths (ring-1, ring-2) not bare "ring"
- [ ] No deprecated Tailwind v3 patterns
- [ ] Responsive classes appropriate
- [ ] No conflicting Tailwind classes
- [ ] Catalyst UI patterns followed (if UI components)

## Code Organization

- [ ] Imports organized (React, third-party, local)
- [ ] No unused imports or variables
- [ ] Files in correct directories
- [ ] Naming conventions followed
- [ ] Code properly formatted
- [ ] Logic is clear and maintainable

## Performance

- [ ] No large components that should be split
- [ ] React.memo used appropriately
- [ ] No heavy computations in render
- [ ] Data transformations efficient
- [ ] Bundle size reasonable
- [ ] Server Components preferred over Client when possible

## Security

- [ ] No hardcoded secrets or API keys
- [ ] User input sanitized
- [ ] No XSS vulnerabilities
- [ ] Dependencies up to date
- [ ] No known security issues

## Best Practices

- [ ] Error handling present
- [ ] Loading states for async operations
- [ ] Accessibility attributes (aria-*) where needed
- [ ] Semantic HTML used
- [ ] Comments added where helpful

## Documentation

- [ ] Code is self-documenting or commented
- [ ] Complex logic explained
- [ ] Props interfaces documented (JSDoc)
- [ ] Build log entries accurate
- [ ] Context reflects current state

## Integration

- [ ] Components work together correctly
- [ ] Data flows properly
- [ ] Type safety across component boundaries
- [ ] No runtime errors
- [ ] No console warnings

---

## Review Summary

**Files Reviewed:** {{file_count}}

**Issues Found:**
- Critical: {{critical_count}}
- Important: {{important_count}}
- Nice-to-Have: {{nice_to_have_count}}

**Overall Assessment:** ✅ PASS / ⚠️ NEEDS WORK / ❌ CRITICAL ISSUES

**Reviewed By:** Sentinel (QA Refactor)
**Review Date:** {{date}}
