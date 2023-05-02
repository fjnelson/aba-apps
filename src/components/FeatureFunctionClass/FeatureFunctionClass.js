import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer"></div>
  </div>
);

const CardComponent = () => {
  const [loading, setLoading] = React.useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className="FFC-container">
        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?vehicle&${Math.random()}`}
            onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Vehicles</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?furniture&${Math.random()}`}
            onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Furniture</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?clothing&${Math.random()}`}
            onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Clothing</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?Food&${Math.random()}`}
            onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Food</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?animal&${Math.random()}`}
            onLoad={handleImageLoad}
          />
          <Card.Body>
            <Card.Title className="FFC-title">Animals</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          {loading && <Shimmer />}
          <Card.Img
            className="FFC-card"
            variant="top"
            src={`https://source.unsplash.com/200x200/?household&${Math.random()}`}
            onLoad={handleImageLoad}
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
