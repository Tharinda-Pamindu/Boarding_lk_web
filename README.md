# boarding.lk

> Sri Lanka's verified student & youth housing hub: find boarding rooms, annexes and houses near universities, with direct landlord contact and zero broker commission.

**🌐 Live demo: [boardinglk.lovable.app](https://boardinglk.lovable.app/)**

**boarding.lk** is a bilingual (English / සිංහල) rental platform. It helps university students, interns and young professionals find safe accommodation near major Sri Lankan campuses such as SLIIT, USJ (Japura), Kelaniya, NSBM and the University of Colombo. Landlords can list rooms for free, and tenants contact them directly by phone or WhatsApp, with no middlemen.

> [!NOTE]
> This project is in active early development. Most listing data is currently static sample content, and forms (post an ad, login, support tickets) are not yet connected to a backend.

## Features

- **Home and search:** search by city, campus or bus route, category and monthly budget, with campus quick filters.
- **Listings:** listing cards and detail pages showing price, distance to campus, amenities and a verification badge.
- **University hubs and districts:** browse boardings grouped by campus zone, district and town.
- **Post an ad:** a free multi-step listing flow for landlords (property type, location, rent and key money, amenities, photos, contact).
- **Saved listings:** shortlist places to compare later.
- **Accounts:** login and registration pages.
- **Guides and safety:** an inspection checklist, scam prevention advice and key deposit guidelines.
- **Support center:** a WhatsApp desk, helpline, scam reporting and bilingual FAQs.
- **Legal pages:** privacy policy, terms of service, refund and key deposit policy.

## Tech stack

| Area      | Tools                                                                  |
| --------- | ---------------------------------------------------------------------- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR)           |
| Routing   | [TanStack Router](https://tanstack.com/router) (file-based)            |
| Language  | TypeScript                                                             |
| Styling   | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) (Radix primitives) |
| Forms     | React Hook Form + Zod                                                  |
| Data      | TanStack Query                                                         |
| Build     | Vite, Nitro                                                            |
| Tooling   | ESLint, Prettier                                                       |
| Editor    | [Lovable](https://lovable.dev)                                         |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 22 LTS (or 20.19+)
- npm (bundled with Node.js)

### Install and run

```sh
git clone https://github.com/Tharinda-Pamindu/Boarding_lk_web.git
cd Boarding_lk_web
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:3000` or `http://localhost:5173`).

### Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Create a production build            |
| `npm run build:dev` | Create a build in development mode   |
| `npm run preview`   | Preview the production build locally |
| `npm run lint`      | Lint the codebase with ESLint        |
| `npm run format`    | Format all files with Prettier       |

## Project structure

```text
.
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   ├── hooks/              # Reusable React hooks
│   ├── lib/                # Utilities and error handling
│   ├── routes/             # File-based routes (one file = one page)
│   ├── routeTree.gen.ts    # Auto-generated route tree (do not edit)
│   ├── router.tsx
│   ├── server.ts           # SSR server entry
│   └── styles.css          # Tailwind theme and design tokens
├── components.json         # shadcn/ui config
├── vite.config.ts
└── package.json
```

Routes follow TanStack Router conventions. See [src/routes/README.md](src/routes/README.md).

## Working with Lovable

This repository is connected to [Lovable](https://lovable.dev). Changes pushed to `main` sync back into the Lovable editor, and edits made in Lovable are committed here.

- Keep `main` in a working state.
- **Never force-push or rewrite published history** (rebase, amend or squash already-pushed commits). This breaks Lovable's project history.

## Contributing

Contributions are welcome. Please read the [Contributing Guide](CONTRIBUTING.md) and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please **do not** report security vulnerabilities through public issues. See [SECURITY.md](SECURITY.md) for how to report them privately.

To report a fraudulent listing or scam on the platform itself, use the **Report Scam** option on the [support page](https://boardinglk.lovable.app/support) instead of GitHub.

## License

This project is licensed under the [MIT License](LICENSE).
