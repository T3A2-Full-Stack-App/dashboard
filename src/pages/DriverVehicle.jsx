import React from 'react';

import { vehicleData } from '../data/driver';

const DriverVehicle = () => {
  
    return (
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-3xl">My Vehicle</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="mt-10 "></div>
            </div>
          </div>
          {vehicleData.map((driver) => {
            return (
              <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
                Registration:
                <br></br>
                {driver.registration}
                <label className="tracking-wide font-normal text-base">
                  Make:
                  <br></br>
                  {driver.make}
                </label>
                <label className="tracking-wide font-normal text-base">
                  Model:
                  <br></br>
                  {driver.model}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Year:
                  <br></br>
                  {driver.year}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Kilometers:
                  <br></br>
                  {driver.kilometers}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Next Service:
                  <br></br>
                  {driver.nextservice}
                </label>
              </div>
            );
          })}
          <div className="font-semibold text-2xl mt-5">Enter Kilometers</div>
          <input
            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="kilometers"
            type="text"
            placeholder="Enter Kilometers"
          ></input>
          <button class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Submit
          </button>
          <div className="font-medium text-lg mt-5">
            Vehicle Condition Comments
          </div>
          <form>
            <textarea
              class=" resize-none form-control w-full border border-solid bg-gray-200 border-gray-300 rounded h-36"
              placeholder="Comment Here"
            ></textarea>
          </form>
          <button class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
    );
}


export default DriverVehicle;