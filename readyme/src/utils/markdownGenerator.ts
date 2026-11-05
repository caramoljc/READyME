import type { ProjectData } from "../types/project";
import { generateBadges } from "./badgeGenerator";

export function generateMarkdown(
  project: ProjectData
): string {
  const badges = generateBadges(project.technologies);

  const technologies = project.technologies
    .map((tech) => `\`${tech}\``)
    .join(" ");

  const features = project.features
    .map((feature) => `- ${feature}`)
    .join("\n");

  return `# ${project.name}

${project.description}

${badges}

## Tech Stack

${technologies}

## Features

${features}

## Installation

\`\`\`bash
${project.installation}
\`\`\`

## Usage

\`\`\`bash
${project.usage}
\`\`\`

## Repository

[GitHub Repository](${project.githubUrl})

## Author

${project.author}
`;
}