import React from "react";
import { AiOutlineLogin } from "react-icons/ai";

const ButtonsContainer = () => {
  return (
    <div className="mt-[20px] ">
      <div className=" flex flex-col gap-[10px] items-center sm:w-[500px] ml-auto mr-auto">
        <button className="bg-[#007CBA] rounded-sm text-[#fff] py-[10px] w-full flex items-center justify-between px-[20px] font-[500] duration-300 border hover:border hover:border-[#007CBA] hover:text-[#007CBA] hover:bg-[#E8F6FF] ">
          Pay with UPI <AiOutlineLogin className="text-2xl" />
        </button>
        <p className="text-[#B6B6B6] font-[700]">OR</p>
        <button className="border border-[#557C8B] rounded-sm text-[#000] py-[10px] w-full flex items-center justify-between px-[20px] font-[500]">
          Payment with Other option <AiOutlineLogin className="text-2xl" />
        </button>
        <p className="text-[#B6B6B6]"> * Terms and conditions applied</p>
      </div>
    </div>
  );
};

export default ButtonsContainer;
