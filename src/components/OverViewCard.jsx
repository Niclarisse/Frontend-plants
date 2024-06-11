const OverViewCard = ({ total, text, icon }) => {
  return (
    <div className="bg-white px-3 pt-3 w-[384px] rounded-md shadow-md h-[112px]">
      <div className="flex gap-10 items-center mt-2">
        <div className=" ">{icon}</div>
        <div className="leading-3 flex flex-col items-center">
          <p className="text-[22px] font-semibold text-[#030229cc]">
            {total || 0}
          </p>
          <p className="text-base text-[#030229d0] font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default OverViewCard;
