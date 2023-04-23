const VELOCITY = 5;
const VELOCITY_INC = 1.5;
const WIN_SCORE = 3;
export class Ball {
  constructor(p5, computerScore, playerScore, volleyRef) {
    this.p5 = p5;
    this.d = 30;
    this.dOffset = this.d + 20;
    this.r = this.d / 2;

    this.canvasHeight = this.p5.height;
    this.canvasWidth = this.p5.width;

    this.playerScoreRef = playerScore;
    this.computerScoreRef = computerScore;
    this.volleyRef = volleyRef;
    this.gameOver = false;
    this.winner = null;

    this.reset();
  }

  reset() {
    this.score = { player: 0, computer: 0 };
    this.resetFromScore();
    this.resetBallPosition();
    this.volley = 0;
    this.volleyRef.current.innerHTML = 0;
    this.gameOver = false;
  }

  resetBallPosition() {
    this.volley = 0;
    this.volleyRef.current.innerHTML = 0;

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

    if (this.score.computer >= WIN_SCORE) {
      this.gameOver = true;
      this.winner = 1;
    } else if (this.score.player >= WIN_SCORE) {
      this.gameOver = true;
      this.winner = 2;
    }
  }

  render() {
    this.p5.fill(255, 255, 0);
    this.p5.ellipse(this.location.x, this.location.y, this.d, this.d);
    this.updatePosition();
  }

  renderScore() {
    this.playerScoreRef.current.innerHTML = this.score.player;
    this.computerScoreRef.current.innerHTML = this.score.computer;
  }

  hitPaddle() {
    this.volley = this.volley + 1;
    this.volleyRef.current.innerHTML = this.volley;
    this.velocity.add(VELOCITY_INC, VELOCITY_INC).mult(-1, 1);
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
      this.velocity.mult(1, -1);
    }
    if (this.location.y - this.r < 0) {
      this.velocity.mult(1, -1);
    }

    this.location.add(this.velocity);
  }
}
