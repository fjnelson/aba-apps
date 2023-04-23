import React from "react";
import Sketch, { createVector } from "react-p5";
import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import Button from "react-bootstrap/Button";
import "./PongP5Game.css";

let ball, player, computer, sketch;

const height = 500;
const width = 800;

export default function PongP5Game({ computerScore, playerScore, volleyRef }) {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    sketch = p5.createCanvas(width, height).parent(canvasParentRef);

    ball = new Ball(p5, computerScore, playerScore, volleyRef);
    player = new Paddle(p5, 1, false);
    computer = new Paddle(p5, 2, false);
  };

  const draw = (p5) => {
    p5.background(0);

    if (typeof ball?.gameOver === "undefined") {
      return;
    }

    if (ball.gameOver) {
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.fill(255);
      p5.textSize(52);
      p5.text("Game Over", p5.width / 2, p5.height / 2 - 40);
      p5.textSize(32);
      p5.text(
        `${ball.winner === 1 ? player.name : computer.name} Wins!`,
        p5.width / 2,
        p5.height / 2 + 40
      );
      p5.noLoop();
      return;
    }

    ball.render();
    player.render();
    computer.render();

    if (player.isInterecting(ball) || computer.isInterecting(ball)) {
      ball.hitPaddle();
    }

    if (!player.isPlayer) {
      player.moveAI(ball);
    }
    if (!computer.isPlayer) {
      computer.moveAI(ball);
    }

    if (
      player.isPlayer &&
      player.lastMouseY !== p5.mouseY &&
      p5.mouseX >= 0 &&
      p5.mouseX <= p5.width &&
      p5.mouseY >= 0 &&
      p5.mouseY <= p5.height
    ) {
      player.moveWithMouse();
      return;
    }

    if (player.isPlayer && p5.keyIsPressed) {
      registerInputEvents()(p5);
      // console.log("Key is continuously pressed");
    }
  };

  function registerInputEvents() {
    return (p5) => {
      if (p5.keyCode === p5.UP_ARROW) {
        player.up();
      } else if (p5.keyCode === p5.DOWN_ARROW) {
        player.down();
      }
    };
  }

  // return null;

  return (
    <>
      <Sketch setup={setup} draw={draw} />
      <Button
        variant="danger"
        onClick={() => {
          ball.reset();
          computer.reset();
          player.reset();
          sketch.loop();
        }}
      >
        Restart
      </Button>
    </>
  );
}
