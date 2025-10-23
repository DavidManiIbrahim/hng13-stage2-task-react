import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  description: z.string().max(2000, "Description must be less than 2000 characters"),
  priority: z.enum(["low", "medium", "high"]),
  status: z.enum(["open", "in-progress", "resolved", "closed"]),
  assignee: z.string().email("Invalid email address").optional().or(z.literal("")),
});

export type TicketPriority = "low" | "medium" | "high";
export type TicketStatus = "open" | "in-progress" | "resolved" | "closed";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignee?: string;
  createdAt: number;
  updatedAt: number;
}

const TICKETS_KEY = "ticket_app_tickets";

export const tickets = {
  getAll: (): Ticket[] => {
    const ticketsStr = localStorage.getItem(TICKETS_KEY);
    if (!ticketsStr) return [];
    try {
      return JSON.parse(ticketsStr);
    } catch {
      return [];
    }
  },

  getById: (id: string): Ticket | null => {
    const allTickets = tickets.getAll();
    return allTickets.find((t) => t.id === id) || null;
  },

  create: (data: Omit<Ticket, "id" | "createdAt" | "updatedAt">): Ticket => {
    const newTicket: Ticket = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const allTickets = tickets.getAll();
    allTickets.push(newTicket);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(allTickets));
    return newTicket;
  },

  update: (id: string, data: Partial<Omit<Ticket, "id" | "createdAt" | "updatedAt">>): Ticket | null => {
    const allTickets = tickets.getAll();
    const index = allTickets.findIndex((t) => t.id === id);
    
    if (index === -1) return null;

    const currentTicket = allTickets[index];

    // Validate status transition
    if (data.status && currentTicket.status === "closed" && data.status === "in-progress") {
      throw new Error("Cannot move a closed ticket to in-progress. Please reopen it first.");
    }

    const updatedTicket: Ticket = {
      ...currentTicket,
      ...data,
      updatedAt: Date.now(),
    };

    allTickets[index] = updatedTicket;
    localStorage.setItem(TICKETS_KEY, JSON.stringify(allTickets));
    return updatedTicket;
  },

  delete: (id: string): boolean => {
    const allTickets = tickets.getAll();
    const filtered = allTickets.filter((t) => t.id !== id);
    
    if (filtered.length === allTickets.length) return false;
    
    localStorage.setItem(TICKETS_KEY, JSON.stringify(filtered));
    return true;
  },

  getStats: () => {
    const allTickets = tickets.getAll();
    return {
      total: allTickets.length,
      open: allTickets.filter((t) => t.status === "open").length,
      inProgress: allTickets.filter((t) => t.status === "in-progress").length,
      resolved: allTickets.filter((t) => t.status === "resolved").length,
      closed: allTickets.filter((t) => t.status === "closed").length,
      byPriority: {
        low: allTickets.filter((t) => t.priority === "low").length,
        medium: allTickets.filter((t) => t.priority === "medium").length,
        high: allTickets.filter((t) => t.priority === "high").length,
      },
    };
  },
};
