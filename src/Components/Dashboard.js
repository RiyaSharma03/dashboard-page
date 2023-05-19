import React from "react";
import {
  MyTeam,
  UpcomingBirthdays,
  UpcomingHolidays,
  MyProjects,
  MySupportTickets,
  AllocatedSeats,
  Sidebar,
  Login
} from "./index";

function Dashboard() {
  return (
    <>
      {localStorage.getItem("user-info") ? (
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
      ) : <Login/>}
    </>
  );
}

export default Dashboard;
