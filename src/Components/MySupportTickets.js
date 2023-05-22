import React,{useState,useEffect} from "react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import moment from 'moment'
import "../index.css";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
const MySupportTickets = () => {
  const [data, setData] = useState([]);
  // const userId = JSON.parse(localStorage.getItem('user-info')).user.id;
  let userId = null;
  const authToken = Cookies.get("auth_token");
  if (authToken) {
    const decodedToken = jwt_decode(authToken,'c7711fd3469672d2cc5000a6a875db274411e9a6e522c52a3634a83fb8291db9')
    userId = decodedToken.user_id; // Assuming the user ID is stored in the 'sub' claim of the JWT
  }
  useEffect(() => {
    axios.get(`http://my-geekyants-dashboard.test/api/supportticket/${userId}`)
      .then(response => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // const nameValuePairs = [
  //   {
  //     name: `Request For Monitor`,
  //     date: "Created At: 17th Aug 22 at 11:20 am",
  //     verifiedOrNot: 1,
  //   },
  //   {
  //     name: `Request For Keyboard and Mouse`,
  //     date: "Created At: 24th May 22 at 3:05 pm",
  //     verifiedOrNot: 1,
  //   },
  // ];
  return (
    <>
     
      <div className="card-outermost-div">
        <div className=" card-div ">
          <div className=" card-heading p-4">
            My Support Tickets
          </div>
          <Scrollbars style={{ height: 435 }}>
            {data.map((item) => (
              <>
                <a
                  target="blank"
                  href="https://my.geekyants.com/support-ticket"
                  classname="flex items-center justify-between"
                >
                  <div className="flex  p-4 card justify-between ">
                    <div className="h-30 w-30 w-1/2 ">
                      <div className="text-[#40566F]">{item.title}</div>
                      <small className="text-[#828D99]">Created At: { moment(item.created_at).format('Do MMMM YY')} at {moment(item.created_at).format('h:mm a')}</small>
                    </div>
                    <div className=" flex items-center justify-center  ">
                      {item.status ? (
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
