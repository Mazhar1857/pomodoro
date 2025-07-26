import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./component/HomePage";
import Setting from "./component/Setting";
function App() {
  const theme = useSelector((store) => store.theme);
  return (
    <div className="app" style={{ "--color": theme["color"] }}>
      <HomePage />
      <Setting />
    </div>
  );
}

export default App;
