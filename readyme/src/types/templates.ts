
import type { ProjectData } from "./project";

export interface ReadmeTemplate {
  id: string;
  name: string;
  description: string;
  data: Partial<ProjectData>;
}

export const templates: ReadmeTemplate[] = [
  {
    id: "web-app",
    name: "Web Application",
    description: "For React, Vue, and other web projects.",
    data: {
      features: [
        "Responsive user interface",
        "Modern application architecture",
        "Easy setup and installation",
      ],
      installation: "npm install",
      usage: "npm run dev",
    },
  },
  {
    id: "api",
    name: "REST API",
    description: "For backend services and APIs.",
    data: {
      features: [
        "RESTful API endpoints",
        "Request validation",
        "Error handling",
        "API documentation",
      ],
      installation: "npm install",
      usage: "npm start",
    },
  },
  {
    id: "library",
    name: "Open Source Library",
    description: "For reusable packages and libraries.",
    data: {
      features: [
        "Reusable components",
        "Type-safe implementation",
        "Easy integration",
        "Open source contribution",
      ],
      installation: "npm install package-name",
      usage: "import { example } from 'package-name';",
    },
  },
  {
    id: "portfolio",
    name: "Portfolio Project",
    description: "For personal and academic projects.",
    data: {
      features: [
        "Clean and intuitive design",
        "Responsive layout",
        "Built with modern technologies",
        "Portfolio-ready application",
      ],
      installation: "npm install",
      usage: "npm run dev",
    },
  },
];