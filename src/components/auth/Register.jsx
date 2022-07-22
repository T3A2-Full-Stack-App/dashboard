import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

function Register() {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        firstName,
        lastName,
        role,
      };
      await axios.post("https://fleetwizzard.herokuapp.com/api/v1/users/register", newUser);
      const loginUser = { email, password, role };
      const loginResponse = await axios.post(
        "https://fleetwizzard.herokuapp.com/api/v1/users/login",
        loginUser
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginUser,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      navigate("/runs");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="mb-10 flex justify-center mt-6">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form
        className="bg-orange-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submit}
      >
        <div className="flex justify-center">
          <img
            alt=""
            className="h-14 w-14 justify-center"
            src="https://cdn-icons-png.flaticon.com/512/411/411763.png"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Signup to create an Account
        </h2>
        <p className="text-center text-sm text-gray-900 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Log in
          </Link>
        </p>
        <div className="mt-2 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mt-2 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="first-name"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mt-2 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="last-name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <div className="mt-2 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password Confirmation:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>
        <div className="mt-8 mb-4 -space-y-px">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="role"
          >
            Role:
          </label>
            <select required id="role" onChange={(e) => setRole(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled selected hidden>Select role</option>
            <option value="admin">Admin</option>
            <option value="driver">Driver</option>
          </select>
        </div>
        <button
          className="mt-2 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={"sumbit"}
          value="Register"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;