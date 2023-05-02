import React from "react";
import { Container } from "react-bootstrap";
import TimerApp from "./Timer.js";
import CountDown from "./CountDown.js";

const CountDownTimer = () => {

  return (
    <Container>
        <TimerApp />
        <CountDown />
    </Container>
  );
};

export default CountDownTimer;