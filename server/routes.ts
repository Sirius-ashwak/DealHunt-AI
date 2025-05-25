import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Get all deals
  app.get("/api/deals", async (req: Request, res: Response) => {
    try {
      const deals = await storage.getDeals();
      res.json(deals);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch deals" });
    }
  });
  
  // Get specific deal
  app.get("/api/deals/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid deal ID" });
      }
      
      const deal = await storage.getDeal(id);
      if (!deal) {
        return res.status(404).json({ error: "Deal not found" });
      }
      
      res.json(deal);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch deal" });
    }
  });
  
  // Send email with deals
  app.post("/api/send-email", async (req: Request, res: Response) => {
    try {
      const { email, dealIds } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      
      // Get deals
      const allDeals = await storage.getDeals();
      
      // If specific deal IDs are provided, filter deals
      const selectedDeals = dealIds 
        ? allDeals.filter(deal => dealIds.includes(deal.id))
        : allDeals.slice(0, 3); // Default to top 3
      
      if (selectedDeals.length === 0) {
        return res.status(400).json({ error: "No valid deals found" });
      }
      
      // Create email content
      const subject = "🎉 Top Sneaker Deals Just for You!";
      const content = `
Hi there,

Here are the top ${selectedDeals.length} sneaker deals we found based on your preferences:

${selectedDeals.map((deal, index) => 
  `${index === 0 ? '1️⃣' : index === 1 ? '2️⃣' : '3️⃣'} ${deal.seller} – ₹${deal.price} – ${deal.delivery_days} Day Delivery`
).join('\n')}

Happy shopping!
– DealHunt AI 🤖
      `;
      
      // In a real implementation, we would send an actual email here
      // For this demo, we'll just store it in our database
      
      try {
        const emailData = insertEmailSchema.parse({
          email,
          subject,
          content,
          sent: true,
          created_at: new Date().toISOString()
        });
        
        const savedEmail = await storage.createEmail(emailData);
        
        res.json({ 
          success: true, 
          message: "Email sent successfully",
          email: savedEmail
        });
        
      } catch (validationError: any) {
        const readableError = fromZodError(validationError);
        return res.status(400).json({ error: readableError.message });
      }
      
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });
  
  // Get all sent emails (for demo purposes)
  app.get("/api/emails", async (req: Request, res: Response) => {
    try {
      const emails = await storage.getEmails();
      res.json(emails);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch emails" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
