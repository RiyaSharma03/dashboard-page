import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const UpcomingHolidays = () => {
  const nameValuePairs = [
    {
      name: `Buddha Purnima`,
      date: "Fri, 5th May 2023",
      optionalOrNot: 1,
    },
    {
      name: `Eid-al-Adha`,
      date: "Thu, 29th Jun 2023",
      optionalOrNot: 1,
    },
    {
      name: `Independence Day`,
      date: "Tue, 15th Aug 2023",
      optionalOrNot: 0,
    },
    {
      name: `Parsi New Year`,
      date: "Wed, 16th Aug 2023",
      optionalOrNot: 1,
    },
    {
      name: `Onam`,
      date: "Tue, 29th Aug 2023",
      optionalOrNot: 1,
    },
    {
      name: `Janamashtami`,
      date: "Thu, 7th Sep 2023",
      optionalOrNot: 1,
    },
    {
      name: `Ganesh Chaturthi`,
      date: "Tue, 19th Sep 2023",
      optionalOrNot: 1,
    },
    {
      name: `Eid E Milad`,
      date: "Thu, 28th Sep 2023",
      optionalOrNot: 1,
    },
    {
      name: `Gandhi Jayanti`,
      date: "Mon, 2nd Oct 2023",
      optionalOrNot: 0,
    },
    {
      name: `Dussehra`,
      date: "Tue, 24th Oct 2023",
      optionalOrNot: 0,
    },
    {
      name: `Karnataka Rajyotsava`,
      date: "Wed, 1st Nov 2023",
      optionalOrNot: 0,
    },
    {
      name: `Diwali (Bali Pratipada)`,
      date: "Tue, 14th Nov 2023",
      optionalOrNot: 1,
    },
    {
      name: `Thanksgiving`,
      date: "Thu, 23rd Nov 2023",
      optionalOrNot: 1,
    },
    {
      name: `Guru Nanak Jayanti`,
      date: "Mon, 27th Nov 2023",
      optionalOrNot: 1,
    },
    {
      name: `Kanakadasa Jayanti`,
      date: "Thu, 30th Nov 2023",
      optionalOrNot: 1,
    },
    {
      name: `Christmas`,
      date: "Mon, 25th Dec 2023",
      optionalOrNot: 0,
    },
  ];
  return (
    <div className="p-4  w-1/3 rounded-lg cardmd:w-1/2 cardsm:w-full">
      <div className="bg-[#fff] rounded-lg p-4 shadow-lg shadow-slate-500/50">
        <div className="  flex flex-row  justify-between items-center ">
          <div className=" leading-5 text-[#475f7b] font-normal text-xl tracking-wider capitalize">
            Upcoming Holidays
          </div>
          <a
            href="https://www.zoho.com/peopleplus/?zsrc=fromproduct#files/companyfile/listview"
            target="blank"
            className="font-normal text-xs pr-2 text-[#5a8dee]"
          >
            <text>View All</text>
          </a>
        </div>
        <Scrollbars style={{ height: 435, color: "skyblue" }}>
          {/* <div className="overflow-y-scroll max-h-96 scrollbar-thumb-gray-300 scrollbar-track-red-100"> */}
          {nameValuePairs.map((item) => (
            <>
              <div className="flex flex-row items-center  justify-between my-4  text-[#727E8C]">
                <text>{item.date}</text>
                <div className="flex flex-col text-right  items-end ">
                  {item.optionalOrNot ? (
                    <span className="bg-[#ffeed9] text-[#fdac41] text-center items-right rounded px-2 py-0.5 w-24 text-sm ">
                      OPTIONAL
                    </span>
                  ) : (
                    ""
                  )}
                  <text>{item.name}</text>
                </div>
              </div>
              <hr />
            </>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};

export default UpcomingHolidays;
