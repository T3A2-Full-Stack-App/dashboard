import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";


const AssignRun = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [area, setArea] = useState();
    const [driverEmail, setDriverEmail] = useState();

    const [runsData, setRunsData] = useState([]);
    useEffect(() => {
        async function getRunsData() {
            const res = await fetch("https://fleetwizzard.herokuapp.com/api/v1/runs");
            setRunsData(await res.json());
        }
        getRunsData();
    }, []);

    const [thisRunData, setThisRunData] = useState([]);
    async function getThisRun(area) {
        const res = await fetch(`https://fleetwizzard.herokuapp.com/api/v1/runs/${area}`);
        setThisRunData(await res.json());
        console.log(thisRunData);
    }

    const [driverData, setDriverData] = useState([])
    useEffect(() => {
        async function getDriverData() {
            const res = await fetch('https://fleetwizzard.herokuapp.com/api/v1/drivers')
            setDriverData(await res.json())
        }
        getDriverData()
    }, [])

    const [thisDriverData, setThisDriverData] = useState([])
    async function getThisDriver(driverEmail) {
        const res = await fetch(`https://fleetwizzard.herokuapp.com/api/v1/drivers/get/${driverEmail}/find`)
        setThisDriverData(await res.json())
        console.log(thisDriverData)
    }



    const pairDriverRun = (e, driver, run) => {
        e.preventDefault()
        const driverEmail = { driverEmail: driver.email }
        const runName = { runName: run.name }

        axios.put(`https://fleetwizzard.herokuapp.com/api/v1/runs/assigndriver/${run._id}`,
            driverEmail
        ).then((response) => {
            console.log(response)
        })

        axios.put(`https://fleetwizzard.herokuapp.com/api/v1/drivers/assignrun/${driver._id}`,
            runName
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
                    <Header title="Assign Driver to Run" />
                    <form onSubmit={(e) => pairDriverRun(e, thisDriverData, thisRunData)}>
                        <div className="tracking-wide font-normal text-base  grid grid-cols-3 gap-4 content-around">
                            <label className="tracking-wide text-base font-bold">
                                Select Run by Area:
                                <select
                                    required
                                    className="appearance-none font-normal w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 grid grid-cols-3 gap leading-tight focus:outline-none focus:bg-white"
                                    id="area"
                                    type="text"
                                    onChange={(e) => getThisRun(e.target.value)}
                                >
                                    {runsData.map((run) => (
                                        <option key={run.area} value={run.area}>
                                            {run.area}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="tracking-wide font-normal text-base">
                                Route Name:
                                <input
                                    required
                                    class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    type="String"
                                    value={thisRunData.name}
                                ></input>
                            </label>

                            <label className="tracking-wide text-base font-bold">
                                Select driver by email:
                            
                            <select
                                required
                                className="appearance-none font-normal block w-60 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-2 mb-3leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="text"
                                onChange={(e) => getThisDriver(e.target.value)}
                            >
                                {driverData.map(driver =>
                                    <option key={driver.email} value={driver.email}>{driver.email}</option>
                                )}
                                </select>
                                </label>

                        </div>
                        <button
                            className="mt-2 static h-8 px-6 ml-80 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                            type="submit"
                        >
                            Save
                        </button>
                    </form>
                    <Link
                        to="/runs"
                        className="flex justify-center font-medium  pr-4 pt-8 file:mt-8 text-blue-500 hover:text-blue-700 "
                    >
                        Back to Runs List
                    </Link>
                                        <Link
                        to="/drivers"
                        className="flex justify-center font-medium  pr-4 file:mt-8 text-blue-500 hover:text-blue-700 "
                    >
                        Back to Driver List
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AssignRun;
