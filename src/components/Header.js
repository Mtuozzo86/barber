import React from "react";
import "./Header.css";
import { GiRazor } from "react-icons/gi";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="hero-text">
          <h1>2zoCuts</h1>
          <h3>I am very, very good</h3>
          <GiRazor size={77} color="white" />
          <div className="book-button">
            <Button size="lg" variant="outline-warning">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

