import axios from "axios";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UserContext from "./contexts/userContext";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSettings, DriverSidebar } from "./components";
import {
  Dashboard,
  Calendar,
  Employees,
  Vehicles,
  Runs,
  Drivers,
  DriverVehicle,
  VehicleList,
  NewVehicle,
  EditVehicle,
  EditDriver,
  NewRuns,
  EditRuns,
} from "./pages";

import DriverRoute from "./pages/DriverRoute";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3405/api/v1/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3405/api/v1/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  if (!userData.user) {
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  } else if (userData.user.role === "admin") {
    return (
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    className="text-3xl p-3 
                                hover:drop-shadow-xl
                                hover:bg-light-gray text-white"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                  activeMenu ? "md:ml-72" : "flex-2"
                }`}
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>
                    <Route path="/runs" element={<Runs />} />
                    <Route path="/runs/new" element={<NewRuns />} />
                    <Route path="/runs/edit" element={<EditRuns />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/vehicles" element={<VehicleList />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/vehicle/new" element={<NewVehicle />} />
                    <Route path="/vehicle/edit" element={<EditVehicle />} />
                    <Route path="/driver/edit" element={<EditDriver />} />
                    <Route path="/driver/vehicle" element={<DriverVehicle />} />
                    <Route path="*" element={<Runs />} />
                  </Routes>
                </div>
              </div>
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  } else if (userData.user.role === "driver") {
    return (
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    className="text-3xl p-3 
                                hover:drop-shadow-xl
                                hover:bg-light-gray text-white"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <DriverSidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <DriverSidebar />
                </div>
              )}
              <div
                className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                  activeMenu ? "md:ml-72" : "flex-2"
                }`}
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/driver/vehicle" element={<DriverVehicle />} />
                    <Route path="/driver/route" element={<DriverRoute />} />
                    <Route path="/driver/vehicle" element={<DriverVehicle />} />
                    <Route path="*" element={<DriverVehicle />} />
                  </Routes>
                </div>
              </div>
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
