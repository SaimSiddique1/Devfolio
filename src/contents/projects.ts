import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Carton - Moving Marketplace App",
    description:
      "Two-sided marketplace connecting customers with verified movers. Built end-to-end with job posting, discovery, in-app chat, booking, and Stripe-powered payments. Backend manages job lifecycle state, role-based access, and real-time notifications with room for pricing models, ratings, and verification.",
    technologies: ["React Native", "Node.js", "MongoDB", "Supabase", "Stripe"],
    demoLink: "https://saimsiddique1.github.io/carton-site/",
  },
  {
    title: "Debug Dungeon - Gamified Coding Platform",
    description:
      "A coding game where users defeat enemies by fixing broken code inside a Monaco-powered editor. Real-time feedback, adaptive difficulty, progression, and persistent player state make it feel like a production-grade learning platform.",
    technologies: ["React", "JavaScript", "Monaco Editor"],
    demoLink: "https://debug-dungeon.vercel.app/",
  },
  {
    title: "HopHacks 2025 - Personal Health Time Machine",
    description:
      "AI-powered health analytics app using wearable data to predict future risk profiles. Built in 36 hours with a four-person agile team and placed top 10 out of 100+ teams.",
    technologies: ["React Native", "Expo", "Vercel", "Azure"],
  },
  {
    title: "Real-World Elevator Control System",
    description:
      "Multi-elevator scheduling simulation focused on prioritization, emergency handling, and real-time behavior. Uses doubly linked lists to manage concurrent requests and includes Linux-based unit testing.",
    technologies: ["C++", "Linux", "Unit Testing"],
  },

  // Add more projects as needed
];
