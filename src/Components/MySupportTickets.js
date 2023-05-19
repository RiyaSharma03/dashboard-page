import React,{useState,useEffect} from "react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import moment from 'moment'
import "../index.css";

const MySupportTickets = () => {
  const [data, setData] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user-info')).user.id;
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
