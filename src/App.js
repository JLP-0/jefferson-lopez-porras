import "./App.css";
import { MainView } from "./views/MainView";
import { Routes, Route } from "react-router-dom";
import { About } from "./views/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
