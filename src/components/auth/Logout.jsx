import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
class Logout extends Component {
  render() {
    return (
      <>
        <Link to="/">
          {/* <h1 className="title">Head</h1> */}
        </Link>
        <AuthOptions />
        </>
    );
  }
}
export default Logout;
