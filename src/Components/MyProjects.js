import React,{useState,useEffect} from "react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import moment from "moment";
import { format } from 'date-fns';
import '../index.css';

function GetDayFromDate(props) {
  const { date } = props;
  const dateString = new Date(date);
  const day = format(dateString, 'EEE');
  return day;
}
function MyProjects() {
  const [data, setData] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user-info')).user.id;
  useEffect(() => {
    axios.get(`http://my-geekyants-dashboard.test/api/project/${userId}`)
      .then(response => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // const projects = [
  //   {
  //     sno: "#1967",
  //     name: "CoinUp",
  //     date: "Thu, 2nd Dec 2021",
  //     pm: "",
  //   },
  //   {
  //     sno: "#2087",
  //     name: ["Academy Portal"],
  //     date: "Mon, 2nd May 2022",
  //     pm: "",
  //   },
  //   {
  //     sno: "#2089",
  //     name: ["Academy Portal - Development Phase"],
  //     date: "Mon, 2nd May 2022",
  //     pm: "Raghavendra HJ",
  //   },
  //   {
  //     sno: "#2246",
  //     name: ["CoinUp - CoinUp_Staff Augmentation"],
  //     date: "Thu, 2nd Sept 2022",
  //     pm: "",
  //   },
  //   {
  //     sno: "787",
  //     name: ["Hiring Drive"],
  //     date: "Tue, 1st May 2018",
  //     pm: "Sarwar Imam",
  //   },
  // ];
  return (
    <div className="card-outermost-div">
      <div className=" card-div">
        <div className="card-heading p-4">
          My Projects
        </div>
        <Scrollbars style={{ height: 435 }}>
          {data.map((item, i) => (
            <>
              <div className="  p-4 text-[#727E8C]">
                <text className="text-[#5A8DEE] text-xl">
                  {item.id} &nbsp;
                </text>
                <text className="text-[#5A8DEE] text-lg">{item.title}</text>
                {item.pm ?  <p> PM - {item.pm}</p> : ""}
                <div className="flex">
                <GetDayFromDate date={item.date} />
              <p>,{moment(item.date).format('Do MMMM YYYY')}</p>
              </div>
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
