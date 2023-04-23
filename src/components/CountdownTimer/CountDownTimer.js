import React from "react";
import { Container } from "react-bootstrap";
import TimerApp from "./Timer.js";
import CountDown from "./CountDown.js";

const CountDownTimer = () => {
    return (
      <Container>
        <div>
        <TimerApp />
        <CountDown />
        </div>
      </Container>
    );
  };
  
  export default CountDownTimer;