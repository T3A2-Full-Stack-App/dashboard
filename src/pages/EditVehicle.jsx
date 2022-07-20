import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditVehicle = () => {

    const [vehicleData, setVehicleData] = useState([])

    useEffect(() => {
        async function getVehicleData() {
            const res = await fetch('http://localhost:3405/api/v1/vehicles')
            setVehicleData(await res.json())
        }
        getVehicleData()
    }, [])

    


    return (
        
        <div className="flex gap-10 flex-wrap justify-center">
            <div
                className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
            >
                <div className="flex justify-between">
                    <p className="font-semibold text-3xl"></p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="mt-10 "></div>
                    </div>
                </div>

                <label className="tracking-wide font-normal text-base">
                    Select Vehicle by Registration:

                    <select
                        class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="registration"
                        type="text"
                    >
                        {vehicleData.map(vehicle =>
                            `<option value="{vehicle.registration}">
                            ${vehicle.registration}
                            </option>`
                        )
                        }
                        
                    </select>
                </label>

                <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
                    <label className="tracking-wide font-normal text-base">
                        Registration:
                        <input
                            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="kilometers"
                            type="text"
                            placeholder="Enter Kilometers"
                        ></input>
                    </label>
                    <label className="tracking-wide font-normal text-base">
                        Make:
                        <input
                            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="kilometers"
                            type="text"
                            placeholder="Enter Kilometers"
                        ></input>
                    </label>
                    <label className="tracking-wide font-normal text-base">
                        Model:
                        <input
                            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="kilometers"
                            type="text"
                            placeholder="Enter Kilometers"
                        ></input>
                    </label>
                    <label className="tracking-wide font-normal text-base">
                        Kilometers:
                        <input
                            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="kilometers"
                            type="text"
                            placeholder="Enter Kilometers"
                        ></input>
                    </label>
                    <label className="tracking-wide font-normal text-base">
                        Next Service:
                        <input
                            class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="kilometers"
                            type="text"
                            placeholder="Enter Kilometers"
                        ></input>
                    </label>
                </div>



                <label className="tracking-wide font-normal text-base">
                    Condition:
                    <textarea
                        class=" resize-none form-control w-full border border-solid bg-gray-200 border-gray-300 rounded h-36"
                        placeholder="Comment Here"
                    ></textarea>
                </label>

                <button class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
                    Save
                </button>
                <button class="relative left-2 h-8 px-4 ml-2 text-sm bg-red-400 hover:bg-red-500 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
                    Delete
                </button>

                <Link
                    to="/vehicles"
                    className="flex justify-center font-medium mt-8 text-teal-500 hover:text-teal-200 "
                >
                    Back to Vehicle Lists
                </Link>
            </div>
        </div>
    )
}


export default EditVehicle;