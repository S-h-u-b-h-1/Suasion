# Deployment Guide: Suasion Group Website

This guide walks you through deploying the Suasion Group monorepo in production. The project is split into a Next.js frontend (deployed to Vercel) and an Express backend (deployed to Render or Railway) connected to a PostgreSQL database.

---

## 1. Database Provisioning (PostgreSQL)

You can provision a managed PostgreSQL database on providers such as **Neon**, **Supabase**, or **Railway**.

1. Create a PostgreSQL project.
2. Retrieve the connection string.
3. Save it to your backend environment variables as `DATABASE_URL`.
   - *Example:* `postgresql://user:pass@host:5432/dbname?sslmode=require`

---

## 2. Unified Vercel Deployment (Frontend & Backend Monorepo)

Vercel supports deploying both frontend and backend directories in a unified project using the root `vercel.json` configuration we created:

```json
{
    "experimentalServices": {
        "frontend": {
            "root": "frontend",
            "routePrefix": "/",
            "framework": "nextjs"
        },
        "backend": {
            "root": "backend",
            "routePrefix": "/_/backend"
        }
    }
}
```

### Steps to Deploy on Vercel:

1. Sign in to [Vercel](https://vercel.com).
2. Create a **New Project** and import your GitHub monorepo (`Suasion`).
3. Vercel will auto-detect the root `vercel.json` services configuration. It will spin up two services under the same project/domain:
   - **Frontend Service**: Serves the Next.js app at `https://your-domain.com/`
   - **Backend Service**: Serves the Express serverless routes at `https://your-domain.com/_/backend/`

4. Add the following **Environment Variables** in your Vercel Project settings:
   
   **For the Backend Service (configured inside Vercel Dashboard):**
   - `DATABASE_URL`: *[Your managed PostgreSQL connection string]*
   - `CORS_ORIGIN`: `https://your-production-domain.com` (your Vercel project domain)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: *[Your email SMTP credentials]*
   - `ADMIN_EMAIL`: `contact@suasiongroup.in`

   **For the Frontend Service (configured inside Vercel Dashboard):**
   - `NEXT_PUBLIC_API_URL`: `/_/backend` (Relative path: this routes client requests to the backend service hosted on the same domain)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `91XXXXXXXXXX` (your WhatsApp redirect contact)
   - `NEXT_PUBLIC_PHONE`: `+91 XXXXXXXXXX`
   - `NEXT_PUBLIC_EMAIL`: `contact@suasiongroup.in`

5. Click **Deploy**. Vercel will build the Next.js pages and compile your serverless Express function.

---

## 3. Database Sync & Migrations

Once your PostgreSQL database is provisioned and the credentials are ready:

1. Temporarily configure your local `DATABASE_URL` in `backend/.env` to reference your live production database connection string.
2. Run the migration sync command to apply schemas:
   ```bash
   npx prisma migrate deploy
   ```
   *Note: `migrate deploy` applies pending migrations without prompting to reset data.*
3. Revert your local `backend/.env` file to your local development database database URL.

