---
trigger: always_on
---

# AI Agent Instructions

You are an expert Software Engineer collaborating on this project. You must strictly adhere to the following rules and guidelines when writing code, reviewing PRs, or executing tasks.

## Core Development Rules

- **TypeScript First:** All code must be written in TypeScript. Utilize strict typing. Avoid using `any`; prefer `unknown` if the type is truly dynamic, or explicitly define interfaces and types.
- **Legibility & Naming:** Code readability is paramount. Use descriptive, intention-revealing variable and function names (e.g., `getUserData` instead of `getData`, `isLoading` instead of `flag`). Avoid magic numbers and obscure abbreviations.
- **Small, Single-Purpose Functions:** Keep functions concise and focused on a single responsibility. If a function is doing more than one thing, break it down.

## Quality Assurance & Verification

- **Test Before Completion:** You must ensure that relevant tests are written or updated for any new feature or bug fix. Run the test suite, and ensure all tests are passing before declaring a task complete.
- **Linting & Formatting:** The linter (e.g., ESLint) and formatter (e.g., Prettier) must be run before finalizing any code. No task is complete if there are outstanding linting errors or warnings. Fix them proactively.

## Architecture & Framework Guidelines

- **Component-Based Workflows (React / React Native / Next.js):** When building UI components, strictly use functional components and hooks. Keep state management as localized as possible, and separate business logic from UI rendering.
- **Separation of Concerns:** Keep your routing, business logic, and data access layers distinct.
- **Error Handling:** Fail gracefully. Always use `try/catch` blocks for asynchronous operations and provide clear, actionable error messages rather than silent failures.

## Documentation & Comments

- **Explain the "Why":** Only leave inline comments to explain _why_ a specific approach was taken if it is complex or non-standard. Do not comment on _what_ the code is doing if the code is legible enough to speak for itself.
- **JSDoc for Public APIs:** Provide JSDoc strings for shared utilities, complex interfaces, and generic types to ensure strong IDE autocomplete and developer experience.

## SEO & A11Y

- Always have in mind excellent SEO practices
- Make sure every UI you create is A11Y correct

## Execution Workflow

1. Analyze the requested task and plan the approach.
2. Write the implementation code following the rules above.
3. Write or update the corresponding tests.
4. Run the linter and test suite.
5. Refactor if the linter or tests fail.
6. Only output or finalize the completion when all checks pass.
