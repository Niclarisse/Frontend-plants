import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const ProductCard = ({
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
  const truncate = (input) =>
    input.length > 40 ? `${input.substring(0, 40)}...` : input;
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
        className="w-full h-[17rem] bg-[#eeeff0] p-4 rounded-md flex items-center justify-center"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        {hidden ? (
          <img
            src={img1}
            alt=""
            className="w-full h-[17rem]  rounded-md mt-4 pb-4"
          />
        ) : (
          <img
            src={img2}
            alt=""
            className="w-full h-[17rem]  rounded-md mt-4 pb-4"
          />
        )}
      </div>
      <div className="px-4">
        <h1 className="font-bold text-lg text-center pt-3">{name}</h1>
        <p className="py-2">{truncate(description)}</p>
        {/* {amount &&<p>{amount} Rwf</p>} */}
        <div className="py-1 mt-2" onClick={onClick}>
          <Button name={btnName} color="" border={"red-500"} />
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

export default ProductCard;
