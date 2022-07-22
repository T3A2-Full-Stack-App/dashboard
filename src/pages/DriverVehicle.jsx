import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Header } from "../components";
import UserContext from '../contexts/userContext';

const DriverVehicle = () => {
  const { userData } = useContext(UserContext)
  const [vehicleData, setVehicleData] = useState([])
  const [thisDriverData, setThisDriverData] = useState([])
  const [newKilometers, setKilometers] = useState([])
  const [newCondition, setCondition] = useState([])

  useEffect(() => {
    async function getThisDriver(driverEmail) {
      const res = await fetch(`http://localhost:3405/api/v1/drivers/get/${driverEmail}/find`)
      setThisDriverData(await res.json())
    }
    getThisDriver(userData.user.email)
  }, [])
  

    async function getVehicle(registration) {
      const res = await fetch(`http://localhost:3405/api/v1/vehicles/${registration}`)
      setVehicleData(await res.json())
    }
    getVehicle(thisDriverData.vehicleRegistration)

      
        const submitKilometers = async (e, vehicleData) => {
          e.preventDefault();
          console.log(newKilometers)
        axios.put(
            `http://localhost:3405/api/v1/vehicles/driver/${vehicleData.registration}`,
          {
            kilometers: newKilometers,
            nextService: vehicleData.nextService
          }
        ).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
        }
  
  const submitCondition = async (e, vehicleData) => {
    e.preventDefault();
        console.log(newCondition)
        axios.put(
            `http://localhost:3405/api/v1/vehicles/condition/${vehicleData.registration}`,
          {
            condition: newCondition,
          }
        ).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    }


  
    return (
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
            <Header title="My Vehicle" />

              <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
                Registration:
                <br></br>
                {vehicleData.registration}
                <label className="tracking-wide font-normal text-base">
                  Make:
                  <br></br>
                  {vehicleData.make}
                </label>
                <label className="tracking-wide font-normal text-base">
                  Model:
                  <br></br>
                  {vehicleData.model}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Year:
                  <br></br>
                  {vehicleData.year}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Kilometers:
                  <br></br>
                  {vehicleData.kilometers}
                </label>
                <label className="tracking-wide font-normal text-base mt-5">
                  Next Service:
                  <br></br>
                  {vehicleData.nextservice}
              </label>
              <label className="tracking-wide font-normal text-base mt-5">
                  Condition Report:
                  <br></br>
                  {vehicleData.condition}
                </label>
              </div>
        
          <form onSubmit={e => submitKilometers(e, vehicleData)}>
          <div className="font-medium text-lg mt-5">Enter Kilometers</div>
          <input
            className="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="kilometers"
            type="text"
              placeholder="Enter Kilometers"
              onChange={(e) => {setKilometers(e.target.value)}}
          ></input>
          <button type="Submit" className="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Submit
            </button>
            </form>
          <div className="font-medium text-lg mt-5">
            Enter Vehicle Condition Report
          </div>
          <form onSubmit={e => submitCondition(e, vehicleData)}>
            <textarea
              className="py-3 px-4 resize-none form-control w-full border border-solid bg-gray-200 border-gray-300 rounded h-36"
              placeholder="Enter Condition Report"
              onChange={(e) => {setCondition(e.target.value)}}
            ></textarea>
          <button type="Submit" className="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Submit
            </button>
            </form>
        </div>
      </div>
    );
}


export default DriverVehicle;