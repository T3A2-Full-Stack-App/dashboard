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
import { Header } from "../components";

const Runs = () => {

  const runsGrid = [
  {
    field: "name",
    headerText: "Route",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "area",
    headerText: "Location",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "driverEmail",
    headerText: "Driver",
    width: "130",
    textAlign: "Center",
  },
];
  const [runsData, setRunsData] = useState([]);

  useEffect(() => {
    async function getRunsData() {
      const res = await fetch("http://localhost:3405/api/v1/runs");
      setRunsData(await res.json());
    }
    getRunsData();
  }, []);

  return (
    <>
      <div className="container mx-auto m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-2xl">
        <Header title="Runs" />
        <GridComponent
          id="gridcomp"
          dataSource={runsData}
          allowFiltering
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
        >
          <ColumnsDirective>
            {runsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>

          <Inject
            services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
          />
        </GridComponent>
        <div className="flex justify-end pt-5">
          <Link to="/runs/new">
            <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
              New Runs
            </button>
          </Link>
          <Link to="/runs/edit">
            <button class="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
              Edit Runs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Runs;
