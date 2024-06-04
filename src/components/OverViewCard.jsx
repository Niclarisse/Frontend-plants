import React from "react";

const OverViewCard = ({ total, text, icon }) => {
  return (
    <div className="bg-white px-5 pt-2 w-[384px] rounded-md shadow-md h-[112px]">
      <div className="flex gap-10">
        <div className="w-[32px] h-[32px] rounded-full border flex justify-center items-center">
          {icon}
        </div>
        <div>
          <p className="text-[22px] font-semibold text-[#030229cc]">
            {total || 0}
          </p>
          <p className="text-base text-[#030229d0] pt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default OverViewCard;
