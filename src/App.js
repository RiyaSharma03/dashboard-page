import "./index.css";
import React from "react";
import MyTeam from "./Components/MyTeam";
import UpcomingHolidays from "./Components/UpcomingHolidays";
import AllocatedSeats from "./Components/AllocatedSeats";
import MyProjects from "./Components/MyProjects";
import MySupportTickets from "./Components/MySupportTickets";
import UpcomingBirthdays from "./Components/UpcomingBirthdays";
import Sidebar from "./Components/Sidebar";

function App() {
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

export default App;
