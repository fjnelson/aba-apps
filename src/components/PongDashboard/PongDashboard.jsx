import React from "react";
import PongP5Game from "../PongP5Game/PongP5Game";
import Stack from "react-bootstrap/Stack";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./PongDashboard.css";

export default function PongDashboard() {
  // const [score, setScore] = React.useState({ player: 0, computer: 0 });
  const playerScore = React.useRef();
  const computerScore = React.useRef();
  const volleyRef = React.useRef();

  // const onUpdateScore = (previousScore) => (getUpdatedScore) => {
  //   setScore(getUpdatedScore(previousScore));
  // };
  return (
    <Stack gap={3} className="dashboard-container">
      <div className="title">Play Pong</div>
      <div className="game-container">
        <div className="stat-container">
          <div>
            <span ref={playerScore}>0</span>
            <span className="name-title"> - Player</span>
          </div>

          <div>
            <span ref={volleyRef}>0</span>
          </div>

          <div>
            <span className="name-title">Computer - </span>
            <span ref={computerScore}>0</span>
          </div>
        </div>
      </div>
      <PongP5Game
        computerScore={computerScore}
        playerScore={playerScore}
        volleyRef={volleyRef}
      />
    </Stack>
  );
}
