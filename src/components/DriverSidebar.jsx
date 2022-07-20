import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { FiTruck } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";


const DriverSidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div
      className="ml-3 h-screen 
    md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex 
              text-xl font-extrabold tracking-tight dark:text-white
              text-slate-900"
            >
              <TbTruckDelivery /> <span>FleetDASH</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 
                hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            <p className="text-gray-400 m-3 mt-4 uppercase">Pages</p>
              <NavLink
              to='/driver/vehicle'
              key='vehicle'
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              {<FiTruck/>}
              <span className="capitalize">My Vehicle</span>
            </NavLink>
            <NavLink
              to='/driver/route'
              key='Route'
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              {<FaRoute />}
              <span className="capitalize">My Route</span>
            </NavLink>
              <NavLink
              to='/calendar'
              key='Calendar'
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              {<AiOutlineCalendar />}
              <span className="capitalize">Calendar</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default DriverSidebar;
