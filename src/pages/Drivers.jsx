import React, { useEffect, useState } from "react";
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
    width: "125",
    textAlign: "Center",
    },
  {
    field: "email",
    headerText: "Email",
    width: "160",
    textAlign: "Center",
  },
  {
    field: "firstName",
    headerText: "Firstname",
    width: "160",
    textAlign: "Center",
  },
    {
    field: "lastName",
    headerText: "Lastname",
    width: "160",
    textAlign: "Center",
  },
  {
    field: "vehicle",
    headerText: "Vehicle Registration",
    width: "160",
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


  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <>
    <div className="container mt-50 mx-auto m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Drivers" />
      <GridComponent
        id="gridcomp"
        dataSource={driverData}
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
      </div> 
      </>
  );
  
};
export default Drivers;
