# Project Roadmap: Suasion Group Website

This roadmap describes planned updates to extend the functionality of the Suasion Group website platform.

## Phase 1: Stability & Security (Immediate)

- [ ] **Admin Authentication:** Implement JSON Web Tokens (JWT) or session cookies to restrict access to `/admin` dashboard.
- [ ] **Rate Limit Fine-Tuning:** Segment rate limits so users are capped lower on form submissions (e.g., 5 inquiries/hour) compared to static page loads.
- [ ] **Input Sanitization:** Add deep HTML sanitization to incoming strings to prevent cross-site scripting (XSS) risks.

## Phase 2: CRM & Notifications (Q3 2026)

- [ ] **Automated WhatsApp API:** Connect lead submissions to WhatsApp Business API to send an automated confirmation message to clients immediately.
- [ ] **CRM Integration:** Sync submitted leads automatically to standard CRM platforms like HubSpot or Salesforce.
- [ ] **SMS Gateways:** Provide optional SMS notifications for clients who list `PHONE` as their preferred channel.

## Phase 3: Client Portal Features (Q4 2026)

- [ ] **Mutual Fund Client Dashboard:** A secure login zone for Suasion Securities clients to check active SIP allocations, values, and request portfolio audits.
- [ ] **Document Locker:** A secure file upload vault where clients can submit NBFC credit documentation (KYC, tax audit records) privately.
- [ ] **Structured Yield Calculators:** Interactive models for property rental yields, mutual fund SIP targets, and retirement guaranteed income.
