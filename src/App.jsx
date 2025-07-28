import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./component/HomePage";
import Setting from "./component/Setting";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const theme = useSelector((store) => store.theme);
  const font = useSelector((store) => store.font);
  const style = {
    "--color": theme["color"],
    "--font": font["font"],
  };

  return (
    <Router>
      <div className="app" style={style}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/setting"
            element={
              <div className="setting-component">
                <Setting />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
