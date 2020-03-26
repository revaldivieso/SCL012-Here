import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <form onSubmit={event => event.preventDefault() && false}>
        <div className="col-md-3">
          <input
            placeholder="Ingresa nombre"
            className="form-control"
            id="name"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <input
            placeholder="Ingresa email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <input
            placeholder="Ingresa contraseña"
            className="form-control"
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button type="submit" onClick={onRegister}>
            Register
          </button>

          <button type="submit" component={Link} to="/login">
            Go back to Login
          </button>
        </div>
      </form>
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
