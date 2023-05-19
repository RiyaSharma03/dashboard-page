import React,{useState,useEffect} from "react";
import { Scrollbars } from "react-custom-scrollbars";
import chair from "../Assets/chair.png"
import axios from "axios";
import '../index.css';
const AllocatedSeats=()=>{
  const userId = JSON.parse(localStorage.getItem('user-info')).user.id;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://my-geekyants-dashboard.test/api/user/${userId}`)
      .then(response => {
        // console.log(response.data);
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
        Allocated Seat</div>
      
       <Scrollbars style={{ height: 100 }}>
       <div className=" m-6  h-8 flex  align-center justify-center text-center">
        {data.allocated_seat?<><img src={chair} alt="no img" /><text className="text-[#727E8C] px-2">New Building, 2nd Floor - B4</text></>:<div className="text-[#727E8C] ">No seat has been allocated yet.</div>}
       
       </div>
        </Scrollbars>
    </div>
    </div>
  );
}

export default AllocatedSeats;
