import React, { Fragment, useState } from "react";
import firebase from "./firebase";
import { Link, withRouter } from "react-router-dom";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <h1>Iniciar sesion</h1>
      <form className="row" onSubmit={login}>
        <div className="col-md-3">
          <input
            placeholder="Enter your e-mail"
            className="form-control"
            type="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
          <input
            placeholder="Enter your password"
            className="form-control"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Enviar
          </button>
          <button
            type="submit"
            component={Link}
            to="/register"
            className="btn btn-secondary btn-lg btn-block"
          >
            Register
          </button>
        </div>
      </form>
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
