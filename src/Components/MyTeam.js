import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from 'axios';
import '../index.css';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
const MyTeam = () => {
  const [data, setData] = useState([]);
  let userId = null;
  const authToken = Cookies.get("auth_token");
  if (authToken) {
    const decodedToken = jwt_decode(authToken,'c7711fd3469672d2cc5000a6a875db274411e9a6e522c52a3634a83fb8291db9')
    userId = decodedToken.user_id; // Assuming the user ID is stored in the 'sub' claim of the JWT
  }
  useEffect(() => {
    axios.get(`http://my-geekyants-dashboard.test/api/user/${userId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="card-outermost-div">
      <div className=" card-div ">
        <div className="card-heading p-4">
          My Team
        </div>
        <Scrollbars style={{ height: 400 }}>
          <div className="mx-4">
            <div className=" px-2 text-[#BAC0C7]">My Reporting Manager</div>
            <div className="my-team-card ">
              <img
                className=" my-team-img"
                src="https://website-admin.geekyants.com/user-image/raghavendra.png"
                alt="No img available"
              />
              <text className="flex flex-col">
                <span className="text-[#566678]">{data.manager_name}</span>
                <small className="text-[#828D99]">Reporting Manager</small>
              </text>
            </div>
            <hr />

            <div className=" mt-2 px-2 text-[#BAC0C7]">My HR Buddy</div>
            <div className="my-team-card ">
              <img
                className=" my-team-img"
                src="https://website-admin.geekyants.com/user-image/shrutim.png"
              />
              <text className="flex flex-col">
                <span className="text-[#40566F]"> {data.hr_buddy_name}</span>

                <small className="text-[#828D99]">HR Buddy</small>
              </text>
            </div>
          </div>
        </Scrollbars>
        <div className=" h-10 bg-[#5A8DEE] flex items-center justify-center rounded rounded-t-none">
          <a
            type="button"
            className="block rounded text-[#FFFFFF]"
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
