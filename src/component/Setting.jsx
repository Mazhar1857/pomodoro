import React, { useEffect, useState } from "react";
import "./Setting.css";
import CloseIcon from "../svg components/CloseIcon";
import CheckIcon from "../svg components/CheckIcon";
import UpArrowIcon from "../svg components/UpArrowIcon";
import DownArrowIcon from "../svg components/DownArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { themeSliceAction } from "../store/themeSlice";
import fontSlice, { fontSliceAction } from "../store/fontSlice";
import { timerAction } from "../store/timerSlice";

const Setting = ({ setActivePage }) => {
  const times = useSelector((store) => store.timer);
  const theme = useSelector((store) => store.theme);
  const font = useSelector((store) => store.font);
  const dispatch = useDispatch();
  const [newFont, setNewFont] = useState(font);
  const [color, setColor] = useState(theme);
  const [newTimes, setTimes] = useState(times);

  const handleFont = (font) => {
    setNewFont(() => {
      return { font: font, active: font };
    });
  };

  const handleTheme = (color) => {
    setColor(() => {
      return { color: color, active: color };
    });
  };

  const addTimes = (e) => {
    if (e.target.value > 0) {
      const min = parseInt(e.target.value);
      const sec = parseInt((e.target.value - Math.trunc(e.target.value)) * 60);

      setTimes((pre) => {
        return {
          ...pre,
          [e.target.name]: {
            min: min,
            sec: sec,
            totalSecond: min * 60 + sec,
          },
        };
      });
    }
  };

  const handleApplyEffect = () => {
    dispatch(themeSliceAction.toggleTheme(color.color));
    dispatch(fontSliceAction.toggleFont(newFont.font));
    dispatch(timerAction.addTime(newTimes));
  };

  const handleActivePage = () => {
    setNewFont(font);
    setColor(theme);
    setActivePage("home");
  };

  return (
    <div className="settings">
      <div className="setting">
        <h1>Settings</h1>
        <div className="close" onClick={handleActivePage}>
          <CloseIcon />
        </div>
      </div>
      <div className="hr first"></div>
      <div className="time">
        <h2>TIME (MINUTES)</h2>
        <div>
          <div>
            <p>pomodoro</p>
            <div>
              <input type="text" name="pomodoro" onChange={addTimes} />
              <div className="arrow-btn">
                <UpArrowIcon />
                <DownArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <p>short break</p>
            <div>
              <input type="text" name="shortBreak" onChange={addTimes} />
              <div className="arrow-btn">
                <UpArrowIcon />
                <DownArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <p>long break</p>
            <div>
              <input type="text" name="longBreak" onChange={addTimes} />
              <div className="arrow-btn">
                <UpArrowIcon />
                <DownArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="font">
        <h2>FONT</h2>
        <div>
          <div
            className={`${newFont.active === "kumbh sans" ? "active" : ""}`}
            onClick={() => handleFont("kumbh sans")}
          >
            Aa
          </div>
          <div
            className={`${newFont.active === "roboto" ? "active" : ""}`}
            onClick={() => handleFont("roboto")}
          >
            Aa
          </div>
          <div
            className={`${newFont.active === "space mono" ? "active" : ""}`}
            onClick={() => handleFont("space mono")}
          >
            Aa
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="color">
        <h2>COLOR</h2>
        <div>
          <div
            className={`${color.active === "red" ? "active" : "inactive"}`}
            onClick={() => handleTheme("red")}
          >
            <CheckIcon />
          </div>
          <div
            className={`${color.active === "cyan" ? "active" : "inactive"}`}
            onClick={() => handleTheme("cyan")}
          >
            <CheckIcon />
          </div>
          <div
            className={`${color.active === "purple" ? "active" : "inactive"}`}
            onClick={() => handleTheme("purple")}
          >
            <CheckIcon />
          </div>
        </div>
      </div>
      <button className="apply-btn" onClick={handleApplyEffect}>
        Apply
      </button>
    </div>
  );
};

export default Setting;
