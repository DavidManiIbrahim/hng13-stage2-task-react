import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Session {
  token: string;
  user: User;
  expiresAt: number;
}

const SESSION_KEY = "ticket_app_session";
const SESSION_DURATION = 60 * 60 * 1000; // 1 hour

export const auth = {
  login: (email: string, password: string): User => {
    // Mock authentication - in production, this would call an API
    const user: User = {
      id: crypto.randomUUID(),
      email,
      name: email.split("@")[0],
    };

    const session: Session = {
      token: crypto.randomUUID(),
      user,
      expiresAt: Date.now() + SESSION_DURATION,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return user;
  },

  register: (email: string, password: string, name: string): User => {
    // Mock registration - in production, this would call an API
    const user: User = {
      id: crypto.randomUUID(),
      email,
      name,
    };

    const session: Session = {
      token: crypto.randomUUID(),
      user,
      expiresAt: Date.now() + SESSION_DURATION,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return user;
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  getSession: (): Session | null => {
    const sessionStr = localStorage.getItem(SESSION_KEY);
    if (!sessionStr) return null;

    try {
      const session: Session = JSON.parse(sessionStr);
      if (Date.now() > session.expiresAt) {
        auth.logout();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    return auth.getSession() !== null;
  },

  getTimeUntilExpiry: (): number => {
    const session = auth.getSession();
    if (!session) return 0;
    return Math.max(0, session.expiresAt - Date.now());
  },
};
