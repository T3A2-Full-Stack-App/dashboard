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
    width: "90",
    textAlign: "Left",
  },
  {
    field: "area",
    headerText: "Location",
    width: "90",
    textAlign: "Left",
  },
  {
    field: "driverEmail",
    headerText: "Driver",
    width: "90",
    textAlign: "Left",
  },
];
  const [runsData, setRunsData] = useState([]);

  useEffect(() => {
    async function getRunsData() {
      const res = await fetch("https://fleetwizzard.herokuapp.com/api/v1/runs");
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
            <button className="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
              New Run
            </button>
          </Link>
          <Link to="/runs/edit">
            <button className="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
              Edit Run
            </button>
          </Link>
          <Link to="/runs/assign">
            <button className="mt-2 h-8 px-4 mx-1 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
              Assign Driver to Run
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Runs;
