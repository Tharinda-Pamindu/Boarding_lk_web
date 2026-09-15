# Contributing to boarding.lk

Thank you for helping make student housing in Sri Lanka safer and easier to find! This guide explains how to set up the project, what we expect from contributions, and how to get your changes merged.

By participating, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of contents

- [Ways to contribute](#ways-to-contribute)
- [Development setup](#development-setup)
- [Workflow](#workflow)
- [Coding guidelines](#coding-guidelines)
- [Commit messages](#commit-messages)
- [Pull requests](#pull-requests)
- [Reporting bugs and requesting features](#reporting-bugs-and-requesting-features)

## Ways to contribute

- Report bugs or UI problems (including mobile layout issues)
- Suggest features that help students or landlords
- Improve Sinhala / English copy, or help with Tamil translations
- Improve accessibility, performance or SEO
- Fix open issues. Those labelled `good first issue` are a great place to start.
- Improve documentation

> **Security issues:** do not open a public issue. Follow [SECURITY.md](SECURITY.md) instead.

## Development setup

**Requirements:** Node.js 22 LTS (or 20.19+) and npm.

```sh
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/Boarding_lk_web.git
cd Boarding_lk_web

# 2. Add the upstream remote
git remote add upstream https://github.com/Tharinda-Pamindu/Boarding_lk_web.git

# 3. Install dependencies and start the dev server
npm install
npm run dev
```

## Workflow

1. **Sync** your fork with the latest `main`:
   ```sh
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```
2. **Create a branch** with a descriptive name:
   - `feat/saved-listings-filter`
   - `fix/header-mobile-overflow`
   - `docs/update-readme`
3. **Make your changes** in small, focused commits.
4. **Check your work** before pushing:
   ```sh
   npm run lint
   npm run format
   npm run build
   ```
5. **Push** your branch and open a pull request against `main`.

### Important: Lovable sync

The `main` branch syncs with the [Lovable](https://lovable.dev) editor. To avoid breaking project history:

- **Never force-push** to `main`, and never rebase, amend or squash commits that are already on `main`.
- Keep `main` buildable at all times. Only merge PRs that pass `npm run build`.

## Coding guidelines

### General

- Write TypeScript. Avoid `any` unless there is no reasonable alternative.
- Match the style of the surrounding code. Prettier and ESLint are the source of truth for formatting.
- Keep components small and focused, and extract repeated UI into `src/components/`.
- Use the `@/` path alias for imports from `src/`.

### Routing

- Pages live in `src/routes/` and use TanStack Router **file-based routing**. See [src/routes/README.md](src/routes/README.md).
- **Do not edit `src/routeTree.gen.ts`**. It is generated automatically.
- Do not add Next.js or Remix conventions (`src/pages/`, `app/layout.tsx`).
- Give every page a `head()` with a meaningful `title` and `description` for SEO.

### Build config

- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which already includes React, Tailwind, TanStack Start, Nitro and path aliases. **Do not add these plugins manually**, or the build will break.

### Styling and UI

- Use Tailwind utility classes and the existing design tokens in `src/styles.css` (for example `bg-surface`, `text-primary`, `text-on-surface-variant`) rather than hard-coded colors.
- Reuse shadcn/ui components from `src/components/ui/` before creating new primitives.
- Design mobile-first. Most students browse on their phones.
- Keep interfaces accessible: use semantic HTML, label every form input, add meaningful `alt` text to images, and support keyboard navigation.

### Content and language

- The site is bilingual. When you add user-facing text, provide English and, where the surrounding UI does, Sinhala.
- Keep safety messaging accurate. Never add copy that encourages sending advance or key money before an in-person inspection.
- **Do not commit real personal data** (real names, phone numbers, NIC numbers or addresses) in sample listings or tests.

### Dependencies

- Add new dependencies only when necessary, and explain why in your PR.
- Commit the updated lockfile(s) together with `package.json` changes.

## Commit messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): <short summary>
```

| Type       | Use for                                     |
| ---------- | ------------------------------------------- |
| `feat`     | A new feature                               |
| `fix`      | A bug fix                                   |
| `docs`     | Documentation only                          |
| `style`    | Formatting, no code change                  |
| `refactor` | Code change that is neither fix nor feature |
| `perf`     | Performance improvement                     |
| `chore`    | Tooling, dependencies, config               |

Examples:

```
feat(search): add budget range filter
fix(header): prevent nav overflow on small screens
docs: add deployment notes to README
```

## Pull requests

- Fill in the [pull request template](.github/pull_request_template.md).
- Link related issues (for example `Closes #12`).
- Keep each PR focused on one change. Large PRs are harder to review.
- Include **screenshots or a short screen recording** for any UI change, on both desktop and mobile.
- Make sure `npm run lint` and `npm run build` pass.
- Be responsive to review feedback. A maintainer will review your PR as soon as possible.

## Reporting bugs and requesting features

Use the [issue templates](https://github.com/Tharinda-Pamindu/Boarding_lk_web/issues/new/choose):

- **Bug report:** include steps to reproduce, expected vs. actual behavior, browser/device, and screenshots.
- **Feature request:** describe the problem, who it helps (students, landlords or admins), and your proposed solution.

Please search existing issues first to avoid duplicates.

---

Thank you for contributing! 🙏
