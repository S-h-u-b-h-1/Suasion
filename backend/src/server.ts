import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { 
  createContactMessage, 
  subscribeNewsletter 
} from "./controllers/contact.controller";
import { 
  createLead, 
  getLeads, 
  updateLeadStatus, 
  deleteLead 
} from "./controllers/lead.controller";
import { 
  validateBody, 
  contactSchema, 
  newsletterSchema, 
  leadSchema, 
  leadStatusSchema 
} from "./middleware/validation";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

// Middlewares
app.use(cors({
  origin: CORS_ORIGIN,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Security: Rate limiting to prevent form spamming
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: {
    status: "fail",
    message: "Too many requests from this IP. Please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter to all API routes
app.use(["/api/", "/_/backend/api/"], apiLimiter);

// ---------------------- Routes ----------------------

// Health Check
app.get(["/health", "/_/backend/health"], (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "Server is healthy." });
});

// Define API Router
const apiRouter = express.Router();

// Contact Messages
apiRouter.post("/contact", validateBody(contactSchema), createContactMessage);

// Newsletter Subscription
apiRouter.post("/newsletter", validateBody(newsletterSchema), subscribeNewsletter);

// Consultation Inquiries / Leads
apiRouter.post("/inquiries", validateBody(leadSchema), createLead);
apiRouter.get("/leads", getLeads);
apiRouter.get("/inquiries", getLeads); // Alias route matching front-end and docs
apiRouter.patch("/inquiries/:id/status", validateBody(leadStatusSchema), updateLeadStatus);
apiRouter.delete("/inquiries/:id", deleteLead);

// Mount router on both local and Vercel multi-service path prefixes
app.use(["/api", "/_/backend/api"], apiRouter);

// ------------------- Error Handler -------------------

// 404 Route Not Found
app.use((req: Request, res: Response) => {
  res.status(404).json({ status: "fail", message: `Route ${req.originalUrl} not found.` });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Uncaught Error:", err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "An unexpected error occurred on the server.",
  });
});

// Start Server
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Suasion Group backend server running on port ${PORT}`);
    console.log(`CORS allowed from origin: ${CORS_ORIGIN}`);
  });
}

export default app;
