import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "../index.css";
const MyComponent = (props) => {
  const { empName, empImage } = props;
  return (
    <div className="">
      {empName.map((element, i) => (
        <>
          <div className="flex flex-row justify-between items-center p-2 w-full  card">
            <div className="flex flex-row  items-center">
              <img
                className="w-8 h-8 object-cover rounded-full mr-2"
                src={empImage[i]}
                alt="No img available"
              />
              <div className="flex flex-col ">
                <span className="text-[#596F88]">{element}</span>
                <small className="text-[#828D99]">Happy Birthday</small>
              </div>
            </div>

            <img
              className="w-8 h-8 object-cover rounded-full mr-2"
              src="https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-600x600w.jpg.webp"
              alt="No img available"
            />
          </div>
        </>
      ))}
    </div>
  );
};

const UpcomingBirthdays = () => {
  const nameValuePairs = [
    {
      name: ["Samarth Goel", "Logeshwaran D"],
      date: "Today",
      image: [
        "https://website-admin.geekyants.com/user-image/samarthg.png",
        "https://website-admin.geekyants.com/user-image/logeshwaran.png",
      ],
    },
    {
      name: ["Ishleen Kaur"],
      date: "Tomorrow",
      image: ["https://website-admin.geekyants.com/user-image/ishleen.png"],
    },
    {
      name: ["Sebastian M F"],
      date: "6 May",
      image: ["https://website-admin.geekyants.com/user-image/sebastian.png"],
    },
    {
      name: ["Vivek Kulkarni"],
      date: "7 May",
      image: ["https://website-admin.geekyants.com/user-image/vivek.png"],
    },
  ];

  return (
    <div className="card-outermost-div">
      <div className="card-div p-4">
        <div className="card-heading">
          Upcoming Birthdays
        </div>
        <Scrollbars style={{ height: 435 }}>
          <div className="">
            {nameValuePairs.map((item) => (
              <>
                <div className="flex flex-row  p-2 align-center justify-between m-2  text-[#727E8C]">
                  <div className="  w-full">
                    <div className=" ">{item.date}</div>
                    <MyComponent empName={item.name} empImage={item.image} />
                  </div>
                </div>
                <hr />
              </>
            ))}

            <hr />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
  // }
};

export default UpcomingBirthdays;
