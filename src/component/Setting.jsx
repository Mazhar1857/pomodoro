import React from "react";
import "./Setting.css";
import CloseIcon from "../svg components/CloseIcon";
import CheckIcon from "../svg components/CheckIcon";
import UpArrowIcon from "../svg components/UpArrowIcon";
import DownArrowIcon from "../svg components/DownArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { themeSliceAction } from "../store/themeSlice";

const Setting = () => {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const handleTheme = (color) => {
    dispatch(themeSliceAction.toggleTheme(color));
  };

  return (
    <div className="settings">
      <div className="setting">
        <h1>Settings</h1>
        <div className="close">
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
              <input type="text" />
              <div className="arrow-btn">
                <UpArrowIcon />
                <DownArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <p>short break</p>
            <div>
              <input type="text" />
              <div className="arrow-btn">
                <UpArrowIcon />
                <DownArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <p>long break</p>
            <div>
              <input type="text" />
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
          <div>Aa</div>
          <div>Aa</div>
          <div>Aa</div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="color">
        <h2>COLOR</h2>
        <div>
          <div
            className={`${theme.active === "red" ? "active" : "inactive"}`}
            onClick={() => handleTheme("red")}
          >
            <CheckIcon />
          </div>
          <div
            className={`${theme.active === "cyan" ? "active" : "inactive"}`}
            onClick={() => handleTheme("cyan")}
          >
            <CheckIcon />
          </div>
          <div
            className={`${theme.active === "purple" ? "active" : "inactive"}`}
            onClick={() => handleTheme("purple")}
          >
            <CheckIcon />
          </div>
        </div>
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default Setting;
