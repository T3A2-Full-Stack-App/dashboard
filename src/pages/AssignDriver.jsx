import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";


const AssignDriver = () => {
    const navigate = useNavigate();

    const [driverData, setDriverData] = useState([])
    useEffect(() => {
        async function getDriverData() {
            const res = await fetch('http://localhost:3405/api/v1/drivers')
            setDriverData(await res.json())
        }
        getDriverData()
    }, [])

    const [thisDriverData, setThisDriverData] = useState([])
    async function getThisDriver(driverEmail) {
       const res = await fetch(`http://localhost:3405/api/v1/drivers/get/${driverEmail}/find`)
                setThisDriverData( await res.json())
                console.log(thisDriverData)
    }

    const [vehicleData, setVehicleData] = useState([])
    useEffect(() => {
        async function getVehicleData() {
            const res = await fetch('http://localhost:3405/api/v1/vehicles')
            setVehicleData(await res.json())
        }
        getVehicleData()
    }, [])

    const [thisVehicleData, setThisVehicleData] = useState([])
    async function getThisVehicle(registration) {
        const res = await fetch(`http://localhost:3405/api/v1/vehicles/${registration}`)
        setThisVehicleData(await res.json())
        console.log(thisVehicleData)
    }

    const pairDriverVehicle = (e, driver, vehicle) => {
        e.preventDefault()
        const driverEmail = { driverEmail: driver.email }
        const vehicleReg = { vehicleRegistration: vehicle.registration }
        
        
        // Put Request to update the driver info the vehicle model
        axios.put(`http://localhost:3405/api/v1/vehicles/assigndriver/${vehicle.registration}`,
        driverEmail
        ).then((response) => {
            console.log(response)
            
        })

        // Put Request to update the vehicle info the driver model
        axios.put(`http://localhost:3405/api/v1/drivers/${driver._id}`,
        vehicleReg
        ).then((response) => {
            console.log(response)
            navigate('/drivers')
            
        })

    }


    return (
        <>
            <div className="flex gap-10 flex-wrap justify-center">
                <div
                    className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
                >
                    <Header title="Assign Vehicle to Driver" />

                    <label className="tracking-wide text-base font-bold">
                        Select driver by email:
                    </label>
                    <form onSubmit={(e) => pairDriverVehicle(e, thisDriverData, thisVehicleData)}>
                    <select
                        required
                        className="appearance-none font-normal block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="email"
                        type="text"
                        onChange={(e) => getThisDriver(e.target.value)}
                    >
                        {driverData.map(driver =>
                            <option key={driver.email} value={driver.email}>{driver.email}</option>
                        )}
                    </select>

                    <label className="tracking-wide text-base font-bold">
                        Select vehicle by registration:
                    </label>
                    <select
                        required
                        className="appearance-none font-normal block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="registration"
                        type="text"
                        onChange={(e) => getThisVehicle(e.target.value)}
                    >
                        {vehicleData.map(vehicle =>
                            <option key={vehicle.registration} value={vehicle.registration}>{vehicle.registration}</option>
                        )}
                    </select>
                    <label className="tracking-wide text-base font-normal">
                        Vehicle Details
                    </label>
                    <ul>
                        <li>Make: {thisVehicleData.make}</li>
                        <li>Model: {thisVehicleData.model}</li>
                        <li>Year: {thisVehicleData.year}</li>
                        </ul>
                        
                            <button className="h-8 px-14  mt-8 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                                type="submit"
                            >
                                Save
                            </button>
                    </form> 
                    <Link
                        to="/drivers"
                        className="flex justify-end font-medium file:mt-2 text-blue-500 hover:text-blue-700 "
                    >
                        Back to Driver Lists
                    </Link>
                    <Link
                        to="/vehicles"
                        className="flex justify-end font-medium file:mt-2 text-blue-500 hover:text-blue-700 "
                    >
                        Back to Vehicle Lists
                    </Link>
                </div>
            </div >
        </>
    )
}


export default AssignDriver;