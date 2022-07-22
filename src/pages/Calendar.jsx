import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { Header } from "../components";

const Calendar = () => {

const scheduleData = [

  {
    Id: 3,
    Subject: "Drivers Meeting",
    Location: "Main Office",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "3B81F6",
  },
  {
    Id: 4,
    Subject: "Stocktake",
    Location: "Warehouse A",
    StartTime: "2021-01-13T03:00:00.000Z",
    EndTime: "2021-01-13T05:00:00.000Z",
    CategoryColor: "3B81F6",
  },
  {
    Id: 6,
    Subject: "GHK249 Van Service",
    Location: "Toyota Serivce Centre, Albion",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "3B81F6",
  },
  {
    Id: 10,
    Subject: "Stocktake",
    Location: "Warehouse A",
    StartTime: "2021-01-20T03:00:00.000Z",
    EndTime: "2021-01-20T05:00:00.000Z",
    CategoryColor: "3B81F6",
  },
  {
    Id: 12,
    Subject: "New Client Meeting",
    Location: "BoardRoom 2",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "3B81F6",
  },

  {
    Id: 14,
    Subject: "Drivers Meeting",
    Location: "BoardRoom",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "3B81F6",
  },
  {
    Id: 19,
    Subject: "Sales & Marketing Meeting",
    Location: "BoardRoom",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "3B81F6",
  },
];




  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
