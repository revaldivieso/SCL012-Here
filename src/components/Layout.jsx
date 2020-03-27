import React from "react";
//import "./Layout.css";

const Layout = props => (
  <div className="layout">
    <div className="content">{props.children}</div>
  </div>
);

export default Layout;
