import React, { useEffect, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import UserContext from '../contexts/userContext';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  const {userData} = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 
          hover:bg-light-gray rounded-lg"
            // onClick={() => handleClick("userProfile")}
          >
            <p className="fixed top-8 right-10">
              <span className="text-gray-400 text-14">Hi  </span>{" "}
              <span className="text-gray-400 wml-1 text-14">{userData.user.email}</span>
            </p>
            {/* <MdKeyboardArrowDown className="text-gray-400 text-14" /> */}
          </div>
        </TooltipComponent>

      </div>
    </div>
  );
};

export default Navbar;
