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
              <div className="mt-10"></div>
            </div>
          </div>
          {vehicleData.map((driver) => {
            return (
              <div className=" font-semibold text-base mt-5">
                Registration:
                <label className="tracking-wide font-normal text-base">
                  <br></br>
                  {driver.registration}
                </label>
                <div className="font-semibold text-base mt-5">
                  Make:
                  <label className="tracking-wide font-normal text-base">
                    <br></br>
                    {driver.make}
                  </label>
                  <div className="font-semibold text-base mt-5">
                    Model:
                    <label className="tracking-wide font-normal text-base">
                      <br></br>
                      {driver.model}
                    </label>
                    <div className="font-semibold text-base mt-5">
                      Year:
                      <label className="tracking-wide font-normal text-base">
                        <br></br>
                        {driver.year}
                      </label>
                      <div className="font-semibold text-base mt-5">
                        Kilometers:
                        <label className="tracking-wide font-normal text-base">
                          <br></br>
                          {driver.kilometers}
                        </label>
                        <div className="font-semibold text-base mt-5">
                          Next Service:
                          <label className="tracking-wide font-normal text-base">
                            <br></br>
                            {driver.nextservice}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <form>
            <textarea
              class="mt-5 resize-none form-control w-full border border-solid border-gray-300 rounded h-36"
              placeholder="Comment Here"
            ></textarea>
          </form>
          <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
      </div>
    );
}


export default DriverVehicle;