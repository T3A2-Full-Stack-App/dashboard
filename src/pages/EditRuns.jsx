import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";

const EditRuns = () => {
  const [runsData, setRunsData] = useState([]);

  async function getRun(name) {
    const res = await fetch(`http://localhost:3405/api/v1/runs/${name}`);
    setRunsData(await res.json());
    console.log(runsData);
  }

  const navigate = useNavigate();
  const [name, setName] = useState(runsData.name);
  const [area, setArea] = useState(runsData.area);
  //   const [userEmail, setUserEmail] = useState(runsData.user);

  const [routeData, setRouteData] = useState([]);
  useEffect(() => {
    async function getRouteData() {
      const res = await fetch("http://localhost:3405/api/v1/runs");
      setRouteData(await res.json());
    }
    getRouteData();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const editRuns = {
      name,
      area,
      //   userEmail,
    };
    axios
      .put(`http://localhost:3405/api/v1/runs/${name}`, editRuns)
      .then((response) => {
        console.log(response);
        e.preventDefault();
        navigate("/runs");
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
  };

  const deleteRuns = (runId, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3405/api/v1/runs/${runId}`)
      .then((response) => {
        navigate("/runs");
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
  };

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <Header title="Edit Runs" />
          <div className="flex justify-between">
            <p className="font-semibold text-3xl"></p>
            <div className="flex flex-wrap items-center gap-4"></div>
          </div>

          <label className="tracking-wide text-base font-bold">
            Select Runs by Route Name:
            <select
              required
              className="appearance-none font-normal block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              onChange={(e) => getRun(e.target.value)}
            >
              {runsData.map((run) => (
                <option key={run.name} value={run.name}>
                  {run.name}
                </option>
              ))}
            </select>
          </label>
          <form onSubmit={submit}>
            <div className="tracking-wide font-normal text-base mt-5 grid grid-cols-3 gap-4 content-around">
              <label className="tracking-wide font-normal text-base">
                Route Name:
                <input
                  required
                  class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="String"
                  placeholder={runsData.name}
                ></input>
              </label>
              <label className="tracking-wide font-normal text-base">
                Location:
                <input
                  required
                  class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="area"
                  type="String"
                  placeholder={runsData.area}
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                ></input>
              </label>
              {/* <label className="tracking-wide font-normal text-base">
                User Email:
                <input
                  class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="userEmail"
                  type="String"
                  placeholder={runsData.userEmail}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </label> */}
            </div>
            <div classname="width-auto">
              <button
                className="static h-8 px-6 ml-64 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                type="submit"
              >
                Save
              </button>

              <button
                className="h-8 ml-16 mb-4 px-4 text-sm bg-red-400 hover:bg-red-500 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
                onClick={(e) => deleteRuns(runsData._id, e)}
              >
                Delete
              </button>
            </div>
          </form>
          <Link
            to="/runs"
            className="flex justify-center font-medium file:mt-8 text-teal-500 hover:text-teal-200 "
          >
            Back to Runs Lists
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditRuns;
