import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components";

function NewVehicle() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
    year: "",
    registration: "",
    kilometers: "",
    nextService: "",
    condition: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      firstName: "",
      lastName: "",
      make: "",
      model: "",
      year: "",
      registration: "",
      kilometers: "",
      nextService: "",
      condition: "",
    });

    const driverData = {
      firstName: data.firstName,
      lastName: data.lastName,
      make: data.make,
      model: data.model,
      year: data.year,
      registration: data.registration,
      kilometers: data.kilometers,
      nextService: data.nextService,
      condition: data.condition,
    };
    axios
      .post("https://fleetwizzard.herokuapp.com/api/v1/vehicles", driverData)
      .then((response) => {
        console.log(response);
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
  };

  return (
    <div className="mr-5 flex gap-10 flex-wrap justify-center">
      <div className="flex justify-center">
        
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
            <Header title="New Vehicle" />
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Make:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ford"
              type="String"
              name="make"
              value={data.make}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Model:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Transit"
              type="String"
              name="model"
              value={data.model}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Year:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="2022"
              type="Number"
              name="year"
              value={data.year}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ABC123"
              type="String"
              name="registration"
              value={data.registration}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Kilometers:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="10000"
              type="Number"
              name="kilometers"
              value={data.kilometers}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Next Service:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="15000"
              type="Number"
              name="nextService"
              value={data.nextService}
              onChange={handleChange}
            />
          </div>
           <div className="mt-3 mb-4 -space-y-px">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Condition:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Satisfactory"
              type="String"
              name="condition"
              value={data.condition}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            class="h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline"
          >
            Submit
          </button>
          <Link
            to="/vehicles"
            className="flex justify-center font-medium mt-8 text-blue-500 hover:text-blue-700 "
          >
            Back to Vehicle Lists
          </Link>
        </form>
      </div>
    </div>
  );
}

export default NewVehicle;
