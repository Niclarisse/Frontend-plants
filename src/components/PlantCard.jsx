import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const PlantCard = ({
  status,
  img1,
  img2,
  name,
  description,
  amount,
  btnName,
  btnSecondName,
  onClick,
}) => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  return (
    <div className="shadow-md rounded-md ws-64 relative pb-3">
      <div
        className={`absolute top-2 ${
          status === "For Sale" && "bg-[#025222] "
        } ${status === "Sold" && "bg-red-500 "} ${
          status === "discount" && "bg-yellow-500 "
        } text-white px-1 py-0.5 rounded-md m-1`}
      >
        <p> {status}</p>
      </div>
      {/* <div className="absolute top-12 bg-red-500 px-2 py-0.5 rounded-md m-1">
            <p>-10%</p>
        </div> */}
      <div
        className="w-full h-52 bg-[#eeeff0] px-20 rounded-md flex items-center justify-center"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        {hidden ? (
          <img src={img1} alt="" className="w-full h-32  rounded-sm " />
        ) : (
          <img src={img2} alt="" className="w-full h-32  rounded-sm " />
        )}
      </div>
      <div className="px-4">
        <h1 className="font-bold text-lg ">{name}</h1>
        <p className="py-2">{description}</p>
        {amount && <p>{amount} Rwf</p>}
        <div className="py-1 mt-2" onClick={onClick}>
          <Button name={btnName} color="black" border={"red-500"} />
        </div>
        {hidden
          ? ""
          : btnSecondName && (
              <div
                className="absolute top-[10rem] w-full px-6 "
                onClick={onClick}
              >
                <Button
                  name={btnSecondName}
                  color="red-500"
                  bgColor={"white"}
                />
              </div>
            )}
      </div>
    </div>
  );
};

export default PlantCard;
