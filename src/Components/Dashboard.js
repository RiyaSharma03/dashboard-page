import React,{useEffect} from "react";
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
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";



function Dashboard() {
  const navigate = useNavigate();
  const authToken=Cookies.get("auth_token");
  useEffect(() => {
    if(!Cookies.get("auth_token")){
      navigate('/');
    }
  }, [])
  
  return (
    <>
      {authToken ? (
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
