import axios from "axios"
import UserContext from "../contexts/userContext"
import React, { useEffect, useState } from "react"
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { Navbar, ThemeSettings } from "../components"
import { DriverSidebar } from "../components/DriverSidebar"

import { useStateContext } from "../contexts/ContextProvider"

const DriverDashboard = () => {
    const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    } = useStateContext()
  

  return (
         <div className="flex fixed dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
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
                className={`bg-none opacity-100 min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"
                  }`}
              >
                <div className="fixed md:static navbar w-full">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}
                </div>
              </div>
            </div>
  )
};

export default DriverDashboard 
