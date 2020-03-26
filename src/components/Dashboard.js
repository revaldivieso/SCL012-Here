import React from 'react'
import firebase from "./firebase";
import { withRouter } from 'react-router-dom'

function Dashboard(props) {
  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }

  return (
    <main>
      <p>Hello {firebase.getCurrentUsername()}</p>
     
      <div>
        <button type="submit" onClick={logout}>
          Logout
        </button>
      </div>
    </main>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter((Dashboard))
