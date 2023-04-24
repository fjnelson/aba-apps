const PADDLE_SPEED = 30;
const AI_PADDLE_SPEED = 6;

export class Paddle {
  constructor(p5, index, isPlayer = false) {
    this.p5 = p5;

    this.w = 15;
    this.h = 125;
    this.canvasHeight = this.p5.height;
    this.canvasWidth = this.p5.width;
    this.index = index;
    this.name = isPlayer ? "Player" : "Computer";

    this.lastMouseY = null;

    this.isPlayer = isPlayer;
    this.reset();
  }

  reset() {
    this.location = this.p5.createVector(
      this.index === 1 ? this.w / 2 : this.canvasWidth - this.w / 2,
      this.canvasHeight / 2
    );
    this.velocity = this.p5.createVector(0, 0);
  }

  isInterecting(ball) {
    const ballLeft = ball.location.x - ball.r;
    const ballRight = ball.location.x + ball.r;
    // const ballBottom = ball.location.y + ball.r;
    const ballTop = ball.location.y - ball.r;

    const paddleTop = this.location.y - this.h / 2;
    const paddleSide =
      this.index === 1
        ? this.location.x + this.w / 2
        : this.location.x - this.w / 2;
    const paddleBottom = this.location.y + this.h / 2;
    return (
      paddleTop <= ballTop &&
      paddleBottom >= ballTop &&
      (this.index === 1 ? paddleSide >= ballLeft : paddleSide <= ballRight)
    );
  }

  render() {
    this.p5.rectMode(this.p5.CENTER);

    this.index === 1 ? this.p5.fill("green") : this.p5.fill("red");
    this.p5.rect(this.location.x, this.location.y, this.w, this.h);
  }

  up(speed = PADDLE_SPEED) {
    if (this.location.y > 0) {
      this.location.add(0, -speed);
    }
  }

  down(speed = PADDLE_SPEED) {
    if (this.location.y < this.canvasHeight) {
      this.location.add(0, speed);
    }
  }

  moveWithMouse() {
    this.lastMouseY = this.p5.mouseY;
    this.location = this.location.set(this.location.x, this.p5.mouseY);
  }

  moveAI(ball) {
    if (!this.isBallApproaching(ball)) {
      return;
    }

    if (this.location.y > ball.location.y) {
      this.up(AI_PADDLE_SPEED);
    } else if (this.location.y < ball.location.y) {
      this.down(AI_PADDLE_SPEED);
    }
  }

  isBallApproaching(ball) {
    if (this.index === 1) {
      return (
        this.location.x + ball.location.x < this.canvasWidth * 0.5 &&
        ball.velocity.x < 0
      );
    } else {
      return (
        this.location.x - ball.location.x < this.canvasWidth * 0.5 &&
        ball.velocity.x > 0
      );
    }
  }
}
