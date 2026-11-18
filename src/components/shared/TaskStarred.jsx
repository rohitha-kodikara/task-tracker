import { Star } from "lucide-react";

const VARIANTS = {
  // Icon-only square button (task row)
  icon: {
    button:
      "rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 active:translate-y-px",
    icon: "h-4 w-4",
  },
  // Label ekka pill button (filter / chip wage)
  pill: {
    button:
      "flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700 transition hover:bg-amber-100",
    icon: "h-3 w-3",
  },
};

export default function TaskStarred({
  starred = false,
  onClick,
  variant = "icon", // "icon" | "pill"
  label, // pill
  className = "",
  ...props
}) {
  const styles = VARIANTS[variant] ?? VARIANTS.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label ?? (starred ? "Unstar task" : "Star task")}
      aria-pressed={starred}
      className={`${styles.button} ${className}`}
      {...props}
    >
      <Star
        className={`${styles.icon} ${
          starred ? "fill-amber-400 text-amber-500" : ""
        }`}
      />
      {label}
    </button>
  );
}
