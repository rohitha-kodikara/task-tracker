import { priorityFilters } from "../../data/data";
import PriorityChip from "./PriorityChip";

const PriorityOptions = ({ variant, className, value, onChange }) => {
  if (variant === "dropdown") {
    return (
      <select
        value={value}
        onChange={onChange}
        className={`cursor-pointer border border-slate-200 bg-white/90 px-2 py-1 font-semibold shadow-sm transition hover:brightness-95 ${className}`}
      >
        {priorityFilters.map((priority) => (
          <option
            key={priority.label}
            value={priority.label}
            className={`font-semibold ${priority.textColor}`}
          >
            {priority.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <PriorityChip
        label="All"
        idle="bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
        on="bg-slate-700 text-white border-slate-700 shadow-sm"
        isSelected={value === "all"}
        onClick={() => onChange({ target: { value: "all" } })}
      />

      {priorityFilters.map((filter) => (
        <PriorityChip
          priority={filter.label}
          onClick={() => onChange({ target: { value: filter.label } })}
          key={filter.label}
          {...filter}
        />
      ))}
    </div>
  );
};

export default PriorityOptions;
