import React from "react";
import Card from "react-bootstrap/Card";
import "./Service.css";

function Service({ serviceName, time, icon, photo }) {
  console.log(photo)
  return (
    <div className="service-section position-relative">
      <Card
        className="bg-transparent"
        style={{ width: "18rem", margin: "auto", border: "none" }}
      >
        <div className="icon position-absolute top-0 start-50 translate-middle">
          {icon}
        </div>

        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Text className="text-center">
            <h3>{serviceName}</h3>
            <p className="fw-light">{time}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Service;
