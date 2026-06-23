# Project Walkthrough: Suasion Group Website Monorepo

Welcome to the Suasion Group website codebase walkthrough. This document outlines the pages built, core features, API routes, database schemas, and explains the git commit milestones.

---

## 1. Directory Structure

The project is structured as a clean monorepo:
- **`frontend/`**: Next.js (App Router, Tailwind CSS, Framer Motion, TypeScript) client application. Includes interactive forms, responsiveness, and the administrative dashboard.
- **`backend/`**: Express, Node.js, and TypeScript server. Manages lead storage, status workflows, and email notifications.
- **`docs/`**: Clean guidelines for brand style, database structure, APIs, deployment, and future roadmap.

---

## 2. Implemented Pages & Features

1. **Home Page (`/`)**: Features a premium hero section, key company vertical cards (Finvest, Services, Securities), trust indicators, values, journey timeline teaser, client CTA, and FAQ Accordion.
2. **About Page (`/about`)**: Describes the 30-year legacy of the Kataruka family in Kolkata, the corporate mission, vision, and six core values.
3. **Services Page (`/services`)**: Detailed overview of core lending, insurance portfolios (LIC, Bajaj Allianz, Birla), property yield planning, and mutual fund systematic investment routes.
4. **Companies Page (`/companies`)**: Legal entity profiles for Suasion Finvest Private Limited, Suasion Services Private Limited, and Suasion Securities.
5. **Leadership Page (`/leadership`)**: Professional resumes for Ashok Kataruka (CA), Sumaan Shree Kataruka, and Shubhaang Kataruka.
6. **Journey Page (`/journey`)**: Visual timeline charting major milestones from 1995 to the present digital-first ecosystem.
7. **Contact / POC Page (`/contact`)**: Form supporting general and service-specific inquiries. Integrates state hooks (loading, error, success) and pre-fills based on URL search query parameters. Exposes direct Call, Email, and WhatsApp buttons.
8. **Resources / Blog Page (`/resources`)**: Hub displaying six custom articles. Exposes a clean read-more modal dialog to review text without leaving the page.
9. **Compliance Page (`/compliance`)**: Exposes statutory regulatory notices for NBFC, insurance solicitation, and mutual fund market risks.
10. **Privacy Policy (`/privacy`)**: Details user data protection, storage criteria, and deletion options.
11. **Admin Dashboard (`/admin`)**: Interactive portal for managing client consultation requests. Supports real-time filtering, status updates (NEW, CONTACTED, etc.), and deletion.

---

## 3. Database & REST APIs

### Database Tables:
- **`leads`**: Client inquiries and status.
- **`newsletter_subscribers`**: Subscription emails.
- **`contact_messages`**: General contact form messages.
- **`blog_posts`**: Optional article store.

### API Endpoints:
- `POST /api/contact`: Submits a general contact message.
- `POST /api/newsletter`: Submits subscriber email.
- `POST /api/inquiries`: Submits a consultation request and alerts the admin.
- `GET /api/inquiries` (Alias `/api/leads`): Fetches all leads (newest first).
- `PATCH /api/inquiries/:id/status`: Updates a lead workflow status.
- `DELETE /api/inquiries/:id`: Deletes a lead inquiry.

---

## 4. Git Commit Milestones

- **Commit 1:** `chore: initialize Suasion Group website monorepo`
  - Created root `.gitignore` and base `README.md`. Initialized git repository.
- **Commit 2:** `feat: add frontend layout, theme, and design system`
  - Bootstrapped Next.js. Configured custom Tailwind theme variables and typography inside `globals.css`. Built `Navbar` and `Footer`.
- **Commit 3:** `feat: build homepage with hero, services, and journey sections`
  - Created home page layout containing hero graphics, trust stats, verticals, values, journey summary, and FAQ accordion.
- **Commit 4:** `feat: add company, leadership, services, and compliance pages`
  - Built remaining client pages: About, Services, Companies, Leadership, Journey, Contact (with Suspense), Resources, Compliance, and Privacy.
- **Commit 5:** `feat: implement backend APIs for leads and inquiries`
  - Initialized Express server in TypeScript. Configured middleware (CORS, body parser, rate limiter, validation) and built API controllers.
- **Commit 6:** `feat: add PostgreSQL Prisma schema and database integration`
  - Setup Prisma schema modeling. Connected database credentials and executed migrations against PostgreSQL.
- **Commit 7:** `feat: connect frontend forms to backend APIs`
  - Integrated env configurations for client requests. Wired up Contact inquiries and Footer newsletter signup.
- **Commit 8:** `feat: add admin lead management dashboard`
  - Built admin dashboard page at `/admin` exposing status controls, deletion, filters, and refresh indicators.
- **Commit 9:** `chore: add SEO metadata, sitemap, robots, and legal pages`
  - Added programmatic XML sitemap and search engine crawler indexing rules.
- **Commit 10:** `docs: add project walkthrough, API docs, and deployment guide`
  - Wrote Brand Guidelines, Database Schema, API Docs, Deployment Guide, Roadmap, and Walkthrough records.
