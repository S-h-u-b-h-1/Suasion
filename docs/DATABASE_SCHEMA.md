# Database Schema: Suasion Group Website

The Suasion Group website backend persists data to a PostgreSQL database using Prisma ORM.

## Schema Architecture

```mermaid
erDiagram
    LEAD {
        string id PK
        string fullName
        string phone
        string email
        string city
        ServiceInterest serviceInterest
        ContactMethod preferredContactMethod
        string message
        boolean consent
        LeadStatus status
        dateTime createdAt
        dateTime updatedAt
    }
    NEWSLETTER_SUBSCRIBER {
        string id PK
        string email UK
        dateTime createdAt
      }
    CONTACT_MESSAGE {
        string id PK
        string name
        string phone
        string email
        string message
        dateTime createdAt
    }
    BLOG_POST {
        string id PK
        string title
        string slug UK
        string excerpt
        string content
        string category
        boolean published
        dateTime createdAt
        dateTime updatedAt
    }
```

---

## Database Tables & Column Specifications

### 1. `suasion` (Model: `Lead`)
Stores formal service inquiries submitted by clients on the Contact page.

| Field Name | Data Type | Modifiers / Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `String` | `@id`, `default(uuid())` | Primary key. |
| `fullName` | `String` | None | Full name of the client. |
| `phone` | `String` | None | Contact number. |
| `email` | `String` | None | Email address. |
| `city` | `String` | None | Client city/location. |
| `serviceInterest` | `ServiceInterest` | `default(GENERAL)` | Enum value representing the vertical of interest. |
| `preferredContactMethod`| `ContactMethod` | `default(PHONE)` | Preferred communication channel. |
| `message` | `String` | None | Detailed consultation query. |
| `consent` | `Boolean` | None | Privacy consent check. Must be `true`. |
| `status` | `LeadStatus` | `default(NEW)` | Lead workflow status. |
| `createdAt` | `DateTime` | `default(now())` | Creation timestamp. |
| `updatedAt` | `DateTime` | `@updatedAt` | Last modification timestamp. |

#### ServiceInterest Enum Values:
- `GENERAL`: General Inquiry
- `NBFC_FINANCE`: Suasion Finvest NBFC credit/lending
- `INSURANCE`: Suasion Services life insurance planning
- `PROPERTY_INVESTMENT`: Suasion Services real estate asset advisory
- `MUTUAL_FUND`: Suasion Securities wealth management & SIPs
- `PARTNERSHIP`: Business associate/partnership inquiries

#### ContactMethod Enum Values:
- `PHONE`: Voice call
- `WHATSAPP`: WhatsApp direct message
- `EMAIL`: Email correspondence

#### LeadStatus Enum Values:
- `NEW`: Newly submitted inquiry, awaiting review
- `CONTACTED`: Client contacted by relationship manager
- `IN_PROGRESS`: In active advisory/review cycle
- `CONVERTED`: Successfully converted client
- `CLOSED`: Closed inquiry (rejected, ineligible, or complete)

---

### 2. `newsletter_subscribers` (Model: `NewsletterSubscriber`)
Stores emails registered through the newsletter subscription input in the footer.

| Field Name | Data Type | Modifiers / Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `String` | `@id`, `default(uuid())` | Primary key. |
| `email` | `String` | `@unique` | Unique subscriber email. |
| `createdAt` | `DateTime` | `default(now())` | Subscription timestamp. |

---

### 3. `contact_messages` (Model: `ContactMessage`)
Stores general contact submissions (separate from formal financial services inquiries).

| Field Name | Data Type | Modifiers / Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `String` | `@id`, `default(uuid())` | Primary key. |
| `name` | `String` | None | Name of the sender. |
| `phone` | `String` | None | Contact number. |
| `email` | `String` | None | Email address. |
| `message` | `String` | None | Message content. |
| `createdAt` | `DateTime` | `default(now())` | Timestamp. |

---

### 4. `blog_posts` (Model: `BlogPost`)
Optional table to store and display dynamically published articles/insights on the resource hub.

| Field Name | Data Type | Modifiers / Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `String` | `@id`, `default(uuid())` | Primary key. |
| `title` | `String` | None | Article title. |
| `slug` | `String` | `@unique` | URL-friendly page identifier. |
| `excerpt` | `String` | None | Short paragraph summary. |
| `content` | `String` | None | Markdown/HTML text content. |
| `category` | `String` | None | Article vertical/category. |
| `published` | `Boolean` | `default(false)` | Visibility switch. |
| `createdAt` | `DateTime` | `default(now())` | Creation timestamp. |
| `updatedAt` | `DateTime` | `@updatedAt` | Modification timestamp. |

---

## Migration Instructions

To run migrations and sync your database in development or production:

1. **Verify environment variables** in `backend/.env`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=schemaname"
   ```
2. **Apply migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```
3. **Generate Prisma Client** (ran automatically by migrate, but can be forced):
   ```bash
   npx prisma generate
   ```
