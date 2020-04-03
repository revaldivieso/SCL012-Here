import React from "react";
//import { Link } from "react-router-dom";
import AppMap from "../components/AppMap";
import NavBar from "../components/NavBar";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <AppMap />
      <header>
        <div id="home">
          <Link to="/" className="w3-bar-item w3-button">
            <i className="fa fa-home"></i>
          </Link>
        </div>
      </header>
      <body>
        <AppMap/>
      </body>
      <footer>
        <NavBar />
      </footer>
    </Container>
  );
}

export default HomePage;
