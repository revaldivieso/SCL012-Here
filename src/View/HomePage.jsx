import React from "react";
//import { Link } from "react-router-dom";
import AppMap from "../components/AppMap";
import NavBar from "../components/NavBar";
import { Container } from "react-bootstrap/lib/Tab";

function HomePage() {
  return (
    <Container>
      <header>perfil</header>
      <body>
        <AppMap />
      </body>
      <footer>
        <NavBar />
      </footer>
    </Container>
  );
}

export default HomePage;
