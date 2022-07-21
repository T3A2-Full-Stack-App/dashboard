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
    width: "100",
    textAlign: "Center",
    },
  {
    field: "email",
    headerText: "Email",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "firstName",
    headerText: "Firstname",
    width: "50",
    textAlign: "Center",
  },
    {
    field: "lastName",
    headerText: "Lastname",
    width: "50",
    textAlign: "Center",
  },
  {
    field: "vehicleRegistration",
    headerText: "Vehicle Registration",
    width: "70",
    textAlign: "Center",
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
      </div>
      </div> 
      
      </>
  );
  
};
export default Drivers;
