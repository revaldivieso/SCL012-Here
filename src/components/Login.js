
import React, { Fragment, useState } from "react"
import firebase from "../firebase";


const  SignIn = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

  return (
    <Fragment>
      <h1>Ingreso de usuarios</h1>
      <form className="row" onSubmit={login}>
      <div className="col-md-3">
      <input
        placeholder="Ingresa email"
        className="form-control"
        type="email"
        name="email" 
        autoComplete="off" 
        autoFocus value={email}
        onChange={event => setEmail(event.target.value)}
      ></input>
      <input
        placeholder="Ingresa contraseña"
        type="password"
        name="password"  
        autoComplete="off" 
        value={password}
        onChange={event => setPassword(event.target.value)}
      ></input>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
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

export default SignIn;

