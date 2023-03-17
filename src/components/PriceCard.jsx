import React from "react";

const PriceCard = ({ props, active }) => {
  console.log(active);
  return (
    <div
      className={` h-full w-full ${
        active ? "border-[#6B95A1] border" : "  border border-transparent"
      }   rounded-md  overflow-hidden duration-300 hover:border`}
    >
      <div
        className={`${
          active ? "bg-[#007CBA] text-[#fff]" : "text-[#B6B6B6]"
        }   font-[500] py-[10px]  flex items-center justify-center  duration-300 `}
      >
        {props.days}Days
      </div>
      <div className={`${active ? " bg-[#E8F6FF]" : "text-[#B6B6B6]"}`}>
        <div
          className={`  py-[10px]   flex items-center justify-center duration-300 `}
        >
          {props.perDayPrice} ₹
        </div>
        <div className="py-[10px] flex items-center justify-center ">
          {props.totalSaveing} ₹
        </div>
        <div className="py-[10px]  flex items-center justify-center  font-[600]">
          {props.totalAmount} ₹
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
