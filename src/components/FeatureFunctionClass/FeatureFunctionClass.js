import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../App.css";

const CardComponent = () => {
  return (
    <div className="FFC-container">
      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#1</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#2</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#3</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#4</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#5</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          className="FFC-card"
          variant="top"
          src={`https://picsum.photos/200?random=${Math.random()}`}
        />
        <Card.Body>
          <Card.Title className="FFC-title">#6</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
