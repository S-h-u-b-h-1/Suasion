import { Request, Response } from "express";
import { prisma } from "../config/db";

export async function createContactMessage(req: Request, res: Response): Promise<void> {
  const { name, phone, email, message } = req.body;

  try {
    const contactMsg = await prisma.contactMessage.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Contact message saved successfully",
      data: contactMsg,
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while saving your message.",
    });
  }
}

export async function subscribeNewsletter(req: Request, res: Response): Promise<void> {
  const { email } = req.body;

  try {
    // Check if subscriber already exists
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      res.status(200).json({
        status: "success",
        message: "Email is already subscribed to the newsletter.",
      });
      return;
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    res.status(201).json({
      status: "success",
      message: "Subscribed to newsletter successfully.",
      data: subscriber,
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while processing your subscription.",
    });
  }
}
