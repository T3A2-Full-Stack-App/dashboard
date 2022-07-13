import React from "react";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Vehicles = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      <div
        className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
      >
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Vehicles</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Registration: ABC-123"
                borderRadius="10px"
              ></Button>
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Registration: 42-HC-24"
                borderRadius="10px"
              ></Button>
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Registration: 233-LSV"
                borderRadius="10px"
              ></Button>
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Registration: XHS-324"
                borderRadius="10px"
              ></Button>
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Registration: 2BC-9PL"
                borderRadius="10px"
              ></Button>
            </div>
          </div>
          <div className="container mt-40 mx-auto">
            <p className="font-semibold">Vehicle ID: 004</p>
            <p className="font-semibold">Registration: XHS-324</p>
            <p className="font-semibold">Make: Hyundai</p>
            <p className="font-semibold">Model: iLoad</p>
            <p className="font-semibold">Year: 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
