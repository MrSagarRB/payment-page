import React, { useContext } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { TbCheck } from "react-icons/tb";
import PriceCard from "./PriceCard";
import ButtonsContainer from "./ButtonsContainer";
import data from "../utils/data.json";
import { ContextProvider } from "../context";

const Payment = () => {
  let { activeCard, setActiveCard, activeDaysCard, setActiveDaysCard } =
    useContext(ContextProvider);

  const daysCard = ["7", "15", "30"];

  return (
    <div className="h-screen min-w-[360px]">
      <div className=" flex items-center p-[18px] border-b-2 border-[#797979]">
        <div className="flex items-center  justify-center w-full relative">
          <BiLeftArrowAlt className="text-3xl text-[#797979] absolute left-0" />{" "}
          <p className="text-xl font-[500]">Payment </p>
        </div>
      </div>
      <div className=" flex flex-col  sm:max-w-[600px] ml-auto mr-auto sm:mt-[50px] px-[10px] ">
        <div className="  flex  py-[18px] text-[12px] md:text-[20px]   duration-500">
          {/* Col 1 */}
          <div className="h-full w-[25%]  mr-[10px]">
            <div className="py-[10px] flex items-center ">
              <p className="invisible">blank</p>{" "}
            </div>
            <div className="py-[10px] flex items-center ">Per Day Price</div>
            <div className="py-[10px] flex items-center">Total Saving</div>
            <div className=" py-[10px]  flex items-center font-[600]">
              Total Amount
            </div>
          </div>
          <div className="flex justify-between w-[75%]  ">
            {data.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="h-full w-full cursor-pointer"
                  onClick={() => {
                    setActiveCard(ind);
                  }}
                >
                  <PriceCard props={item} active={activeCard === ind} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[70px]  px-[10px] flex sm:items-center sm:justify-center gap-[10px]">
          {daysCard.map((item, ind) => {
            return (
              <div
                onClick={() => {
                  setActiveDaysCard(ind);
                }}
                key={ind}
                className={`${
                  activeDaysCard === ind
                    ? "border-[#5A8897] text-[#1079A8] font-[700]  bg-[#E8F6FF] cursor-pointer"
                    : " "
                } cursor-pointer h-full min-w-[90px] w-[150px] border  rounded-[4px] flex items-center justify-center font-[600] duration-300 shadow-lg z-10 relative`}
              >
                {activeDaysCard === ind && (
                  <div className="absolute -top-2 -right-2   z-50 border  rounded-full bg-[#E8F6FF] p-1 border-[#1079A8]">
                    <TbCheck />{" "}
                  </div>
                )}
                <p className=""> {item} Days</p>
              </div>
            );
          })}
        </div>
        {/* Buttons */}
        <ButtonsContainer />
      </div>
    </div>
  );
};

export default Payment;
