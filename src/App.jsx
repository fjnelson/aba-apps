// import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import PongDashboard from "./components/PongDashboard/PongDashboard";
import Calculator from "./components/Calculator/calculator";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/pong" element={<PongDashboard />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
