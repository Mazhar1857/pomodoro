import "./ProgressClock.css";

import React from "react";

const ProgressClock = () => {
  return (
    <div className="progress-clock">
      <div className="first-circle">
        <div className="second-circle">
          <div className="third-circle">
            <div className="top-circle">
              <div>17:59</div>
              <p>PAUSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressClock;
