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

import { scheduleData } from "../data/runsData";

const DriverSchedule = () => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-xl">Driver Schedule</p>
    </div>
  );
};

export default DriverSchedule;
