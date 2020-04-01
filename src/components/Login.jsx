import React, { Fragment, useState } from "react";
import firebase from "./firebase";
import "./Login.css";
import logo from '../img/logo.png';
import { Link, withRouter } from "react-router-dom";
//import { Container, Row } from "react-bootstrap";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <div class="first_view">
      <header className="app_header">
      <img src={logo} className="huellas_logo" alt="logo" />
      </header>
                       
      <h5>Si ya tienes cuenta en Huellas, ingresa el correo electrónico y contraseña que registraste </h5>
      
      <form className="row" onSubmit={login}>
       <h5>Ingresa tu correo electrónico*</h5>
          <input class="email"
            placeholder="Ingresa Email"
            className="form-control"
            type="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
        <h5>Ingresa tu email*</h5>
          <input
            placeholder="Ingresa Contraseña"
            className="form-control"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>

{/* BOTON DE INGRESO CON FACEBOOK*/}

          <button class="login_facebook"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Facebook</Link>
          </button>

{/* BOTON DE INGRESO CON GOOGLE*/}

          <button class="login_google"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Google</Link>
          </button>

{/* BOTON DE INGRESO- LOGIN*/}

          <button class="login"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresar</Link>
          </button>

{/* BOTON DE REGISTRO*/}
          <h6>Si no estas registrado ingresa <button class="register"
            type="submit"
            to="/register"
          >
            <Link to="/register">aquí</Link>
          </button> </h6>

      </form>
      </div>
    </Fragment>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
};

export default withRouter(SignIn);
