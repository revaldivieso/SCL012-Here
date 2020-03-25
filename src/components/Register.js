import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../components/firebase";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  return (
    <Fragment>
      <form onSubmit={event => event.preventDefault() && false}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            name="name"
            autoComplete="off"
            autoFocus value={name}
            onChange={event => setName(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
     
       <div>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        

        <Button type="submit" onClick={onRegister}>
          Register
        </Button>

        <Button type="submit" component={Link} to="/login">
          Go back to Login
        </Button>
      </form>
      
    </Fragment>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      await firebase.addQuote(quote);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(Register));
