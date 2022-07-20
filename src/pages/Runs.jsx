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

import { runsData, runsGrid } from "../data/runsData";
import { Header } from "../components";

const Runs = () => {
  return (
    <div className="container mx-auto m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-2xl">
      <Header title="Plan Runs" />
      <GridComponent
        id="gridcomp"
        dataSource={runsData}
        allowPaging
        allowSorting
        toolbar={["Search", "Add", "Edit", "Delete", "Update", "Cancel"]}
        editSettings={{
          allowAdding: true,
          allowDeleting: true,
          allowEditing: true,
        }}
        mode="EditMode.Normal"
        width="auto"
        allowTextWrap={true}
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
    </div>
  );
};
export default Runs;
