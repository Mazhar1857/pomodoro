import Logo from "../svg components/Logo";
import "./HomePage.css";

import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import ProgressClock from "./ProgressClock";
import SettingIcon from "../svg components/SettingIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const timer = useSelector((store) => store.timer);
  const [isRunning, setIsRunning] = useState(false);
  const [timerMode, setTimerMode] = useState("pomodoro");
  const [countdown, setCountdown] = useState({ min: "00", sec: "00" });
  const [round, setRound] = useState(timer.pomodoro.round);
  const [totalSec, setTotalSec] = useState(timer.pomodoro.totalSecond);
  const [progress, setProgress] = useState(totalSec);
  const [progressPercent, setProgressPercent] = useState(100);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCountdown((pre) => {
          if (pre.min === 0 && pre.sec === 0) {
            clearInterval(interval);
            if (timerMode === "pomodoro" && round > 0) {
              setTimerMode("shortBreak");
            } else if (timerMode === "shortBreak") {
              setTimerMode("pomodoro");
            } else if (timerMode === "pomodoro" && round === 0) {
              setTimerMode("longBreak");
            } else if (timerMode === "longBreak") {
              setTimerMode("pomodoro");
            }
            return pre;
          }

          if (pre.sec === 0) {
            return { min: pre.min - 1, sec: 59 };
          } else {
            return { min: pre.min, sec: pre.sec - 1 };
          }
        });
        setProgress((pre) => pre - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    setProgressPercent((progress / totalSec) * 100);
  }, [progress, totalSec]);

  useEffect(() => {
    switch (timerMode) {
      case "pomodoro":
        setCountdown({
          min: timer.pomodoro.min,
          sec: timer.pomodoro.sec,
        });
        break;
      case "shortBreak":
        setRound((pre) => pre - 1);
        setCountdown({
          min: timer.shortBreak.min,
          sec: timer.shortBreak.sec,
        });
        break;
      case "longBreak":
        setRound(timer.pomodoro.round);
        setCountdown({
          min: timer.longBreak.min,
          sec: timer.longBreak.sec,
        });
    }

    setTotalSec(() => {
      switch (timerMode) {
        case "pomodoro":
          return timer.pomodoro.totalSecond;
        case "shortBreak":
          return timer.shortBreak.totalSecond;
        case "longBreak":
          return timer.longBreak.totalSecond;
      }
    });

    setProgress(() => {
      switch (timerMode) {
        case "pomodoro":
          return timer.pomodoro.totalSecond;
        case "shortBreak":
          return timer.shortBreak.totalSecond;
        case "longBreak":
          return timer.longBreak.totalSecond;
      }
    });

    console.log(timerMode, countdown);
  }, [timerMode]);

  const handleNavigation = () => {
    navigate("/setting");
  };

  return (
    <div className="home-page">
      <div className="logo">
        <Logo />
      </div>
      <div className="tab-component">
        <Tab timerMode={timerMode} />
      </div>
      <div className="progress-clock-component">
        <ProgressClock
          countdown={countdown}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          progressPercent={progressPercent}
        />
      </div>
      <div className="setting-icon" onClick={handleNavigation}>
        <SettingIcon />
      </div>
    </div>
  );
};

export default HomePage;
