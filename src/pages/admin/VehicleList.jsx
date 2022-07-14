import React from "react";
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
    <div className="m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Vehicle List" />
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
    </div>
  );
};
export default VehicleList;
