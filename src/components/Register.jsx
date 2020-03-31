import React, {Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";

//validaciones
import useValidation from "../hooks/useValidation.js";
import validateRegister from '../validate/validateRegister';


const STATE_INICIAL = {
  name: '',
  email: '',
  password: ''
}

const Register = (props) => {
  
  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation ( STATE_INICIAL, validateRegister, onRegister );

  const { name, email, password } = values;

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Fragment>
      <h4>Registrate con redes sociales o creando una cuenta</h4>
      <form className="row" onSubmit={handleSubmit} noValidate>
        <div className="col-md-3">
          <div>
          <label htmlFor="nombre">Ingresa tu nombre</label>
          <input
            type="tex"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="form-control"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.name && <p>{errors.name}</p>}

          <div>
          <label htmlFor="nombre">Ingresa tu correo electronico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your e-mail"
            className="form-control"
            autoComplete="off"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.email && <p>{errors.email}</p>}

          <div>
          <label htmlFor="password">Crea una contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            autoComplete="off"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.password && <p>{errors.password}</p>}

          <div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={onRegister}
          >
            Create account
          </button>

          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            <Link to="/">Go back to Login </Link>
          </button>
          </div>
        </div>
      </form>
    </Fragment>
  );

}

export default withRouter(Register);
