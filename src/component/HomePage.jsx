import Logo from "../svg components/Logo";
import "./HomePage.css";

import React from "react";
import Tab from "./Tab";
import ProgressClock from "./ProgressClock";
import SettingIcon from "../svg components/SettingIcon";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="logo">
        <Logo />
      </div>
      <div className="tab-component">
        <Tab />
      </div>
      <div className="progress-clock-component">
        <ProgressClock />
      </div>
      <div className="setting-icon">
        <SettingIcon></SettingIcon>
      </div>
    </div>
  );
};

export default HomePage;
