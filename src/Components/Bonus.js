import React from "react";
import payslip from "../Assests/payslip.png";
import { GrFormNext } from "react-icons/gr";
import Sidebar from "./Sidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

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

function Bonus() {
  const events = [{ title: "Meeting", start: "6 Feb,2023" }];
  return (
    <>
      <div className=" flex flex-row  bg-[#f2f4f4] ">
        <div className=" burger:block ">
          <Sidebar />
        </div>
        <div className="flex flex-wrap h-screen overflow-scroll xl:w-full ">
          <div className="w-screen cardsm:w-full splitcard:w-full">
            <div className="flex flex-wrap justify-start items-center pt-6">
              <text className="border-r border-[#727E8C] text-[#475f7b] text-xl pl-6 tracking-wider font-normal">
                Bonus &nbsp;
              </text>
              <img src={payslip} width="40px" className="px-2" />
              <GrFormNext />
              <text className="pl-2 text-[#5A8DEE]">Bonus</text>
            </div>
            <div className="bg-[#fff] m-12 mt-6 rounded p-8 shadow-lg min-w-screen shadow-slate-500/50 sidebarCard:overflow-x-scroll burger:overflow-x-scroll cardsm:overflow-x-scroll">
              <Calendar
                localizer={localizer}
                style={{ height: 450 }}
                className="calendar-style"
                components={{
                  toolbar: MyToolbar,
                }}
              />
            </div>
            <div className="bg-[#fff] m-12 text-[#475F7B] text-sm rounded p-8 mb-10 shadow-lg shadow-slate-500/50 burger:overflow-x-scroll sidebarCard:overflow-x-scroll cardsm:overflow-x-scroll">
              <text className="mb-0 text-xl tracking-wider font-normal">
                Bonuses
              </text>
              <table className="table-auto p-4   w-full">
                <thead className="p-6">
                  <tr className="border-b border-gray-300 p-4">
                    <td className="p-6">TYPE</td>
                    <td className="p-6">PROJECT</td>
                    <td className="p-6">DATE</td>
                    <td className="p-6">EXTRA HOURS</td>
                    <td className="p-6">STATUS</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-6">Extra working hours bonus</td>
                    <td className="p-6">Jio EPSP - JIO -EPSP RM APP</td>
                    <td className="p-6">6 Feb 2023</td>
                    <td className="p-6">3.00</td>
                    <td className="p-6">
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
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6">Extra working hours bonus</td>
                    <td className="p-6">Jio EPSP - JIO -EPSP RM APP</td>
                    <td className="p-6">7 Feb 2023</td>
                    <td className="p-6">3.00</td>
                    <td className="p-6">
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
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6">Extra working hours bonus</td>
                    <td className="p-6">Jio EPSP - JIO -EPSP RM APP</td>
                    <td className="p-6">13 Feb 2023</td>
                    <td className="p-6">3.00</td>
                    <td className="p-6">
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bonus;
