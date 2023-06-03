import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
import blueZone from "./images/bluezone.JPG";
import greenZone from "./images/greenzone.JPG";
import yellowZone from "./images/yellowzone.JPG";
import redZone from "./images/redzone.JPG";


  
const CardComponent = () => (
    <div>
      <div className="ZOR-container">
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={blueZone}
          />
        </Card>
  
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={greenZone}
          />
        </Card>
  
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={yellowZone}
          />
        </Card>
  
        <Card>
          <Card.Img
            className="FFC-card"
            variant="top"
            src={redZone}
          />
        </Card>
      </div>
    </div>
  );
  
  export default CardComponent;