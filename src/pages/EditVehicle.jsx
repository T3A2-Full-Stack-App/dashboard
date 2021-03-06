import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";


const EditVehicle = () => {

    const [vehicleData, setVehicleData] = useState([])

    async function getVehicle(registration) {
        const res = await fetch(`https://fleetwizzard.herokuapp.com/api/v1/vehicles/${registration}`)
        setVehicleData(await res.json())
    }

    const navigate = useNavigate();
    const [registration, setRegistration] = useState(vehicleData.registration)
    const [make, setMake] = useState(vehicleData.make)
    const [model, setModel] = useState(vehicleData.model)
    const [year, setYear] = useState(vehicleData.year)
    const [kilometers, setKilometers] = useState(vehicleData.kilometers)
    const [nextService, setNextService] = useState(vehicleData.nextService)
    const [condition, setCondition] = useState(vehicleData.setCondition)

    const [vehiclesData, setVehiclesData] = useState([])
    useEffect(() => {
        async function getVehiclesData() {
            const res = await fetch('https://fleetwizzard.herokuapp.com/api/v1/vehicles')
            setVehiclesData(await res.json())
        }
        getVehiclesData()
    }, [])


    const submit = async (e) => {
        e.preventDefault();
        const editedVehicle = { registration, make, model, year, kilometers, nextService, condition };
        axios.put(
            `https://fleetwizzard.herokuapp.com/api/v1/vehicles/${registration}`,
            editedVehicle
        ).then((response) => {
            console.log(response)
            e.preventDefault()
            navigate("/vehicles");
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

    const deleteVehicle = (vehicleId, e) => {
        e.preventDefault()
        axios.delete(
            `https://fleetwizzard.herokuapp.com/api/v1/vehicles/${vehicleId}`
        ).then((response) => {
            navigate("/vehicles");
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
        <>

            <div className="flex gap-10 flex-wrap justify-center">

                <div
                    className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
                >
                    <Header title="Edit Vehicle" />
                    <div className="flex justify-between">
                        <p className="font-semibold text-3xl"></p>
                        <div className="flex flex-wrap items-center gap-4">
                        </div>
                    </div>

                    <label className="tracking-wide text-base font-bold">
                        Select vehicle by registration:
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
                    <form onSubmit={submit}>
                        <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
                            <label className="tracking-wide font-normal text-base">
                                Registration:
                                <input
                                    required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="registration"
                                    value={registration}
                                    onChange={(e) => setRegistration(e.target.value)}
                                    type="String"
                                    placeholder={vehicleData.registration}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Make:
                                <input
                                    required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="make"
                                    type="String"
                                    placeholder={vehicleData.make}
                                    value={make}
                                    onChange={(e) => setMake(e.target.value)}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Model:
                                <input
                                    // required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="model"
                                    type="String"
                                    placeholder={vehicleData.model}
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Year:
                                <input
                                    required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="year"
                                    type="number"
                                    placeholder={vehicleData.year}
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Kilometers:
                                <input
                                    required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="kilometers"
                                    type="number"
                                    placeholder={vehicleData.kilometers}
                                    value={kilometers}
                                    onChange={(e) => setKilometers(e.target.value)}
                                ></input>
                            </label>
                            <label className="tracking-wide font-normal text-base">
                                Next Service:
                                <input
                                    // required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="nextService"
                                    type="number"
                                    placeholder={vehicleData.nextService}
                                    value={nextService}
                                    onChange={(e) => setNextService(e.target.value)}
                                ></input>
                            </label>
                        </div>
                        <label className="tracking-wide font-normal text-base">
                            Condition:
                            <textarea
                                required
                                name="nextService"
                                class=" resize-none form-control p-4 w-full border border-solid bg-gray-200 border-gray-300 rounded h-32"
                                placeholder={vehicleData.condition}
                                type='String'
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}

                            ></textarea>
                        </label>
                        <div classname="width-auto">
                            <button className="static h-8 px-6 ml-64 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                                type="submit"
                            >
                                Save
                            </button>

                            <button
                                className="h-8 ml-16 mb-4 px-4 text-sm bg-red-400 hover:bg-red-500 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                                onClick={(e) => deleteVehicle(vehicleData._id, e)}
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                    <Link
                        to="/vehicles"
                        className="flex justify-center font-medium file:mt-8 text-blue-500 hover:text-blue-700 "
                    >
                        Back to Vehicle Lists
                    </Link>
                </div>
            </div >
        </>
    )
}


export default EditVehicle;