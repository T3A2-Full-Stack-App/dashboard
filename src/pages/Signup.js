import React from "react";
import Header from "../components/Login/Header";
import Signup from "../components/Login/Signup";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </>
  );
}
