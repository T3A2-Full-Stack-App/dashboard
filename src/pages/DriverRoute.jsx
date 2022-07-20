import React from "react";

import { routeData } from "../data/route";

const DriverRoute = () => {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      <div
        className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
      >
        <div className="flex justify-between">
          <p className="font-semibold text-3xl">My Route</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="mt-10 "></div>
          </div>
        </div>
        {routeData.map((route) => {
          return (
            <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
              Driver:
              <br></br>
              {route.user}
              <label className="tracking-wide font-normal text-base">
                Location:
                <br></br>
                {route.route}
              </label>
              <label className="tracking-wide font-normal text-base">
                Date:
                <br></br>
                {route.date}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriverRoute;
