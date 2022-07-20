import React, { useState } from "react";
import { Link } from "react-router-dom";

function AssignVehicle() {
  // const [firstName, setFirstname] = useState("");
  // const [lastName, setLastname] = useState("");
    const [user, setUser] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [registration, setRegistration] = useState("");
  const [nextService, setNextService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFirstname("");
    // setLastname("");
    setMake("");
    setModel("");
    setYear("");
    setRegistration("");
    setNextService("");
    // console.log(firstName);
    // console.log(lastName);
    console.log(make);
    console.log(model);
    console.log(year);
    console.log(registration);
    console.log(nextService);

    // code send to database
    fetch("api/v1/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // firstName,
        // lastName,
        user,
        make,
        model,
        year,
        registration,
        nextService,
      })
        .then((response) => response.json())
    });
  };

  return (
    <div className="mr-5 flex gap-10 flex-wrap justify-center">
      <form
        className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
      >
        <div className="flex justify-center">
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            New Vehicle
          </h2>
        </div>
        <Link
          to="/vehicles"
          className="font-medium text-teal-500 hover:text-teal-200 "
        >
          Back to Vehicle Lists
        </Link>
        {/* <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div> */}
        <div className="mt-3 mb-4 -space-y-px">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Driver Name:
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
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
        <button
          onClick={handleSubmit}
          type="submit"
          class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
        >
          Assign
        </button>
      </form>
    </div>
  );
}

export default AssignVehicle;
