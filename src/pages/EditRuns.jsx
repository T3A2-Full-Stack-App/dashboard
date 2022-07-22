import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";

const EditRuns = () => {
  const navigate = useNavigate();
  const [newName, setNewName] = useState();
  const [newArea, setNewArea] = useState();

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


  const submit = async (e, runId) => {
    e.preventDefault();

    const newRun = {
      name: newName,
      area: newArea,
    };
    axios
      .put(`https://fleetwizzard.herokuapp.com/api/v1/runs/${runId}`, newRun)
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

  const deleteRun = (runId, e) => {
    e.preventDefault();
    console.log(runId)
    axios
      .delete(`https://fleetwizzard.herokuapp.com/api/v1/runs/${runId}`)
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
          <form onSubmit={(e) => submit(e, thisRunData._id)}>
            <div className="tracking-wide font-normal text-base  grid grid-cols-3 gap-4 content-around">
              <label className="tracking-wide text-base font-bold">
                Select Runs by Area:
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
                  onChange={(e) => setNewName(e.target.value)}
                  type="String"
                  placeholder={thisRunData.name}
                ></input>
              </label>
              <label className="tracking-wide font-normal text-base">
                Location:
                <input
                  required
                  class="appearance-none block w-52 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="area"
                  type="String"
                  placeholder={thisRunData.area}
                  onChange={(e) => setNewArea(e.target.value)}
                ></input>
              </label>
            </div>
            <button
              className="mt-2 static h-8 px-6 ml-64 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <button
              className="h-8 ml-16 mb-4 px-4 text-sm bg-red-400 hover:bg-red-500 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
              onClick={(e) => deleteRun(thisRunData._id, e)}
            >
              Delete
            </button>
          </form>
          <Link
            to="/runs"
            className="flex justify-center font-medium file:mt-8 text-blue-500 hover:text-blue-700 "
          >
            Back to Runs Lists
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditRuns;
