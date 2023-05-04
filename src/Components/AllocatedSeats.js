import React from "react";
import chair from "../Assests/chair.png"
const AllocatedSeats=()=>{
  return (
    <div className="p-4  w-1/3 rounded-lg  cardmd:w-1/2 cardsm:w-full">
    <div className="bg-[#fff] p-4 rounded-lg shadow-lg shadow-slate-500/50">
      <h4 className=" text-[#475f7b] font-normal text-xl tracking-wider capitalize ">Allocated Seat</h4>
       <div className=" m-8  h-10 flex flex-row align-center justify-center ">
        <img src={chair} alt="no img"/>
        <text className="text-[#727E8C] ">New Building, 2nd Floor - B4</text>
       </div>
    </div>
    </div>
  );
}

export default AllocatedSeats;
