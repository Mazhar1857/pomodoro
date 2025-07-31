import React from "react";
import "./Tab.css";

const Tab = ({ timerMode }) => {
  return (
    <div className="tab">
      <div
        className={`btn ${timerMode === "pomodoro" ? "active" : "inactive"}`}
      >
        pomodoro
      </div>
      <div
        className={`short-break btn ${
          timerMode === "shortBreak" ? "active" : "inactive"
        }`}
      >
        short break
      </div>
      <div
        className={`long-break btn ${
          timerMode === "longBreak" ? "active" : "inactive"
        }`}
      >
        long break
      </div>
    </div>
  );
};

export default Tab;
