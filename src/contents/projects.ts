import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Carton - Moving Marketplace App",
    description:
      "Two-sided mobile marketplace with job lifecycle state management, mover discovery, in-app messaging, and booking workflows. Built secure Stripe subscription and payment flows with role-based authorization, plus a scalable Node.js/MongoDB backend with indexed queries, pagination, and 15+ core APIs.",
    technologies: ["React Native", "Node.js", "MongoDB", "Supabase", "Stripe"],
    demoLink: "https://saimsiddique1.github.io/carton-site/",
  },
  {
    title: "Sports Tracker - Full-Stack Analytics Platform",
    description:
      "Full-stack soccer analytics platform with Express routes integrating third-party APIs and normalizing inconsistent schemas for reliable frontend use. Built resilient pagination/error handling and led a 6-person Jira-managed Scrum workflow with feature-branch and pull request standards across three sprints.",
    technologies: ["Node.js", "Express", "React", "Jira"],
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
  {
    title: "DNA Database Engine (Incremental Rehashing Hash Table)",
    description:
      "In-memory key-value DNA database in C++ supporting linear, quadratic, and double hashing with incremental rehashing based on load and deletion thresholds. Implemented dual-table migration and function-pointer hashing configurability, validated with collision-heavy tests and 50K+ key benchmarks for stable O(1) average access.",
    technologies: ["C++", "Data Structures", "Hash Tables"],
  },

  // Add more projects as needed
];
