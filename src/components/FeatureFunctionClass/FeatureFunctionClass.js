import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";

const CardComponent = () => {

  return (
    <div>
      <div className="FFC-container">
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?vehicle&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Vehicles</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?furniture&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Furniture</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?clothing&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Clothing</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?Food&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Food</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?animal&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Animals</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?household&${Math.random()}`}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Household Items</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
