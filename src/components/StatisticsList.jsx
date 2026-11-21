import Statistic from "./Statistic";

const StatisticsList = ({ stats, statisticValues }) => {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map(({ valueKey, ...statistic }) => (
        <Statistic
          key={statistic.label}
          {...statistic}
          value={statisticValues[valueKey] ?? 0}
        />
      ))}
      s
    </div>
  );
};

export default StatisticsList;
