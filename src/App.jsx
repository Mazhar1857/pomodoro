import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./component/HomePage";
import Setting from "./component/Setting";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const theme = useSelector((store) => store.theme);
  const font = useSelector((store) => store.font);
  const [activePage, setActivePage] = useState("home");
  const style = {
    "--color": theme["color"],
    "--font": font["font"],
  };

  return (
    <div className="app" style={style}>
      <div
        className={`home-component ${
          activePage == "home" ? "active" : "inactive"
        }`}
      >
        <HomePage setActivePage={setActivePage} />
      </div>
      <div
        className={`setting-component ${
          activePage == "setting" ? "active" : "inactive"
        }`}
      >
        <Setting setActivePage={setActivePage} />
      </div>
    </div>
  );
}

export default App;
