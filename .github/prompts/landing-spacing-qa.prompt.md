---
description: 'Audit and normalize landing-page left/right spacing for production quality'
name: 'Landing Spacing QA'
argument-hint: "Route, scope, and strictness (e.g., 'homepage only, fix issues, run lint+build')"
agent: 'agent'
---

Review the landing page for horizontal spacing consistency and production readiness.

Task scope:

- Prioritize left/right spacing consistency across all top-level sections and nav wrappers.
- Verify desktop and mobile behavior (no clipped edges, no uneven gutters, no horizontal overflow).
- Prefer one reusable gutter utility/class instead of repeated per-section `px-*` drift.
- Preserve existing visual language and avoid unnecessary redesign.

Execution rules:

- Inspect page-level and section-level wrappers first.
- List findings by severity with file references.
- If fixes are requested, implement them end-to-end.
- Keep changes maintainable and minimal.
- Run quality checks (`pnpm lint`, `pnpm build`) after edits.

Output format:

1. Findings: severity-ordered with file paths and short impact.
2. Changes made: concise list of implemented fixes.
3. Verification: lint/build status and any warnings.
4. Residual risk: anything that still needs manual visual QA.
