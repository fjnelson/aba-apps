import React from "react";
import Sketch, { createVector } from "react-p5";
import { Ball } from "./Ball";
// import Vector from "react-p5";
import "./PongP5Game.css";

let ball;

const height = 500;
const width = 800;

export default function PongP5Game({ computerScore, playerScore }) {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    ball = new Ball(p5, height, width, computerScore, playerScore);
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    ball.render();
  };

  return <Sketch setup={setup} draw={draw} />;
}
