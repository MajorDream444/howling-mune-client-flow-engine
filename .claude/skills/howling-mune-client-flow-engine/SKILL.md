```markdown
# howling-mune-client-flow-engine Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `howling-mune-client-flow-engine` TypeScript codebase. You'll learn how to name files, structure imports and exports, and write tests in alignment with the project's established practices. This guide also provides suggested commands for common workflows to streamline your development process.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `flowEngine.ts`, `userActions.ts`

### Import Style
- Use **relative imports** for referencing files within the project.
  - Example:
    ```typescript
    import flowEngine from './flowEngine';
    import { doSomething } from '../utils/doSomething';
    ```

### Export Style
- Use **default exports** for modules.
  - Example:
    ```typescript
    // flowEngine.ts
    const flowEngine = { /* ... */ };
    export default flowEngine;
    ```

### Commit Messages
- Freeform style, no enforced prefixes.
- Average commit message length: ~49 characters.

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- **Test File Naming:** Test files follow the `*.test.*` pattern.
  - Example: `flowEngine.test.ts`
- **Testing Framework:** Not explicitly detected. Check existing test files for framework usage (e.g., Jest, Mocha).
- **Test Structure:** Place tests alongside or near the files they test, using the `.test.ts` suffix.

  ```typescript
  // flowEngine.test.ts
  import flowEngine from './flowEngine';

  describe('flowEngine', () => {
    it('should execute a basic flow', () => {
      // test logic here
    });
  });
  ```

## Commands

| Command         | Purpose                                 |
|-----------------|-----------------------------------------|
| /run-tests      | Run all test files matching `*.test.*`  |
| /format-code    | Format code according to project style  |
| /new-feature    | Scaffold a new feature module           |
| /commit         | Make a commit with a descriptive message|

```