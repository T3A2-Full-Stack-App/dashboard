import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Selection,
  Edit,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { DataManager } from '@syncfusion/ej2-data';
import { Header } from "../../components";
import UserContext from "../../contexts/userContext";
import { useStateContext } from "../../contexts/ContextProvider";

const vehicleGrid = [
  {
    field: "registration",
    headerText: "Registration",
    width: "130",
    textAlign: "Left",
  },
  {
    field: "driverEmail",
    headerText: "Driver",
    width: "200",
    textAlign: "Left",
  },
  {
    field: "make",
    headerText: "Make",
    width: "90",
    textAlign: "Left",
  },
  {
    field: "model",
    headerText: "Model",
    width: "90",
    textAlign: "Left",
  },
  {
    field: "year",
    headerText: "Year",
    width: "80",
    textAlign: "Left",
  },
  {
    field: "kilometers",
    headerText: "Kilometers",
    width: "120",
    textAlign: "Left",
  },
  {
    field: "nextService",
    headerText: "Next Service",
    width: "120",
    textAlign: "Left",
  },
  {
    field:  "kmRemaining",
    headerText: "Kilometers Until Service",
    width: "120",
    textAlign: "Left",
  },
  {
    field: "condition",
    headerText: "Condition Report",
    width: "140",
    textAlign: "Left",
  },
];

const VehicleList = () => {

const [vehicleData, setVehicleData] = useState([])

useEffect(() => {
  async function getVehicleData() {
    const res = await fetch('http://localhost:3405/api/v1/vehicles')
    setVehicleData(await res.json())
  }
  getVehicleData()
}, [])
  
  return (
    <>
    <div className="container mx-auto m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-2xl">
      <Header title="Vehicles" />
      <GridComponent
        id="gridcomp"
        dataSource={vehicleData}
        allowFiltering
        allowPaging
        allowSorting
        toolbar={["Search"]}
        editSettings={{ allowDeleting: false, allowEditing: false }}
        width="auto"
        allowTextWrap={true}
      >
        <ColumnsDirective>
          {vehicleGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[Page,  Search, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
      <div className="flex justify-end pt-5">
        <Link to="/vehicle/new">
          <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            New Vehicle
          </button>
          </Link>
          <Link to="/vehicle/edit">
          <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Edit Vehicle
          </button>
          </Link>
                  <Link to="/vehicle/assign">
          <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Assign Vehicle to Driver
          </button>
          </Link>
        </div>
        
      </div>
      </>
  );
};
export default VehicleList;
