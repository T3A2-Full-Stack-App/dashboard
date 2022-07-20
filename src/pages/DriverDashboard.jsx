import axios from "axios";
import UserContext from "../contexts/userContext";
import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const DriverDashboard = () => {
  const {
    // currentMode,
    // activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div>
      <h1>hello driver dash</h1>
    </div>
  );
};

export default DriverDashboard;
