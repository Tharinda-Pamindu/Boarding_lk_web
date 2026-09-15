# Security Policy

boarding.lk handles information that matters to real people, including landlord contact details, student inquiries and (in future) identity verification documents. We take security seriously and appreciate responsible disclosure.

## Supported Versions

This project is deployed continuously from the `main` branch. Only the latest version on `main` receives security fixes.

| Version               | Supported          |
| --------------------- | ------------------ |
| `main` (latest)       | :white_check_mark: |
| Older commits / forks | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions or pull requests.**

Report them privately through one of these channels:

1. **Preferred:** [GitHub Private Vulnerability Reporting](https://github.com/Tharinda-Pamindu/Boarding_lk_web/security/advisories/new). Open the repository's **Security** tab and click **Report a vulnerability**.
2. **Email:** <athulasiriproduction@gmail.com>, with the subject line `[SECURITY] boarding.lk - <short summary>`.

Please include as much of the following as you can:

- The type of issue (for example XSS, authentication bypass, data exposure or injection)
- The affected page, route or source file(s)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code, if available
- The potential impact, and how an attacker could exploit it

## What to Expect

We are a small team, so these are targets rather than guarantees:

| Stage                             | Target timeframe                              |
| --------------------------------- | --------------------------------------------- |
| Acknowledgement of your report    | Within 3 business days                        |
| Initial assessment                | Within 7 business days                        |
| Fix for confirmed critical issues | As soon as possible, typically within 30 days |

We will keep you informed of our progress. Once the issue is fixed, we will credit you in the release notes or security advisory, unless you prefer to remain anonymous.

## Scope

### In scope

- The source code in this repository
- The boarding.lk web application built from it, including the live demo at [boardinglk.lovable.app](https://boardinglk.lovable.app/)

### Out of scope

- **Fraudulent listings, scams or suspicious landlords.** These are platform safety reports, not code vulnerabilities. Use the **Report Scam / Fake Ad** option on the [support page](https://boardinglk.lovable.app/support).
- Vulnerabilities in third-party services and dependencies (for example Lovable, Cloudflare or npm packages). Report these to the respective vendor, though we welcome a heads-up if they affect this project.
- Denial-of-service attacks, spam or social engineering
- Reports from automated scanners without a demonstrated, exploitable impact
- Missing security headers or best practices without a concrete attack scenario

## Safe Harbor

We will not pursue legal action against researchers who act in good faith and:

- Make a reasonable effort to avoid privacy violations, data destruction and service disruption
- Only interact with accounts they own, or have explicit permission to access
- Do not access, modify or keep other users' personal data (including landlord or student contact details) beyond what is needed to demonstrate the issue
- Give us reasonable time to fix the issue before any public disclosure

## Security Best Practices for Contributors

- Never commit secrets, API keys or `.env` files. Use environment variables.
- Never commit real personal data (names, phone numbers, NIC numbers or addresses).
- Validate and sanitize all user input, both client-side (Zod) and server-side.
- Keep dependencies up to date, and review `npm audit` output when adding packages.

Thank you for helping keep boarding.lk and its users safe.
