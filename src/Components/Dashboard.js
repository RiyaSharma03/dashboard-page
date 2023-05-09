import React from "react";
import MyTeam from "./MyTeam";
import UpcomingHolidays from "./UpcomingHolidays";
import AllocatedSeats from "./AllocatedSeats";
import MyProjects from "./MyProjects";
import MySupportTickets from "./MySupportTickets";
import UpcomingBirthdays from "./UpcomingBirthdays";
import Sidebar from "./Sidebar";
function Dashboard() {
  return (
    <>
      <div className=" flex flex-row  bg-[#f2f4f4] ">
        <div className=" burger:block ">
          <Sidebar />
        </div>
        <div className="flex flex-wrap h-screen overflow-scroll xl:w-full ">
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
