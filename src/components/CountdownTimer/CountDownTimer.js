import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TimerApp from "./Timer.js";
import CountDown from "./CountDown.js";
import Button from 'react-bootstrap/Button';

const CountDownTimer = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <div>
                <TimerApp />
                <CountDown />
            </div>
            <div>
                <Button variant="primary" onClick={goBack}>Go Back</Button>{' '}
            </div>
        </Container>
    );
};

export default CountDownTimer;