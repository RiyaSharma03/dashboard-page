import React, { useState, useEffect } from "react";
import axios from "axios";
import payslip from "../Assets/payslip.png";
import { GrFormNext } from "react-icons/gr";
import { Sidebar, Login } from "./index";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useUser } from './UserContext';
import { useNavigate } from "react-router-dom";
import "../index.css";
const localizer = momentLocalizer(moment);

function MyToolbar(props) {
  const { date, onNavigate } = props;

  const handlePrev = () => {
    onNavigate("PREV");
  };

  const handleNext = () => {
    onNavigate("NEXT");
  };

  return (
    <div className="flex items-center justify-between  mb-4">
      <button
        onClick={handlePrev}
        className="text-base text-[#fff] bg-[#5A8DEE] py-2 px-4 rounded"
      >
        PREV
      </button>
      <div className="text-[#475F7B]  font-normal text-lg">
        {moment(date).format("MMMM YYYY")}
      </div>
      <button
        onClick={handleNext}
        className="text-base text-[#fff] bg-[#5A8DEE] py-2 px-4  rounded"
      >
        NEXT
      </button>
    </div>
  );
}

const Bonus = () => {
  // const { userId } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  let userId = null;
  const authToken = Cookies.get("auth_token");
  if (authToken) {
    const decodedToken = jwt_decode(authToken,'c7711fd3469672d2cc5000a6a875db274411e9a6e522c52a3634a83fb8291db9')
    userId = decodedToken.user_id; // Assuming the user ID is stored in the 'sub' claim of the JWT
  }
  
  useEffect(() => {
    if(!Cookies.get("auth_token")){
      navigate('/');
    }
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .get(`http://my-geekyants-dashboard.test/api/bonus/${userId}`, { headers })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {Cookies.get("auth_token") ? (
        <div className=" component">
          <div className=" burger:block ">
            <Sidebar />
          </div>
          <div className="main-component ">
            <div className="w-screen p-0 card-outermost-div">
              <div className="flex flex-wrap justify-start items-center pt-6">
                <text className="border-r border-[#727E8C] text-[#475f7b] text-xl pl-6 tracking-wider font-normal">
                  Bonus &nbsp;
                </text>
                <img src={payslip} width="40px" className="px-2" />
                <GrFormNext />
                <text className="pl-2 text-[#5A8DEE]">Bonus</text>
              </div>
              <div className="bg-[#fff] m-12 mt-6 rounded p-8 shadow-lg min-w-screen shadow-slate-500/50 bonus-screen-sizes">
                <Calendar
                  localizer={localizer}
                  style={{ height: 450 }}
                  className="calendar-style"
                  components={{
                    toolbar: MyToolbar,
                  }}
                />
              </div>
              <div className="bg-[#fff] m-12 text-[#475F7B] text-sm rounded p-8 mb-10 shadow-lg shadow-slate-500/50 bonus-screen-sizes">
                <text className="mb-0 text-xl tracking-wider font-normal">
                  Bonuses
                </text>
                <table className="table-auto p-4 w-full">
                  <thead className="td-padding-bonus">
                    <tr className="border-b border-gray-300 p-4">
                      <td className="td-padding-bonus">TYPE</td>
                      <td className="td-padding-bonus">PROJECT</td>
                      <td className="td-padding-bonus">DATE</td>
                      <td className="td-padding-bonus">EXTRA HOURS</td>
                      <td className="td-padding-bonus">STATUS</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="td-padding-bonus">{item.type}</td>
                        <td className="td-padding-bonus">{item.title}</td>
                        <td className="td-padding-bonus">{item.date}</td>
                        <td className="td-padding-bonus">{item.duration}</td>
                        <td className="td-padding-bonus">
                          {item.status ? (
                            <>
                              <div className="">
                                <text className="px-2  bg-[#d2ffe8] text-[#39da8a] rounded">
                                  Approved
                                </text>
                                <text>By RM</text>
                              </div>
                              <div className="">
                                <text className="px-2  bg-[#d2ffe8] text-[#39da8a] rounded">
                                  Approved
                                </text>
                                <text>From XP</text>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <navigate to="/login"/>
      )}
    </>
  );
};

export default Bonus;
