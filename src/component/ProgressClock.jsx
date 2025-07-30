import "./ProgressClock.css";

import React, { useEffect, useState } from "react";

const ProgressClock = ({ countdown, isRunning, setIsRunning }) => {
  const handleStartPauseBtn = () => {
    setIsRunning((pre) => {
      return pre ? false : true;
    });
  };

  return (
    <div className="progress-clock">
      <div className="first-circle">
        <div className="second-circle">
          <div className="third-circle">
            <div className="top-circle">
              <div>{`${countdown.min}:${countdown.sec}`}</div>
              <p onClick={handleStartPauseBtn}>{`${
                isRunning ? "PAUSE" : "START"
              }`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressClock;
