import { stats } from "../data/data";
import Statistic from "./Statistic";

const StatisticsList = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map(({ label, value, Icon, tint, icon }) => (
        <Statistic
          key={label}
          label={label}
          value={value}
          Icon={Icon}
          tint={tint}
          icon={icon}
        />
      ))}
    </div>
  );
};

export default StatisticsList;
