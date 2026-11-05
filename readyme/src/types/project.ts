
export interface ProjectData {
  name: string;
  description: string;
  author: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  installation: string;
  usage: string;
}

export const initialProjectData: ProjectData = {
  name: "My Awesome Project",
  description: "A brief description of what this project does.",
  author: "Your Name",
  githubUrl: "https://github.com/username/project",
  technologies: ["React", "TypeScript"],
  features: [
    "Easy to use",
    "Responsive design",
    "Modern interface",
  ],
  installation: "npm install",
  usage: "npm run dev",
};