import { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TemplateSelector from "./components/TemplateSelector";
import { templates } from "./types/templates";
import {
  FileText,
  GitBranch,
  Sparkles,
  Code2,
  Check,
  Plus,
  Sun,
  Moon,
} from "lucide-react";

import ProjectForm from "./components/ProjectForm";
import TechStackSelector from "./components/TechStackSelector";
import MarkdownPreview from "./components/MarkdownPreview";
import ExportButton from "./components/ExportButton";

import {
  initialProjectData,
  type ProjectData,
} from "./types/project";

import { generateMarkdown } from "./utils/markdownGenerator";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

function App() {
  const [project, setProject] =
    useLocalStorage<ProjectData>(
      "readyme-draft",
      initialProjectData
    );

  const [theme, setTheme] = useLocalStorage<Theme>(
    "readyme-theme",
    getSystemTheme()
  );

  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0a100f" : "#f5faf8");
  }, [theme]);

  const markdown = generateMarkdown(project);

  const addFeature = () => {
    const feature = newFeature.trim();

    if (!feature) return;

    setProject((current) => ({
      ...current,
      features: [...current.features, feature],
    }));

    setNewFeature("");
  };

  const removeFeature = (index: number) => {
    setProject((current) => ({
      ...current,
      features: current.features.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const applyTemplate = (templateId: string) => {
    const template = templates.find(
      (item) => item.id === templateId
    );

    if (!template) return;

    setProject((current) => ({
      ...current,
      ...template.data,
    }));
  };

  const toggleTheme = () =>
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );

  return (
    <div className="app-bg">
      {/* Header */}
      <header className="app-header">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="logo-box">
              <FileText size={19} strokeWidth={2.5} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="t-strong text-[15px] font-bold tracking-tight">
                  READyME
                </h1>

                <span className="pill pill-accent hidden !px-2 !py-0.5 !text-[10px] sm:inline-flex">
                  BETA
                </span>
              </div>

              <p className="t-subtle text-[11px]">
                Documentation made simple
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="pill hidden sm:inline-flex">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              Live editor
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-5 pb-10 pt-10 lg:px-8">
        {/* Hero */}
        <div className="mb-10">
          <div className="pill pill-accent mb-4">
            <Sparkles size={13} />
            Developer Toolkit
          </div>

          <h2 className="t-strong max-w-3xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Build your README.
            <span className="gradient-text block">
              Showcase your work.
            </span>
          </h2>

          <p className="t-muted mt-4 max-w-xl text-sm leading-6 sm:text-[15px]">
            Create professional GitHub documentation without
            writing Markdown by hand.
          </p>
        </div>

        {/* Main workspace */}
        <div className="grid items-start gap-6 lg:grid-cols-[430px_minmax(0,1fr)]">
          {/* Editor */}
          <section className="workspace-card">
            <div className="workspace-header">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="section-icon">
                    <Code2 size={16} />
                  </div>

                  <h3 className="t-strong font-semibold">
                    Project Configuration
                  </h3>
                </div>

                <p className="t-subtle mt-1.5 text-xs">
                  Configure your project details.
                </p>
              </div>
            </div>

            <div className="space-y-7 p-5 sm:p-6">
              {/* Templates */}
              <div>
                <div className="mb-3">
                  <p className="section-label">
                    Start with a template
                  </p>

                  <p className="t-subtle mt-1 text-[11px]">
                    Choose a starting point for your README.
                  </p>
                </div>

                <TemplateSelector onSelect={applyTemplate} />
              </div>

              <div className="section-divider" />

              {/* Project details */}
              <ProjectForm
                project={project}
                onChange={setProject}
              />

              <div className="section-divider" />

              {/* Technologies */}
              <div>
                <div className="mb-3">
                  <label className="form-label mb-1">
                    Technology Stack
                  </label>

                  <p className="t-subtle text-[11px]">
                    Select the technologies used in your project.
                  </p>
                </div>

                <TechStackSelector
                  selected={project.technologies}
                  onChange={(technologies) =>
                    setProject((current) => ({
                      ...current,
                      technologies,
                    }))
                  }
                />
              </div>

              <div className="section-divider" />

              {/* Features */}
              <div>
                <div className="mb-3">
                  <label className="form-label mb-1">
                    Project Features
                  </label>

                  <p className="t-subtle text-[11px]">
                    Highlight the main things your project can do.
                  </p>
                </div>

                {project.features.length > 0 && (
                  <div className="mb-3 space-y-1.5">
                    {project.features.map((feature, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="feature-item group"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <div className="feature-check">
                            <Check size={12} strokeWidth={3} />
                          </div>

                          <span className="t-soft truncate text-sm">
                            {feature}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="feature-remove"
                          aria-label={`Remove ${feature}`}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="input-group">
                  <input
                    placeholder="Add a feature..."
                    value={newFeature}
                    onChange={(e) =>
                      setNewFeature(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addFeature();
                      }
                    }}
                  />

                  <button
                    type="button"
                    onClick={addFeature}
                    className="add-button"
                  >
                    <Plus size={15} strokeWidth={2.5} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Preview */}
          <section className="workspace-card min-w-0">
            <div className="workspace-header">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="section-icon">
                    <GitBranch size={16} />
                  </div>

                  <h3 className="t-strong font-semibold">
                    README Preview
                  </h3>
                </div>

                <p className="t-subtle mt-1.5 text-xs">
                  Your generated documentation.
                </p>
              </div>

              <ExportButton markdown={markdown} />
            </div>

            <div className="preview-toolbar">
              <div className="flex items-center gap-1.5">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>

              <span className="t-subtle text-[10px] font-medium uppercase tracking-wider">
                README.md
              </span>
            </div>

            <div className="preview-body">
              <MarkdownPreview markdown={markdown} />
            </div>
          </section>
        </div>

        <footer className="py-10 text-center">
          <p className="t-subtle text-xs">
            READyME · Built with React + TypeScript
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
