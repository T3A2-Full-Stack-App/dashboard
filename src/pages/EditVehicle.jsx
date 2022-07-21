import { columnsPrepared } from "@syncfusion/ej2-react-grids";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'
import ErrorNotice from "../components/misc/ErrorNotice";

 const updateSuccess = () => (
    <FlashMessage duration={5000}>
        <strong>Vehicle has been successfully updated</strong>
    </FlashMessage>
    )

const EditVehicle = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [registration, setRegistration] = useState([])
    const [make, setMake] = useState([])
    const [model, setModel] = useState([])
    const [kilometers, setKilometers] = useState([])
    const [nextService, setNextService] = useState([])
    const [condition, setCondition] = useState([])

    const [vehiclesData, setVehiclesData] = useState([])
    useEffect(() => {
        async function getVehiclesData() {
            const res = await fetch('http://localhost:3405/api/v1/vehicles')
            setVehiclesData(await res.json())
        }
        getVehiclesData()
    }, [])

    const submit = async (e) => {
    e.preventDefault();
    try {
      const editedVehicle = { registration, make, model, kilometers, nextService, condition };
      const updateVehicleResponse = await axios.put(
        `http://localhost:3405/api/v1/vehicles/${registration}`,
        editedVehicle
      );
      render(updateSuccess, document.body)
    //   navigate("/vehicles");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
    };

    const [vehicleData, setVehicleData] = useState([])

    async function getVehicle(reg) {
        const res = await fetch(`http://localhost:3405/api/v1/vehicles/${reg}`)
        setVehicleData(await res.json())
    }


    return (
        <>
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

                    <label className="tracking-wide text-base font-bold">
                        Select Vehicle by Registration:
                        <select
                            required
                            className="appearance-none font-normal block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="registration"
                            type="text"
                            onChange={(e) => getVehicle(e.target.value)}
                        >
                            {vehiclesData.map(vehicle =>
                                <option key={vehicle.registration} value={vehicle.registration}>{vehicle.registration}</option>
                            )}

                        </select>
                    </label>
                    <form onSumit={submit}>
                        <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
                            <label className="tracking-wide font-normal text-base">
                                Registration:
                                <input
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="registration"
                                    type="text"
                                    placeholder={vehicleData.registration}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Make:
                                <input
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="make"
                                    type="text"
                                    placeholder={vehicleData.make}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Model:
                                <input
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="model"
                                    type="text"
                                    placeholder={vehicleData.model}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Kilometers:
                                <input
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="kilometers"
                                    type="number"
                                    placeholder={vehicleData.kilometers}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Next Service:
                                <input
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="nextService"
                                    type="number"
                                    placeholder={vehicleData.nextService}
                                ></input>
                            </label>
                            </div>
                            <label className="tracking-wide font-normal text-base">
                                Condition:
                                <textarea
                                    class=" resize-none form-control p-4 w-full border border-solid bg-gray-200 border-gray-300 rounded h-32"
                                    placeholder={vehicleData.condition}
                                ></textarea>
                            </label>
                        <button class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                            type="submit"
                            onClick={"submit"}
                        >
                                Save
                            </button>
                        <button
                            className="relative left-2 h-8 px-4 ml-2 text-sm bg-red-400 hover:bg-red-500 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                            type='delete'
                            onclick={'delete'}
                        >
                                Delete
                            </button>
                    </form>
                    <Link
                        to="/vehicles"
                        className="flex justify-center font-medium file:mt-8 text-teal-500 hover:text-teal-200 "
                    >
                        Back to Vehicle Lists
                    </Link>
                </div>
            </div >
        </>
    )
}


export default EditVehicle;