import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Header } from "../components";
import UserContext from '../contexts/userContext';
import { routeData } from "../data/route";

const DriverRoute = () => {
  const { userData } = useContext(UserContext)
  const [runData, setRunData] = useState([])


  useEffect(() => {
    async function getRun(driverEmail) {
      const res = await fetch(`https://fleetwizzard.herokuapp.com/api/v1/runs/driver/${driverEmail}/find`)
      setRunData(await res.json())
    }
    getRun(userData.user.email)
  }, [])


  return (
    <div className="flex gap-10 flex-wrap justify-center">
      <div
        className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
      >

        <Header title="My Run" />

        <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
          Name:
          <br></br>
          {runData.name}
          <label className="tracking-wide font-normal text-base">
            Area:
            <br></br>
            {runData.area}
          </label>
          <label className="tracking-wide font-normal text-base">
            <p className="font-normal">Client List:</p>
            <ul>
            <li>Chemist Warehouse Cannon Hill</li>
            <li>Coles</li>
            <li>Bunnings Oxley</li>
            <li>kmart Indooroopily</li>
            <li>Coles Kenmore</li>
            </ul>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DriverRoute;
