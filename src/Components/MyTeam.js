import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const MyTeam = () => {
  
  return (
    <div className="p-4  w-1/3 rounded-lg cardmd:w-1/2 cardsm:w-full ">
      <div className=" rounded-lg bg-[#fff] shadow-lg shadow-slate-500/50">
        <div className=" px-4 pt-4 leading-5 text-[#475f7b] font-normal text-xl tracking-wider capitalize">
          My Team
        </div>
        <Scrollbars style={{ height: 400 }}>
          <div className="mx-4">
            <div className=" px-2 text-[#BAC0C7]">My Reporting Manager</div>
            <div className="flex flex-row m-2 py-4 px-2 items-center hover:bg-slate-100">
              <img
                className="w-8 h-8 object-cover rounded-full mr-2"
                src="https://website-admin.geekyants.com/user-image/raghavendra.png"
                alt="No img available"
              />
              <text className="flex flex-col">
                <span className="text-[#40566F]">Raghavendra H J</span>
                <small className="text-[#828D99]">Reporting Manager</small>
              </text>
            </div>
            <hr />

            <div className="m-2 px-2 text-[#BAC0C7]">My HR Buddy</div>
            <div className="flex flex-row  items-center px-2 py-4 m-2 hover:bg-slate-100">
              <img
                className="w-8 h-8 object-cover rounded-full mr-2"
                src="https://website-admin.geekyants.com/user-image/shrutim.png"
              />
              <text className="flex flex-col">
                <span className="text-[#40566F]"> Shruti Mohandas</span>

                <small className="text-[#828D99]">HR Buddy</small>
              </text>
            </div>
          </div>
        </Scrollbars>
        <div className=" h-10 bg-[#5A8DEE] flex  items-center justify-center rounded rounded-t-none">
          <a
            type="button"
            className="block  rounded text-[#FFFFFF]"
            href="https://timesheet.geekyants.com/log-timesheet"
            target="_blank"
          >
            Mark My Attendance
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
