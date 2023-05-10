import React from "react";
import {
  MyTeam,
  UpcomingBirthdays,
  UpcomingHolidays,
  MyProjects,
  MySupportTickets,
  AllocatedSeats,
  Sidebar,
} from "./index";
function Dashboard() {
  return (
    <>
      <div className=" component ">
        <div className=" burger:block ">
          <Sidebar />
        </div>
        <div className="main-component">
          <MyTeam />
          <UpcomingHolidays />
          <AllocatedSeats />
          <MyProjects />
          <MySupportTickets />
          <UpcomingBirthdays />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
