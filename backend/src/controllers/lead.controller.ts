import { Request, Response } from "express";
import { prisma } from "../config/db";
import { sendLeadNotification } from "../services/email.service";

export async function createLead(req: Request, res: Response): Promise<void> {
  const {
    fullName,
    phone,
    email,
    city,
    serviceInterest,
    preferredContactMethod,
    message,
    consent,
  } = req.body;

  try {
    const lead = await prisma.lead.create({
      data: {
        fullName,
        phone,
        email,
        city,
        serviceInterest,
        preferredContactMethod,
        message,
        consent,
      },
    });

    // Send email alert to admin asynchronously (don't block the client response)
    sendLeadNotification(lead).catch((err) => {
      console.error("Async email notification error:", err);
    });

    res.status(201).json({
      status: "success",
      message: "Consultation inquiry submitted successfully.",
      data: lead,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while submitting your request.",
    });
  }
}

export async function getLeads(req: Request, res: Response): Promise<void> {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      status: "success",
      results: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while retrieving leads.",
    });
  }
}

export async function updateLeadStatus(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const lead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!lead) {
      res.status(404).json({
        status: "fail",
        message: "Inquiry not found with that ID.",
      });
      return;
    }

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: { status },
    });

    res.status(200).json({
      status: "success",
      message: "Inquiry status updated successfully",
      data: updatedLead,
    });
  } catch (error) {
    console.error("Error updating lead status:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while updating status.",
    });
  }
}

export async function deleteLead(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const lead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!lead) {
      res.status(404).json({
        status: "fail",
        message: "Inquiry not found with that ID.",
      });
      return;
    }

    await prisma.lead.delete({
      where: { id },
    });

    res.status(200).json({
      status: "success",
      message: "Inquiry deleted successfully",
      data: null,
    });
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while deleting the inquiry.",
    });
  }
}
