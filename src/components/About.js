import React from "react";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <Row className="h-100">
          <Col className="d-flex h-100 text-warning">
            <div className="d-flex about-first p-3">
              <p className="m-auto fw-high">Everyone is happy : )</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
