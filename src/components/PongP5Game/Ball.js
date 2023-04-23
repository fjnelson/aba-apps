const VELOCITY = 4;

export class Ball {
  constructor(p5, canvasHeight, canvasWidth, computerScore, playerScore) {
    this.p5 = p5;
    this.d = 50;
    this.dOffset = this.d + 20;
    this.r = this.d / 2;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.playerScoreRef = playerScore;
    this.computerScoreRef = computerScore;
    this.reset();
  }

  reset() {
    this.score = { player: 0, computer: 0 };
    this.resetFromScore();
    this.resetBallPosition();
  }

  resetBallPosition() {
    const newRandomY = this.p5.random(
      this.dOffset,
      this.canvasHeight - this.dOffset
    );
    const [location, vx, vy] =
      Math.random() > 0.5
        ? // Start Left - Move Right
          [
            this.p5.createVector(this.dOffset, newRandomY),
            VELOCITY,
            (Math.random() > 0.5 ? 1 : -1) * VELOCITY,
          ]
        : // Start Right - Move Left
          [
            this.p5.createVector(this.canvasWidth - this.dOffset, newRandomY),
            -VELOCITY,
            (Math.random() > 0.5 ? 1 : -1) * VELOCITY,
          ];

    this.location = location;
    this.velocity = this.p5.createVector(vx, vy);
  }

  resetFromScore() {
    this.resetBallPosition();
    this.renderScore();
  }

  render() {
    this.p5.ellipse(this.location.x, this.location.y, this.d, this.d);
    this.updatePosition();
  }

  renderScore() {
    this.playerScoreRef.current.innerHTML = this.score.player;
    this.computerScoreRef.current.innerHTML = this.score.computer;
  }

  hitPaddle() {
    this.velocity.mult(this.p5.createVector(this.velocity.x * -1, 1));
  }

  updatePosition() {
    // Edges
    if (this.location.x + this.r > this.canvasWidth) {
      this.score.player++;
      this.resetFromScore();
    }
    if (this.location.x - this.r < 0) {
      this.score.computer++;
      this.resetFromScore();
    }
    if (this.location.y + this.r > this.canvasHeight) {
      this.velocity.mult(this.p5.createVector(1, -1));
    }
    if (this.location.y - this.r < 0) {
      this.velocity.mult(this.p5.createVector(1, -1));
    }

    this.location.add(this.velocity);
  }
}
