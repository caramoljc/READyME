import { Check, Plus } from "lucide-react";

interface TechStackSelectorProps {
selected: string[];
onChange: (technologies: string[]) => void;
}

const technologies = [
"React",
"TypeScript",
"JavaScript",
"Node.js",
"Express",
"Python",
"Django",
"Flask",
"Java",
"Spring Boot",
"Tailwind CSS",
"Firebase",
"MongoDB",
"PostgreSQL",
"MySQL",
"Vite",
"Next.js",
"TensorFlow",
];

export default function TechStackSelector({
selected,
onChange,
}: TechStackSelectorProps) {
const toggleTechnology = (technology: string) => {
if (selected.includes(technology)) {
onChange(
selected.filter((item) => item !== technology)
);
} else {
onChange([...selected, technology]);
}
};

return ( <div className="technology-selector"> <div className="technology-stack">
{technologies.map((technology) => {
const active = selected.includes(technology);

      return (
        <button
          key={technology}
          type="button"
          onClick={() => toggleTechnology(technology)}
          className={`technology-chip ${
            active ? "is-selected" : ""
          }`}
          aria-pressed={active}
        >
          {active ? (
            <Check size={13} strokeWidth={2.5} />
          ) : (
            <Plus size={13} strokeWidth={2} />
          )}

          <span>{technology}</span>
        </button>
      );
    })}
  </div>

  <div className="technology-summary">
    <span className="technology-count">
      {selected.length} selected
    </span>

    {selected.length > 0 && (
      <button
        type="button"
        className="technology-clear"
        onClick={() => onChange([])}
      >
        Clear all
      </button>
    )}
  </div>
</div>

);
}
