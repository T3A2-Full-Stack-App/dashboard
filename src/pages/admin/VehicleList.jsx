import React from "react";
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

import { vehicleData, vehicleGrid } from "../../data/adminlist";
import { Header } from "../../components";

const VehicleList = () => {
  return (
    <div className="container mx-auto m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-2xl">
      <Header title="Vehicle List" />

      <GridComponent
        id="gridcomp"
        dataSource={vehicleData}
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
          services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
      <div className="flex justify-center">
        <Link to="/assign-vehicle">
          <button class="mt-2 h-8 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-15 rounded-lg focus:shadow-outline">
            Assign Driver Vehicle
          </button>
        </Link>
      </div>
    </div>
  );
};
export default VehicleList;
