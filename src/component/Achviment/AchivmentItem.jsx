import React from "react";
import { FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa6";
import CountUp from "react-countup";

const iconMap = {
  FaUsers: <FaUsers className="achievement-icon" />,
  FaCalendarAlt: <FaCameraRetro className="achievement-icon" />,
  FaTrophy: <FaTrophy className="achievement-icon" />,
};

const AchievementItem = ({ icon, value, label, desc }) => {
  const number = parseInt(value);
  const plus = value.includes("+");
  return (
    <div className="achievement-card">
      <div className="achievement-icon-wrapper">{iconMap[icon]}</div>
      <div className="achievement-value">
        <CountUp
          end={number}
          duration={2}
          enableScrollSpy
        />
        {plus && "+"}
      </div>
      <div className="achievement-label">{label}</div>
      <div className="achievement-desc">{desc}</div>
    </div>
  );
};

export default AchievementItem;
