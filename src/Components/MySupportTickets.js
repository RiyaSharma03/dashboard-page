import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

const MySupportTickets = () => {
  const nameValuePairs = [
    {
      name: `Request For Monitor`,
      date: "Created At: 17th Aug 22 at 11:20 am",
      verifiedOrNot: 1,
    },
    {
      name: `Request For Keyboard and Mouse`,
      date: "Created At: 24th May 22 at 3:05 pm",
      verifiedOrNot: 1,
    },
  ];
  return (
    <div className="p-4 w-1/3 rounded-lg cardmd:w-1/2 cardsm:w-full ">
      <div className=" bg-[#fff]  rounded-lg shadow-lg shadow-slate-500/50">
        <div className="p-4  leading-5 text-[#475f7b] font-normal text-xl tracking-wider capitalize">
          My Support Tickets
        </div>
        <Scrollbars style={{ height: 435 }}>
          {nameValuePairs.map((item) => (
            <>
              <a
                target="blank"
                href="https://my.geekyants.com/support-ticket"
                classname="flex align-center justify-between"
              >
                <div className="flex flex-row  p-4 align-center   hover:bg-slate-100 justify-between ">
                  <div className="h-30 w-30 ">
                    <div className="text-[#40566F]">{item.name}</div>
                    <small className="text-[#828D99]">{item.date}</small>
                  </div>
                  <div className="w-3/4 flex align-center justify-center m-auto">
                    {item.verifiedOrNot ? (
                      <span className="rounded bg-[#d2ffe8] text-[#39da8a] text-sm">
                        VERIFIED & CLOSED
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </a>
              <hr />
            </>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};

export default MySupportTickets;
