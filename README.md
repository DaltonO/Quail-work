<div align="center">

# Quail Employment

**The marketing site and inquiry flows for Quail Employment.**

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)

</div>

---

## Contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Pages](#pages)
- [Project structure](#project-structure)
- [Features](#features)
- [Working in the codebase](#working-in-the-codebase)
- [Notes](#notes)

## Overview

Quail brings together participants, employers and service partners to develop work opportunities and coordinate individualized employment support. This repository contains:

- **Marketing pages:** home, plus pages for Employers, Partners and Participants.
- **Inquiry flows:** forms for participants, employers, provider partnerships and referrals. Each has validation, an error summary and a confirmation screen.

Every page is fully responsive, with layouts designed for **1440px desktop** and **390px mobile**.

> [!NOTE]
> The inquiry forms are **prototypes**. They validate input and show a confirmation screen, but **nothing is sent or stored**.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 with design tokens in `app/globals.css` |
| Validation | [Zod 4](https://zod.dev) |
| Icons | [Lucide](https://lucide.dev) |
| Tooling | ESLint 9 (`eslint-config-next`), Turbopack for development |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/employers` | For Employers |
| `/partners` | For Partners |
| `/participants` | For Participants |
| `/talk-with-quail` | Participant inquiry |
| `/inquiry/employer` | Employer inquiry |
| `/inquiry/provider-partnership` | Provider partnership inquiry |
| `/inquiry/referral` | Referral inquiry |

The header and navigation are shared across the marketing pages, and `app/not-found.tsx` provides the 404 page.

## Project structure

```text
app/
├── (site)/                 Marketing pages; layout.tsx adds the shared header
├── talk-with-quail/        Participant inquiry (standalone, no site header)
├── inquiry/                Employer, provider partnership and referral inquiries
├── not-found.tsx           404 page
└── globals.css             Tailwind setup and design tokens

components/
├── layout/                 SiteHeader, SiteFooter, menu items and nav icons
├── ui/                     Shared parts: Accordion, Select, ButtonLink, ArrowLink,
│                           Section, SectionIntro, Responsive, Icon, QuailBrand, …
├── sections/               Blocks shared by audience pages (benefits, process, FAQ, status)
├── home/                   Home page sections, plus HomeMobile for the 390px layout
├── employers/  partners/  participants/   Page-specific sections
└── inquiry/                Form controls, ParticipantInquiry, InquiryDialog (driven by config)

lib/
├── navigation.ts           Header navigation content
├── links.ts                External links, the single place they are defined
├── inquiries.ts            Inquiry form text and field definitions
└── inquirySchemas.ts       Zod validation schemas

public/
├── brand/                  Logo files
└── illustrations/          SVG illustrations
```

## Features

**Navigation**
- Desktop header dropdowns open on mouse hover. A short close delay and an invisible strip over the gap let the mouse move into the menu. Click, tap, Escape and clicking outside also work.
- The current audience page is marked **✓ Current**.
- On mobile, a Menu/Close panel with expandable sections.

**Forms**
- Validated with Zod. Each field shows its own error message, and an error summary at the top links to the fields with problems.
- An error clears as soon as its field is corrected.
- A custom `Select` dropdown replaces the browser's native `<select>`. It works with the keyboard and screen readers.

**Content**
- FAQ accordions start with the first question open, and only one question is open at a time.
- External links can open in a new tab; this is set per link.

## Working in the codebase

### External links

All external links are defined in [`lib/links.ts`](lib/links.ts). The header and footer read from it, so you only ever edit a link here.

```ts
quailFms: {
  label: "Quail FMS",              // link text
  domain: "fms.joinquail.com",     // address shown as text in the footer
  href: "https://fms.joinquail.com",
  newTab: true,                    // open in a new tab
},
```

To render one, spread `newTabProps(link)` onto the `<a>` or `<Link>`. It adds `target="_blank"` and `rel="noopener noreferrer"` when `newTab` is set.

### Form validation

[`lib/inquirySchemas.ts`](lib/inquirySchemas.ts) contains the schemas.

| Schema | Used by | Rules |
| --- | --- | --- |
| `participantInquirySchema` | `/talk-with-quail` | Name, email and city required |
| `buildInquirySchema(fields)` | Employer, provider partnership and referral inquiries | Built from each field in `lib/inquiries.ts`: required text can't be blank, emails must be valid, checkbox groups need at least one choice, select values must be one of the listed options |

To add a field to an employer or partner form, add it to the form's settings in `lib/inquiries.ts`, along with its `error` message. Its validation is created automatically.

### Responsive layouts

- **Same structure on desktop and mobile:** one component, with mobile styles as the default and desktop styles under the `lg:` prefix.
- **Different composition on mobile** (home page): `Responsive` renders both versions and switches between them at 1024px.

## Notes

- The Proposed schedule field on the employer inquiry shows "Not sure yet" as a placeholder and requires a choice. "Not sure yet" is still a selectable option.
- "Recreation Services" and "View All Services" link to the services section on the home page (`/#services`) until dedicated pages exist.
- The Quail FMS header and navigation belong to the separate FMS site and are not part of this project.
