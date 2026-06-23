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

## 2. Backend Deployment (Express)

We recommend deploying the backend node app to **Render** or **Railway**.

### Option A: Render Setup
1. Sign in to [Render](https://render.com).
2. Create a new **Web Service** and link your GitHub repository.
3. Configure the following values:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. Add the following **Environment Variables**:
   - `PORT`: `5000` (or leave empty; Render assigns one)
   - `DATABASE_URL`: *[Your PostgreSQL connection string]*
   - `CORS_ORIGIN`: `https://your-frontend-domain.vercel.app`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: *[Your email SMTP credentials]*
   - `ADMIN_EMAIL`: `contact@suasiongroup.in`

---

## 3. Database Sync & Migrations

Once your backend is connected to the live database, you must apply the Prisma migrations:

1. Locally, set your `.env` connection string to the live production database URL.
2. Run the migration sync command:
   ```bash
   npx prisma migrate deploy
   ```
   *Note: `migrate deploy` applies pending migrations without prompting to reset data.*

---

## 4. Frontend Deployment (Next.js & Vercel)

Deploy the client application to **Vercel** for optimal Next.js serverless performance.

1. Sign in to [Vercel](https://vercel.com).
2. Create a **New Project** and import your GitHub repository.
3. Configure the Project settings:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
4. Add the following **Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-render-url.onrender.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `91XXXXXXXXXX` (include country code, omit + and spaces)
   - `NEXT_PUBLIC_PHONE`: `+91 XXXXXXXXXX` (display text format)
   - `NEXT_PUBLIC_EMAIL`: `contact@suasiongroup.in`
5. Click **Deploy**. Vercel will build the React pages and serve the site statically with server-side API configurations.
6. Once deployed, copy the Vercel URL and update the `CORS_ORIGIN` variable in your backend settings.
