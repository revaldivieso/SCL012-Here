import React, {Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";

//validaciones
import useValidation from "../hooks/useValidation.js";
import validateLogin from '../validate/validateLogin';

const STATE_INICIAL = {
  email: '',
  password: ''
}

const SignIn = (props) => {

  async function login() {
    try {
      await firebase.login(email, password);
      if(!(await firebase.hashTable(firebase.auth.currentUser.uid))){
        await firebase.createUserTable()
      }
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation ( STATE_INICIAL, validateLogin, login );

  const { email, password } = values;

   

  return (
    <Fragment>
      <h1>Iniciar sesion</h1>
      <form className="row" onSubmit={handleSubmit} noValidate>
        <div className="col-md-12">
          <div>
          <input
            placeholder="Enter your e-mail"
            className="form-control"
            type="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          </div>

          {errors.email && <p>{errors.email}</p>}

          <div>
          <input
            placeholder="Enter your password"
            className="form-control"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          </div>

          {errors.password && <p>{errors.password}</p>}

          <div>
          <button
            to="/home-pages"
            type="submit"
            className="btn btn-info"
          >
            Enviar
          </button>

          <button
            type="submit"
            to="/register"
            className="btn btn-secondary"
          >
            <Link to="/register">Register</Link>
          </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(SignIn);
