import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";
import logo from '../img/logo.png';
import "./Register.css";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <div class="second_view">
      <header className="app_header">
      <img src={logo} className="huellas_logo" alt="logo" />
      </header>

      <h5>Registrate con redes sociales o creando una cuenta </h5>

      <form className="row" onSubmit={event => event.preventDefault() && false}>
       <h5>Ingresa tu correo electrónico*</h5>
          <input
            placeholder="Ingresa Email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
       <h5>Ingresa tu email*</h5>
          <input
            placeholder="Ingresa Contraseña"
            className="form-control"
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

{/* BOTON DE INGRESO CON FACEBOOK*/}

          <button class="register_facebook"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Facebook</Link>
          </button>

{/* BOTON DE INGRESO CON GOOGLE*/}

          <button class="register_google"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Google</Link>
          </button>

{/* BOTON DE registro*/}

          <button class="login"
            type="submit"
            onClick={onRegister}
          >
            Registrar
          </button>

{/* BOTON DE VOLVER A LOGIN*/}

          <h6>Si ya estas registrado ingresa <button class="return_login"
            type="submit" >
            <Link to="/">aquí</Link>
          </button>
          </h6>
      </form>
      </div>
    </Fragment>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(Register);
