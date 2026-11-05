
const badgeConfig: Record<
  string,
  { color: string; logo: string; logoColor: string }
> = {
  React: {
    color: "61DAFB",
    logo: "react",
    logoColor: "black",
  },
  TypeScript: {
    color: "3178C6",
    logo: "typescript",
    logoColor: "white",
  },
  JavaScript: {
    color: "F7DF1E",
    logo: "javascript",
    logoColor: "black",
  },
  Python: {
    color: "3776AB",
    logo: "python",
    logoColor: "white",
  },
  "Node.js": {
    color: "339933",
    logo: "nodedotjs",
    logoColor: "white",
  },
  Firebase: {
    color: "DD2C00",
    logo: "firebase",
    logoColor: "white",
  },
  "Tailwind CSS": {
    color: "06B6D4",
    logo: "tailwindcss",
    logoColor: "white",
  },
  Vite: {
    color: "646CFF",
    logo: "vite",
    logoColor: "white",
  },
  Django: {
    color: "092E20",
    logo: "django",
    logoColor: "white",
  },
  PostgreSQL: {
    color: "4169E1",
    logo: "postgresql",
    logoColor: "white",
  },
  MongoDB: {
    color: "47A248",
    logo: "mongodb",
    logoColor: "white",
  },
  Java: {
    color: "ED8B00",
    logo: "openjdk",
    logoColor: "white",
  },
};

export function generateBadges(
  technologies: string[]
): string {
  return technologies
    .map((technology) => {
      const config = badgeConfig[technology];

      if (!config) return "";

      const label = encodeURIComponent(technology);

      return `![${technology}](https://img.shields.io/badge/${label}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=${config.logoColor})`;
    })
    .filter(Boolean)
    .join("\n");
}