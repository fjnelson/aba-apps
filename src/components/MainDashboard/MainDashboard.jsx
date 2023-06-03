import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pong from "./PortfolioIcons/pong.png";
import timer from "./PortfolioIcons/timer.png";
import calculator from "./PortfolioIcons/calculator.png";
import tasks from "./PortfolioIcons/tasks.png";
import ffc from "./PortfolioIcons/ffc.png";
import emotions from "./PortfolioIcons/emotions.png";
import zor from "./PortfolioIcons/zor.png";

const MainDashboard = () => {
  return (
    <Container>
      <div className="dashboard-card-container">
        <Link to="/pong">
          <div className="pong-card">
            <img src={pong} alt="Pong icon" />
            <p className="card-text">Pong</p>
          </div>
        </Link>
        <Link to="/countdowntimer">
          <div className="dashboard-card">
            <img src={timer} alt="Timer icon" />
            <p className="card-text">Countdown & Timer</p>
          </div>
        </Link>
        <Link to="/calculator">
          <div className="dashboard-card">
            <img src={calculator} alt="Calculator icon" />
            <p className="card-text">Calculator</p>
          </div>
        </Link>
        <Link to="/taskmenu">
          <div className="dashboard-card">
            <img src={tasks} alt="Tasks icon" />
            <p className="card-text">Task Menu</p>
          </div>
        </Link>
        <Link to="/FFC">
          <div className="dashboard-card">
            <img src={ffc} alt="FFC icon" />
            <p className="card-text">Feature Function Class</p>
          </div>
        </Link>
        <Link to="/emotions">
          <div className="dashboard-card">
            <img src={emotions} alt="emotions icon" />
            <p className="card-text">Emotions</p>
          </div>
        </Link>
        <Link to="/zonesofregulation">
          <div className="dashboard-card">
            <img src={zor} alt="zones of regulation icon" />
            <p className="card-text">Zones of Regulation</p>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default MainDashboard;