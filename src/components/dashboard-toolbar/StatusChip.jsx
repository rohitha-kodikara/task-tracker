const StatusChip = ({ label, active, idle, on }) => {
  return (
    <button
      key={label}
      className={`rounded-full border px-3 py-1 transition ${active ? on : idle}`}
    >
      {label}
    </button>
  );
};

export default StatusChip;
