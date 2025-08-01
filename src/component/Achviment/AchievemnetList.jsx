import AchievementItem from "./AchivmentItem";

const AchievementList = ({ achievements }) => (
  <div className="achievement-list">
    {achievements.map((item, idx) => (
      <AchievementItem
        key={idx}
        icon={item.icon}
        value={item.value}
        label={item.label}
        desc={item.desc}
      />
    ))}
  </div>
);

export default AchievementList;
