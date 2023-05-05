import React, { useState } from "react";
import dashboard from "../Assests/dashboard.gif";
import dashboardPic from "../Assests/dashboardPic.png";
import HR from "../Assests/HR.gif";
import man from "../Assests/man.png";
import check from "../Assests/check.gif";
import checkImg from "../Assests/check.png";
import ticketImg from "../Assests/ticket.png";
import ticket from "../Assests/ticket.gif";
import assets from "../Assests/assets.gif";
import assetsImg from "../Assests/assets.png";
import wifi from "../Assests/wifi.gif";
import wifiImg from "../Assests/wifi.png";
import shoppingcart from "../Assests/shoppingcart.gif";
import shoppingcartImg from "../Assests/shoppingcart.png";
import payslip from "../Assests/payslip.gif";
import payslipImg from "../Assests/payslip.png";
import salary from "../Assests/salary.gif";
import salaryImg from "../Assests/salary.png";
import bonus from "../Assests/bonus.gif";
import bonusImg from "../Assests/bonus.png";
import hammer from "../Assests/hammer.gif";
import hammerImg from "../Assests/hammer.png";
import time from "../Assests/time.gif";
import timeImg from "../Assests/time.png";
import smartphone from "../Assests/smartphone.gif";
import smartphoneImg from "../Assests/smartphone.png";
import skills from "../Assests/skills.gif";
import skillsImg from "../Assests/skills.png";
import cross from "../Assests/cross.gif";
import crossImg from "../Assests/cross.png";
import policy from "../Assests/policy.gif";
import policyImg from "../Assests/policy.png";
import logoants from "../Assests/logoants.svg";
import { FaBars } from "react-icons/fa";
import circle1 from "../Assests/circle1.png";
import circle2 from "../Assests/circle2.png";

import { AiOutlineClose } from "react-icons/ai";
function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);
  const handleHover = () => setIsHovering(true);
  const handleLeave = () => setIsHovering(false);
  const [open, setOpen] = useState(true);
  const [onHover, setOnHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
 
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setOpen(true);
  };
  const handleMouseEnter = () => {
    if (!open) {
      setOnHover(true);
      setOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (onHover) {
      setOpen(false);
      setOnHover(false);
    }
  };
  const menus = [
    { name: "Dashboard", link: "/", icon: dashboardPic, gif: dashboard },
    { name: "HR Buddy", link: "/", icon: man, gif: HR },
    { name: "Todo", link: "/", icon: checkImg, gif: check },
    { name: "Support Ticket", link: "/", icon: ticketImg, gif: ticket },
    { name: "Asset Requests", link: "/", icon: assetsImg, gif: assets },
    { name: "Internet Allowance", link: "/", icon: wifiImg, gif: wifi },
    {
      name: "My Reimburstments",
      link: "/",
      icon: shoppingcartImg,
      gif: shoppingcart,
    },
    { name: "Advance Payroll", link: "/", icon: payslipImg, gif: payslip },
    { name: "Salary", link: "/", icon: salaryImg, gif: salary },
    { name: "Bonus", link: "/", icon: bonusImg, gif: bonus },
    { name: "IT Savings", link: "/", icon: hammerImg, gif: hammer },
    { name: "Timesheet", link: "/", icon: timeImg, gif: time },
    { name: "Policies", link: "/", icon: policyImg, gif: policy },
    { name: "Assets", link: "/", icon: assetsImg, gif: assets },
    { name: "My Profile", link: "/", icon: man, gif: HR },
    { name: "My Contacts", link: "/", icon: smartphoneImg, gif: smartphone },
    { name: "My Skills", link: "/", icon: skillsImg, gif: skills },
    { name: "Log Out", link: "/", icon: crossImg, gif: cross },
  ];
  return (
    <>
      <div className="burger:block w-full  flex-row justify-between hidden ">
        <button
          className="text-[#40566F] m-2 focus:outline-none burger:block"
          onClick={handleToggleCollapse}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`flex gap-1 border-r-2 p-2 h-screen overflow-y-scroll burger:w-screen  scrollbar-hidden z-10 ${
          onHover ? "absolute" : ""
        } burger:absolute top-0 bg-[#f2f4f4] ${
          isCollapsed ? "hidden" : "block"
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` min-h-screen ${
            open ? "w-64" : "w-16"
          }  text-gray-100 p-2 `}
        >
          <div className=" flex justify-between items-center burger:items-center burger:w-screen">
            <img
              src={
                open
                  ? `https://my.geekyants.com/assets/images/logo/logo-dark.png`
                  : logoants
              }
              alt="no logo"
              className={`w-36 h-8 ${!open ? "w-8 " : ""}`}
            />
            <button
              className={`cursor-pointer text-[#40566F] burger:hidden  `}
              onClick={() => {
                setOpen(!open);
                setOnHover(true);
                if (onHover) {
                  setOpen(true);
                  setOnHover(false);
                }
              }}
            >
              {open ? (
                onHover ? (
                  <img src={circle1} width="30px" />
                ) : (
                  <img src={circle2} width="30px" />
                )
              ) : (
                ""
              )}
            </button>
            <button
              className="cursor-pointer text-[#40566F] burger:block hidden absolute right-3"
              onClick={handleToggleCollapse}
            >
              {open ? <AiOutlineClose /> : ""}
            </button>
          </div>

          {/* <Scrollbars style={{ height: 750 }} > */}
          <div className="flex flex-col items-center burger:items-center burger:w-screen ">
            <img
              className="w-12 h-12 object-cover rounded-full m-2"
              src="https://website-admin.geekyants.com/user-image/riyas.png"
              alt="No img available"
            />
            {open ? (
              <>
                <p className="text-[#8494A7] text-center ">Riya Sharma</p>
                <small className="text-[#828D99]">
                  Trainee Software Engineer
                </small>
              </>
            ) : (
              ""
            )}
          </div>
          <div className={`flex flex-col gap-2 relative py-4  text-[#8494A7] `}>
            {menus?.map((menu, i) => (
              <div
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center  justify-center content-center text-sm font-medium   rounded-md `}
              >
                <a
                  href="#"
                  onMouseEnter={() => {
                    setSelectedItem(i);
                    return handleHover();
                  }}
                  onMouseLeave={() => {
                    setSelectedItem(-1);
                    return handleLeave();
                  }}
                  className="p-2  flex flex-row  items-center w-full "
                >
                  <div className=" text-[#8494A7] mr-2">
                    {isHovering && selectedItem === i ? (
                      <img src={menu.gif} className="w-6 h-6 " />
                    ) : (
                      <img src={menu.icon} className="w-6 h-6  " />
                    )}
                  </div>
                  {isHovering || open ? (
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden ml-2"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                  ) : (
                    ""
                  )}
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    hhhh
                  </h2>
                </a>
              </div>
            ))}
          </div>
          {/* </Scrollbars> */}
        </div>
        {/* <div className="m-3 text-xl text-gray-900 font-semibold">
      REACT TAILWIND
    </div> */}
      </div>
    </>
  );
}

export default Sidebar;
