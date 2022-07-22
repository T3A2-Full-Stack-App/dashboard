import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
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

import { employeesData } from "../data/dummy";
import { Header } from "../components";
import axios from "axios";
import UserContext from "../contexts/userContext";
import { useStateContext } from "../contexts/ContextProvider";



const Drivers = () => {

  const columnHeaders = [
  {
    field: "_id",
    headerText: "Employee ID",
    width: "80",
    textAlign: "Left",
    },
  {
    field: "email",
    headerText: "Email",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "firstName",
    headerText: "Firstname",
    width: "50",
    textAlign: "Left",
  },
    {
    field: "lastName",
    headerText: "Lastname",
    width: "50",
    textAlign: "Left",
  },
  {
    field: "vehicleRegistration",
    headerText: "Vehicle Registration",
    width: "80",
    textAlign: "Left",
  },
    {
    field: "runName",
    headerText: "Run",
    width: "70",
    textAlign: "Left",
  }
  ];


  const [driverData, setDriverData] = useState([])

  useEffect(() => {
    async function getDriverData() {
      const res = await fetch('http://localhost:3405/api/v1/drivers')
      setDriverData(await res.json())
    }
    getDriverData()
  }, [])


  return (
    <>
    <div className="container mt-50 mx-auto m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Drivers" />
      <GridComponent
        id="gridcomp"
          dataSource={driverData}
        allowFiltering
        allowPaging
        allowSorting
        toolbar={["Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {columnHeaders.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
          />
          
        </GridComponent>
           <div className="flex justify-end pt-5">
        <Link to="/vehicle/assign">
          <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Assign Vehicle to Driver
          </button>
          </Link>
                  <Link to="/runs/assign">
          <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Assign Driver to Run
          </button>
          </Link>
      </div>
      </div> 
      
      </>
  );
  
};
export default Drivers;
