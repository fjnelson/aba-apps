import "./App.css";
// import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import PongDashboard from "./components/PongDashboard/PongDashboard";
import Calculator from "./components/Calculator/calculator";
import FFC from "./components/FeatureFunctionClass/FeatureFunctionClass";
import CountDownTimer from "./components/CountdownTimer/CountDownTimer"
import TaskMenu from "./components/TaskMenu/TaskMenu"
import Emotions from "./components/Emotions/Emotions"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/pong" element={<PongDashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/ffc" element={<FFC />} />
          <Route path="/countdowntimer" element={<CountDownTimer />} />
          <Route path="/taskmenu" element={<TaskMenu />} />
          <Route path="/emotions" element={<Emotions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
