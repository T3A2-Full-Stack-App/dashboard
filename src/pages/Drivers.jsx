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

import { driverData, driverGrid } from "../data/driverInfo";
import { Header } from "../components";

const Drivers = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
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
          {driverGrid.map((item, index) => (
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
export default Drivers;
