import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";



const CardComponent = () => {
  // const [loading, setLoading] = React.useState(true);

  // const handleImageLoad = () => {
  //   setLoading(false);
  // };

  return (
    <div>
      <div className="FFC-container">
        <Card>
          {/* {loading && <Shimmer />} */}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?animal&${Math.random()}`}
            // onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">This Animal is a _____ !</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;