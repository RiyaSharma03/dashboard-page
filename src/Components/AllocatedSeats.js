import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import chair from "../Assests/chair.png"
import '../styles.css';
const AllocatedSeats=()=>{
  return (
    <div className="p-4  w-1/3 rounded-lg cardmd:w-1/2 cardsm:w-full splitcard:w-full">
    <div className=" rounded-lg bg-[#fff] shadow-lg shadow-slate-500/50 my-custom-class">
      <div className=" p-4 leading-5 text-[#475f7b] font-normal my-custom-class tracking-wider capitalize">
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
