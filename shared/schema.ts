import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const deals = pgTable("deals", {
  id: serial("id").primaryKey(),
  seller: text("seller").notNull(),
  price: integer("price").notNull(),
  delivery_days: integer("delivery_days").notNull(),
  contact: text("contact").notNull(),
  rating: text("rating"),
  reviews: integer("reviews"),
  product: text("product").notNull(),
  image: text("image"),
});

export const emails = pgTable("emails", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  sent: boolean("sent").default(false),
  created_at: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDealSchema = createInsertSchema(deals).pick({
  seller: true,
  price: true,
  delivery_days: true,
  contact: true,
  rating: true,
  reviews: true,
  product: true,
  image: true,
});

export const insertEmailSchema = createInsertSchema(emails).pick({
  email: true,
  subject: true,
  content: true,
  sent: true,
  created_at: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDeal = z.infer<typeof insertDealSchema>;
export type Deal = typeof deals.$inferSelect;

export type InsertEmail = z.infer<typeof insertEmailSchema>;
export type Email = typeof emails.$inferSelect;
