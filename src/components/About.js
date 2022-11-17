import React from "react";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div className="about-section">
      <div className="about-container d-flex flex-wrap">
        {/* <Row className="h-100">
          <Col className="d-flex h-100 text-warning">
            <div className="d-flex flex-column about-first p-3">
              <p className="fs-5 fw-semibold">
                400 Garden City Plaza Ste 110, Garden City, NY 11530
              </p>
              <p className="text-center">Hours</p>

              <Row>
                <Col>Monday</Col>
                <Col className="text-end">Closed</Col>
              </Row>
              <Row>
                <Col>Tuesday</Col>
                <Col className="text-end">Closed</Col>
              </Row>
              <Row>
                <Col>Wednesday</Col>
                <Col className="text-end">9 AM - 8 PM</Col>
              </Row>
              <Row>
                <Col>Thursday</Col>
                <Col className="text-end">9 AM - 8 PM</Col>
              </Row>
              <Row>
                <Col>Friday</Col>
                <Col className="text-end">9 AM - 8 PM</Col>
              </Row>
              <Row>
                <Col>Saturday</Col>
                <Col className="text-end">9 AM - 8 PM</Col>
              </Row>
              <Row>
                <Col>Sunday</Col>
                <Col className="text-end">Closed</Col>
              </Row>
            </div>
          </Col>
          <Col className="d-flex h-100 text-warning">
            <div className="about-second"></div>
          </Col>
        </Row> */}
      </div>
    </div>
  );
}

export default About;
