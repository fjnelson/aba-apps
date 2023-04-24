import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
import Happy from ".././Emotions/Emotions-images/happy.jpg"
import Angry from ".././Emotions/Emotions-images/angry.jpg"
import Calm from ".././Emotions/Emotions-images/calm.jpg"
import Excited from ".././Emotions/Emotions-images/excited.jpg"
import Sad from ".././Emotions/Emotions-images/sad.jpg"
import Surprised from ".././Emotions/Emotions-images/surprised.jpg"

const Emotions = () => {
  return (
    <div className="Emotions-container">
      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Happy}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Happy</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Sad}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Sad</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Angry}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Angry</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Surprised}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Surprised</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Excited}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Excited</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="Emotions-card"
          variant="top"
          src={Calm}
        />
        <Card.Body>
          <Card.Title className="Emotions-title">Calm</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Emotions;