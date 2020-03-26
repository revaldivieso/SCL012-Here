import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <h1>Register</h1>
      <form className="row" onSubmit={event => event.preventDefault() && false}>
        <div className="col-md-3">
          <input
            placeholder="Enter your name"
            className="form-control"
            id="name"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <input
            placeholder="Enter your e-mail"
            className="form-control"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <input
            placeholder="Enter password"
            className="form-control"
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={onRegister}
          >
            Create account
          </button>

          <button
            type="submit"
            className="btn btn-secondary btn-lg btn-block"
            component={Link}
            to="/login"
          >
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
