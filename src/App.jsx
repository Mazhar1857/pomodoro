import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./component/HomePage";
import Setting from "./component/Setting";
function App() {
  const theme = useSelector((store) => store.theme);
  const font = useSelector((store) => store.font);
  const style = {
    "--color": theme["color"],
    "--font": font["font"],
  };

  return (
    <div className="app" style={style}>
      <HomePage />
      <Setting />
    </div>
  );
}

export default App;
