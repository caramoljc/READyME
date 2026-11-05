import { useState } from "react";
import {
FileCode,
Layers,
Globe,
UserRound,
Check,
} from "lucide-react";
import { templates } from "../types/templates";

interface TemplateSelectorProps {
onSelect: (id: string) => void;
}

const icons = {
"web-app": Globe,
api: FileCode,
library: Layers,
portfolio: UserRound,
};

export default function TemplateSelector({
onSelect,
}: TemplateSelectorProps) {
const [selectedTemplate, setSelectedTemplate] =
useState<string | null>(null);

const handleSelect = (id: string) => {
setSelectedTemplate(id);
onSelect(id);
};

return ( <div className="template-grid">
{templates.map((template) => {
const Icon =
icons[template.id as keyof typeof icons];

    const isSelected = selectedTemplate === template.id;

    return (
      <button
        key={template.id}
        type="button"
        onClick={() => handleSelect(template.id)}
        className={`template-option ${
          isSelected ? "is-selected" : ""
        }`}
        aria-pressed={isSelected}
      >
        <div className="flex items-center justify-between">
          <span className="template-option-icon">
            <Icon size={16} strokeWidth={1.8} />
          </span>

          {isSelected && (
            <span className="template-selected-check">
              <Check size={13} strokeWidth={2.5} />
            </span>
          )}
        </div>

        <p className="template-option-title">
          {template.name}
        </p>

        <p className="template-option-description">
          {template.description}
        </p>
      </button>
    );
  })}
</div>

);
}
