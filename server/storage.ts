import { users, type User, type InsertUser, deals, type Deal, type InsertDeal, emails, type Email, type InsertEmail } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDeals(): Promise<Deal[]>;
  getDeal(id: number): Promise<Deal | undefined>;
  createDeal(deal: InsertDeal): Promise<Deal>;
  
  createEmail(email: InsertEmail): Promise<Email>;
  getEmails(): Promise<Email[]>;
  updateEmailSent(id: number, sent: boolean): Promise<Email>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private dealsData: Map<number, Deal>;
  private emailsData: Map<number, Email>;
  private userCurrentId: number;
  private dealCurrentId: number;
  private emailCurrentId: number;

  constructor() {
    this.users = new Map();
    this.dealsData = new Map();
    this.emailsData = new Map();
    this.userCurrentId = 1;
    this.dealCurrentId = 1;
    this.emailCurrentId = 1;
    
    // Initialize with mock data for deals
    this.createDeal({
      seller: "SneakerZone",
      price: 9500,
      delivery_days: 2,
      contact: "sneakerzone@email.com",
      rating: "4.8",
      reviews: 350,
      product: "Nike Air Max '97 - Limited Edition",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    });
    
    this.createDeal({
      seller: "HypeHub",
      price: 8999,
      delivery_days: 4,
      contact: "hypehub@email.com",
      rating: "4.5",
      reviews: 210,
      product: "Nike Air Max '97 - Classic Blue",
      image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    });
    
    this.createDeal({
      seller: "KicksExpress",
      price: 10499,
      delivery_days: 1,
      contact: "kicksexpress@email.com",
      rating: "4.7",
      reviews: 180,
      product: "Nike Air Max '97 - Premium Edition",
      image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getDeals(): Promise<Deal[]> {
    return Array.from(this.dealsData.values());
  }
  
  async getDeal(id: number): Promise<Deal | undefined> {
    return this.dealsData.get(id);
  }
  
  async createDeal(insertDeal: InsertDeal): Promise<Deal> {
    const id = this.dealCurrentId++;
    const deal: Deal = { ...insertDeal, id };
    this.dealsData.set(id, deal);
    return deal;
  }
  
  async createEmail(insertEmail: InsertEmail): Promise<Email> {
    const id = this.emailCurrentId++;
    const email: Email = { ...insertEmail, id };
    this.emailsData.set(id, email);
    return email;
  }
  
  async getEmails(): Promise<Email[]> {
    return Array.from(this.emailsData.values());
  }
  
  async updateEmailSent(id: number, sent: boolean): Promise<Email> {
    const email = this.emailsData.get(id);
    if (!email) {
      throw new Error(`Email with id ${id} not found`);
    }
    
    const updatedEmail = { ...email, sent };
    this.emailsData.set(id, updatedEmail);
    return updatedEmail;
  }
}

export const storage = new MemStorage();
