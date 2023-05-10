import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import chair from "../Assets/chair.png"
import '../index.css';
const AllocatedSeats=()=>{
  return (
    <div className="card-outermost-div">
    <div className=" card-div ">
      <div className="card-heading p-4">
        Allocated Seat</div>
      
       <Scrollbars style={{ height: 100 }}>
       <div className=" m-6  h-8 flex  align-center justify-center text-center">
        <img src={chair} alt="no img"/>
        <text className="text-[#727E8C] px-2">New Building, 2nd Floor - B4</text>
       </div>
        </Scrollbars>
    </div>
    </div>
  );
}

export default AllocatedSeats;
