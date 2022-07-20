import React, { useState } from "react";
import { Link } from "react-router-dom";

function AssignVehicle() {
  const [user, setUser] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [registration, setRegistration] = useState("");
  const [nextService, setNextService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(make);
    console.log(model);
    console.log(year);
    console.log(registration);
    console.log(nextService);

    // code send to database
    // fetch("URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    // user,
    // make,
    // model,
    // year,
    // registration,
    // nextService,
    //   })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // })
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="mt-16 bg-white-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-center">
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Assign Driver Vehicle
          </h2>
        </div>
        <Link
          to="/vehicles"
          className="font-medium text-teal-500 hover:text-teal-200 "
        >
          Back to Vehicle Lists
        </Link>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Driver:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Driver Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Make:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Car Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Model:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Car Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Year:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Model Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Car Registration"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Next Service:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Kilometers"
            value={nextService}
            onChange={(e) => setNextService(e.target.value)}
          />
        </div>
        <button class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
          Assign
        </button>
      </form>
    </div>
  );
}

export default AssignVehicle;
