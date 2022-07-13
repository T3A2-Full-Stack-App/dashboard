import { useState } from "react";
import React from "react";
import { signupFields } from "../Login/formFields";
import FormAction from "./FormAction";
import Input from "./Input";


const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [role, setRole] = React.useState();
  const [signupState, setSignupState] = useState(fieldsState);

    const handleRadioClick = (e) => {
      setRole(e.target.value);
    };

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="mt-2">
        <label>
          <input
            type="radio"
            value="admin"
            checked={role === "admin"}
            onChange={handleRadioClick}
            class="form-radio"
          />
          <span class="ml-2">Admin</span>
        </label> <br></br>
        <label>
          <input
            type="radio"
            value="driver"
            checked={role === "driver"}
            onChange={handleRadioClick}
          />
          <span class="ml-2">Driver</span>
        </label>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
