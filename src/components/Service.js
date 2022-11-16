import React from "react";
import Card from "react-bootstrap/Card";
import haircut from "../img/haircut.jpeg";
import "./Service.css";
import { RiScissorsFill } from "react-icons/ri";

function Service() {
  return (
    <div className="service-section">
      <Card
        className="bg-transparent"
        style={{ width: "25rem", margin: "auto", border: 'none' }}
      >
        <div className="icon">
              <RiScissorsFill color={"white"} size={55} />
        </div>
        <Card.Img variant="top" src={haircut} />
        <Card.Body>
          <Card.Text>
            <h3 className="text-center">Haircut</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Service;
