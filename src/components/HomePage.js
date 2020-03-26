import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <Fragment>
      <button type="submit" class="btn btn-lg btn-primary" component={Link} to="/register">
        Register
      </button>
      <button type="submit" class="btn btn-lg btn-primary" component={Link} to="/login">
        Login
      </button>
      <button type="submit" class="btn btn-lg btn-primary" component={Link} to="/dashboard">
        Dashboard
      </button>
    </Fragment>
  );
}

export default HomePage;
