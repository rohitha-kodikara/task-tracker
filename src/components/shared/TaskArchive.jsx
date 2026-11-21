import { Archive } from "lucide-react";

const VARIANTS = {
  // Icon-only square button (task row)
  icon: {
    button: "",
    icon: "h-4 w-4",
  },
  // Label ekka pill button (filter / chip wage)
  pill: {
    button:
      "flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700 transition hover:bg-amber-100",
    icon: "h-3 w-3",
  },
};

const TaskArchive = ({
  children,
  className,
  onClick,
  archived,
  label,
  variant = "icon",
}) => {
  const styles = VARIANTS[variant] ?? VARIANTS.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label ?? (archived ? "Unarchive task" : "Archive task")}
      aria-pressed={archived}
      className={`${styles.button} ${className}`}
    >
      <Archive className={styles.icon} />

      {label ?? children}
    </button>
  );
};

export default TaskArchive;
