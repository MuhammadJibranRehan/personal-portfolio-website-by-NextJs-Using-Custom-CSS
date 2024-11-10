"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./style.css";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="achievements-container achievements-container-sm">
      <div className="achievements-box achievements-box-sm">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="achievement-item achievement-item-sm">
            <h2 className="achievement-value">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="achievement-value"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="achievement-metric">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;