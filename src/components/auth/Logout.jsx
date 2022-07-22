import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
class Logout extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          {/* <h1 className="title">Head</h1> */}
        </Link>
        <AuthOptions />
      </header>
    );
  }
}
export default Logout;
