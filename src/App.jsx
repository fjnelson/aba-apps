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
import NavBar from "./components/Navbar/Navbar"
import ZonesofRegulation from "./components/ZonesofRegulation/Regulation"
import Animal from "./components/animals/animals"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/pong" element={<PongDashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/ffc" element={<FFC />} />
          <Route path="/countdowntimer" element={<CountDownTimer />} />
          <Route path="/taskmenu" element={<TaskMenu />} />
          <Route path="/emotions" element={<Emotions />} />
          <Route path="/zonesofregulation" element={<ZonesofRegulation />} />
          <Route path="/animals" element={<Animal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
