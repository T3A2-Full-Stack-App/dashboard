import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components";

function NewRuns() {

  const navigate = useNavigate();

  const [runsdata, setRunsData] = useState({
    name: "",
    area: "",
    // userEmail: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setRunsData({
      ...runsdata,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRunsData({
      name: "",
      area: "",
    //   userEmail: "",
    });

    const RunsData = {
      name: runsdata.name,
      area: runsdata.area,
    //   userEmail: runsdata.userEmail,
    };
    axios
      .post("https://fleetwizzard.herokuapp.com/api/v1/runs", RunsData)
      .then((response) => {
        console.log(response);
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
    <div className="mr-5 flex gap-10 flex-wrap justify-center">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <Header title="New Run" />
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Route Name"
              type="String"
              name="name"
              value={runsdata.name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Location"
              type="String"
              name="area"
              value={runsdata.area}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            class="h-8 px-4 ml-80 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
          >
            Create Run
          </button>
          <Link
            to="/runs"
            className="flex justify-center font-medium mt-8 text-blue-500 hover:text-blue-700 "
          >
            Back to Runs Lists
          </Link>
        </form>
      </div>
    </div>
  );
}

export default NewRuns;
