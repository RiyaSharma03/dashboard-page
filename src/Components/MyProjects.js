import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

function MyProjects() {
  const projects = [
    {
      sno: "#1967",
      name: "CoinUp",
      date: "Thu, 2nd Dec 2021",
      pm: "",
    },
    {
      sno: "#2087",
      name: ["Academy Portal"],
      date: "Mon, 2nd May 2022",
      pm: "",
    },
    {
      sno: "#2089",
      name: ["Academy Portal - Development Phase"],
      date: "Mon, 2nd May 2022",
      pm: "Raghavendra HJ",
    },
    {
      sno: "#2246",
      name: ["CoinUp - CoinUp_Staff Augmentation"],
      date: "Thu, 2nd Sept 2022",
      pm: "",
    },
    {
      sno: "787",
      name: ["Hiring Drive"],
      date: "Tue, 1st May 2018",
      pm: "Sarwar Imam",
    },
  ];
  return (
    <div className="p-4  w-1/3 rounded-lg cardmd:w-1/2 cardsm:w-full">
      <div className=" rounded-lg bg-[#fff] shadow-lg shadow-slate-500/50">
        <div className=" p-4 leading-5 text-[#475f7b] font-normal text-xl tracking-wider capitalize">
          My Projects
        </div>
        <Scrollbars style={{ height: 435 }}>
          {projects.map((item, i) => (
            <>
              <div className="  p-4 text-[#727E8C]">
                <text className="text-[#5A8DEE] text-xl">
                  {item.sno} &nbsp;
                </text>
                <text className="text-[#5A8DEE] text-lg">{item.name}</text>
                {item.pm ? <p> PM - {item.pm}</p> : ""}
                <p>{item.date}</p>
              </div>
              <hr />
            </>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default MyProjects;
