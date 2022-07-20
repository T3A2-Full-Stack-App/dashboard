import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import { GrLocation } from "react-icons/gr";

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridDriverLocation = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Location}</span>
  </div>
);

export const driverGrid = [
  {
    headerText: "Driver Name",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Title",
    headerText: "Designation",
    width: "170",
    textAlign: "Center",
  },
  {
    headerText: "Run Location",
    width: "120",
    textAlign: "Center",
    template: gridDriverLocation,
  },

  {
    field: "HireDate",
    headerText: "Hire Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Reports To",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Driver ID",
    width: "125",
    textAlign: "Center",
  },
];

export const driverData = [
  {
    EmployeeID: 1,
    Name: "Tony Higgs",
    Title: "Driver",
    HireDate: "22/09/2018",
    Location: "Brisbane South",
    ReportsTo: "Mike Salisbury",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 2,
    Name: "Lucy Smith",
    Title: "Driver",
    HireDate: "03/03/2022",
    Location: "Sunshine Coast",
    ReportsTo: "Mike Salisbury",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 3,
    Name: "Earl Squirrelson",
    Title: "Driver",
    HireDate: "08/03/2019",
    Location: "Gold Coast",
    ReportsTo: "Mike Salisbury",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Matt Myers",
    Title: "Driver",
    HireDate: "12/05/2021",
    Location: "Brisbane North",
    ReportsTo: "Mike Salisbury",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 5,
    Name: "Mike Salisbury",
    Title: "Lead Driver",
    HireDate: "01/02/2017",
    Location: "Toowoomba",
    ReportsTo: "Michael Scott",
    EmployeeImage: avatar,
  },
];
