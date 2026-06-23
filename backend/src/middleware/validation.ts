import { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Zod validation schemas
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email format"),
});

export const leadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email format"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  serviceInterest: z.enum([
    "GENERAL",
    "NBFC_FINANCE",
    "INSURANCE",
    "PROPERTY_INVESTMENT",
    "MUTUAL_FUND",
    "PARTNERSHIP",
  ], {
    errorMap: () => ({ message: "Invalid service interest value" }),
  }),
  preferredContactMethod: z.enum(["PHONE", "WHATSAPP", "EMAIL"], {
    errorMap: () => ({ message: "Invalid preferred contact method" }),
  }),
  message: z.string().min(5, "Message must be at least 5 characters long"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required to submit inquiries" }),
  }),
});

export const leadStatusSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "IN_PROGRESS", "CONVERTED", "CLOSED"], {
    errorMap: () => ({ message: "Invalid status value" }),
  }),
});

// Middleware factory for validation
export const validateBody = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          status: "fail",
          message: "Validation failed",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
};
