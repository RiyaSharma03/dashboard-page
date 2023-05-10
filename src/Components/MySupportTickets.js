import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "../index.css";
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
    <>
     
      <div className="card-outermost-div">
        <div className=" card-div ">
          <div className=" card-heading p-4">
            My Support Tickets
          </div>
          <Scrollbars style={{ height: 435 }}>
            {nameValuePairs.map((item) => (
              <>
                <a
                  target="blank"
                  href="https://my.geekyants.com/support-ticket"
                  classname="flex items-center justify-between"
                >
                  <div className="flex  p-4 card justify-between ">
                    <div className="h-30 w-30 w-1/2 ">
                      <div className="text-[#40566F]">{item.name}</div>
                      <small className="text-[#828D99]">{item.date}</small>
                    </div>
                    <div className=" flex items-center justify-center  ">
                      {item.verifiedOrNot ? (
                        <span className="rounded bg-[#d2ffe8] text-[#39da8a] p-1 px-3 text-xs">
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
    </>
  );
};

export default MySupportTickets;
