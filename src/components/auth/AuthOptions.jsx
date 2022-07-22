import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const register = () => navigate("/register");
  const login = () => navigate("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
          <button className="btn btn-primary mr-2" onClick={register}>
            Sign Up
          </button>
          <button className="btn btn-primary mr-2" onClick={login}>
            Login
          </button>
        </>
      )}
    </nav>
  );
}

export default AuthOptions;
