import Logo from "../svg components/Logo";
import "./HomePage.css";

import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import ProgressClock from "./ProgressClock";
import SettingIcon from "../svg components/SettingIcon";
import { useDispatch, useSelector } from "react-redux";
import { timerAction } from "../store/timerSlice";

const HomePage = ({ setActivePage }) => {
  const timer = useSelector((store) => store.timer);
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false);
  const [timerMode, setTimerMode] = useState("pomodoro");
  const [countdown, setCountdown] = useState({ min: "00", sec: "00" });
  const [round, setRound] = useState(timer.round);
  const [totalSec, setTotalSec] = useState(timer.pomodoro.totalSecond);
  const [progress, setProgress] = useState(100);

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
              dispatch(timerAction.setRounds(timer.round));
              setRound(timer.round);
            }
            return pre;
          }

          if (pre.sec === 0) {
            return { min: pre.min - 1, sec: 59 };
          } else {
            return { min: pre.min, sec: pre.sec - 1 };
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, timerMode]);

  useEffect(() => {
    switch (timerMode) {
      case "pomodoro":
        setCountdown({
          min: timer.pomodoro.min,
          sec: timer.pomodoro.sec,
        });
        setProgress(100);
        break;
      case "shortBreak":
        setRound((pre) => pre - 1);
        setCountdown({
          min: timer.shortBreak.min,
          sec: timer.shortBreak.sec,
        });
        setProgress(100);
        break;
      case "longBreak":
        setRound(timer.pomodoro.round);
        setCountdown({
          min: timer.longBreak.min,
          sec: timer.longBreak.sec,
        });
        setProgress(100);
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

    // setProgress(() => {
    //   switch (timerMode) {
    //     case "pomodoro":
    //       return timer.pomodoro.totalSecond;
    //     case "shortBreak":
    //       return timer.shortBreak.totalSecond;
    //     case "longBreak":
    //       return timer.longBreak.totalSecond;
    //   }
    // });
  }, [timerMode, timer]);

  useEffect(() => {
    if (isRunning) {
      const progressCountDown = setInterval(() => {
        setProgress((pre) => pre - 1 / 20);
      }, (totalSec * 1000) / 100 / 20);

      return () => clearInterval(progressCountDown);
    }
  }, [totalSec, isRunning]);

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
          progressPercent={progress}
        />
      </div>
      <div className="setting-icon" onClick={() => setActivePage("setting")}>
        <SettingIcon />
      </div>
    </div>
  );
};

export default HomePage;
