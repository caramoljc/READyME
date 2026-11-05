
import type { ProjectData } from "../types/project";

interface ProjectFormProps {
  project: ProjectData;
  onChange: (project: ProjectData) => void;
}

export default function ProjectForm({
  project,
  onChange,
}: ProjectFormProps) {
  const updateField = (
    field: keyof ProjectData,
    value: string
  ) => {
    onChange({
      ...project,
      [field]: value,
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="form-label">Project Name</label>
        <input
          className="form-input"
          value={project.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
          placeholder="My Awesome Project"
        />
      </div>

      <div>
        <label className="form-label">Description</label>
        <textarea
          className="form-input min-h-24 resize-y"
          value={project.description}
          onChange={(e) =>
            updateField("description", e.target.value)
          }
          placeholder="What does your project do?"
        />
      </div>

      <div>
        <label className="form-label">Author</label>
        <input
          className="form-input"
          value={project.author}
          onChange={(e) =>
            updateField("author", e.target.value)
          }
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="form-label">
          GitHub Repository URL
        </label>
        <input
          className="form-input"
          value={project.githubUrl}
          onChange={(e) =>
            updateField("githubUrl", e.target.value)
          }
          placeholder="https://github.com/username/project"
        />
      </div>

      <div>
        <label className="form-label">
          Installation Command
        </label>
        <input
          className="form-input font-mono text-sm"
          value={project.installation}
          onChange={(e) =>
            updateField("installation", e.target.value)
          }
          placeholder="npm install"
        />
      </div>

      <div>
        <label className="form-label">
          Run Command
        </label>
        <input
          className="form-input font-mono text-sm"
          value={project.usage}
          onChange={(e) =>
            updateField("usage", e.target.value)
          }
          placeholder="npm run dev"
        />
      </div>
    </div>
  );
}