import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import img from "../assets/images/pexels-mattycphoto-1113145.jpg";
import img2 from "../assets/images/product-1-1.png";
import img3 from "../assets/images/download (3).png";
import img4 from "../assets/images/product-8.png";
import { IoMdStar } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Button from "./Button";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/download (4).png";
import {
  fetchPlants,
  fetchSinglePlant,
} from "../redux/slices/plant/plantThunks";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
const ViewProducts = () => {
  const { plant, allplants, is_plants_loading } = useSelector(
    (state) => state.plants
  );
  const images = [img, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(
    plant?.images && plant?.images[0]?.url
  );

  const navigate = useNavigate();
  const { plantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSinglePlant(plantId)(dispatch);
  }, [plantId, dispatch]);
  useEffect(() => {
    if (plant?.images) {
      setCurrentImage(plant?.images[0]?.url);
    }
  }, [plant, plant?.images]);
  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);
  console.log("PLANT", plant);
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex justify-between w-full px-20 py-10 mt-32">
        <h1 className="text-2xl font-semibold text-center">Plant Details</h1>
        <p className="text-lg font-normal">Home /Plant /Details</p>
      </div>
      <div className="w-[85%] m-auto md:flex gap-5 h-[40rem]">
        <div className=" w-full md:w-2/5 h-full">
          <div className="w-full h-[70%] flex items-center justify-center bg-gray-200 rounded-lg">
            <img
              src={currentImage}
              alt=""
              className="w-[70%] h-[70%] rounded-lg"
            />
          </div>
          <div className="w-full h-[25%] mt-2 bg-gray-200 rounded-sm flex gap-5 justify-center items-center overflow-auto">
            {plant?.images?.map((el, i) => {
              return (
                <img
                  key={i}
                  src={el?.url}
                  onClick={() => {
                    el?.url && setCurrentImage(el?.url);
                  }}
                  alt=""
                  className="w-24 h-24 rounded-md border border-green-300 "
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 w-full md:w-1/2 ">
          <h1 className="text-[#030229] font-medium text-2xl underline pb-4">
            {plant?.title}
          </h1>
          <div className="flex flex-col gap-3 w-full ">
            <div className="text-[#030229] font-bold text-md py-1">
              Scientific name:
              <span className="font-medium text-sm pl-4">
                {plant?.scientificName}
              </span>
            </div>
            {plant?.commonName ? (
              <div className="text-[#030229] font-bold text-md ">
                {" "}
                Common name:{" "}
                <span className="font-medium text-sm pl-4 capitalize">
                  {" "}
                  {plant?.commonName}
                </span>
              </div>
            ) : (
              <div className="text-[#030229] font-bold text-md ">
                No common name for this plant
              </div>
            )}

            {plant?.partToUse.length > 0 && (
              <div className="flex gap-2 items-center">
                <span className="text-center pt-1 font-bold ">
                  Part To Use:
                </span>
                <span className="pl-[2rem] text-sm capitalize">
                  {plant?.partToUse?.join(" & ")}
                </span>
              </div>
            )}
            <div className="font-bold">
              Category:
              <span className="pl-[4rem] font-normal capitalize">
                {plant?.category}
              </span>
            </div>
            <div>
              <h1 className="text-[#030229] font-medium text-xl pt-2">
                Description:
              </h1>
              <p className="text-[#030229B2] text-justify pt-1">
                {plant?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-[30rem] md:mt-5 lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 w-[75%] m-auto">
        {plant?.medicinalUse.length > 0 ? (
          <div>
            {" "}
            <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
              Medicinal use:
            </h1>
            <ul className="text-[#030229B2] text-sm">
              {plant?.medicinalUse?.map((el, i) => {
                return (
                  <li key={i} className="list-disc py-1.5">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <span className="text-lg">No Medecinal use for this plant</span>
        )}

        <div>
          {" "}
          <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
            {" "}
            How To Use:{" "}
          </h1>
          <ul className="text-[#030229B2]">
            {plant?.howToUse.length > 0 ? (
              plant?.howToUse?.map((el, i) => {
                console.log("how", el);
                return (
                  <li key={i} className="list-disc py-1.5">
                    {el}
                  </li>
                );
              })
            ) : (
              <span> No specific way for use this plant</span>
            )}
          </ul>
        </div>

        <>
          <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
            {" "}
            A useful table for quick measurements:{" "}
          </h1>
          <ul className="text-[#030229B2]">
            {plant?.measurements?.length > 0 ? (
              plant?.measurements?.map((el, i) => {
                return (
                  <li key={i} className="list-disc py-1.5">
                    {el}
                  </li>
                );
              })
            ) : (
              <span>No specific measurements</span>
            )}
          </ul>
        </>

        {plant?.dosages?.all?.length > 0 ||
          plant?.dosages?.adults?.length > 0 ||
          (plant?.dosages?.children?.length > 0 ? (
            <div>
              <h1 className="text-[#030229] font-medium text-2xl text-center py-3">
                {" "}
                Dosages and preparation:{" "}
              </h1>
              <ul className="text-[#030229B2]">
                {plant?.dosages?.all?.map((el, i) => {
                  console.log("how", el);
                  return (
                    <li key={i} className="list-disc py-1.5">
                      {el}
                    </li>
                  );
                })}
              </ul>
              <ul className="text-[#030229B2]">
                {plant?.dosages?.adults?.map((el, i) => {
                  console.log("how", el);
                  return (
                    <li key={i} className="list-disc py-1.5">
                      {el}
                    </li>
                  );
                })}
              </ul>
              <ul className="text-[#030229B2]">
                {plant?.dosages?.children?.map((el, i) => {
                  console.log("how", el);
                  return (
                    <li key={i} className="list-disc py-1.5">
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            "No Dosage and preparation provided"
          ))}

        <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
          Side effects
        </h1>
        <ul className="text-[#030229B2]">
          {plant?.sideEffect?.length > 0 ? (
            plant?.sideEffect?.map((el, index) => {
              console.log("how", el);
              return (
                <li key={index} className="list-disc py-1.5">
                  {el}
                </li>
              );
            })
          ) : (
            <span className="text-lg">No side effect for this Plant</span>
          )}
        </ul>
        <div>
          {" "}
          <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
            {" "}
            Cautions:{" "}
          </h1>
          <ul className="text-[#030229B2]">
            {plant?.cautions.length > 0 ? (
              plant?.cautions?.map((el, i) => {
                console.log("how", el);
                return (
                  <li key={i} className="list-disc py-1.5">
                    {el}
                  </li>
                );
              })
            ) : (
              <span className="text-lg"> No cautions for this plant</span>
            )}
          </ul>
        </div>
        {plant?.precautions.length > 0 && (
          <div>
            {" "}
            <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
              {" "}
              precautions:{" "}
            </h1>
            <ul className="text-[#030229B2]">
              {plant?.precautions?.map((el, i) => {
                return (
                  <li key={i} className="list-disc py-1.5">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-[d60rem] lg:mtddd-[50rem] xl:mdt-[30rem] 2xl:dmt-80">
        <h1 className="text-2xl font-semibold text-center py-3">
          Related Plants
        </h1>
      </div>
      {is_plants_loading ? (
        <div className="grid grid-cols-4 gap-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
          {allplants.map((el, i) => {
            console.log("plant data", el);
            return (
              <ProductCard
                key={i}
                img1={el?.images[0]?.url}
                img2={el?.images[1]?.url}
                name={el?.title}
                amount={el?.price}
                btnName={"ReadMore"}
                // btnSecondName={"Add to cart"}
                description={el?.description}
                onClick={() => {
                  navigate(`/plant/view/${el?._id}`);
                  window.scrollTo(0, 0);
                }}
              />
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ViewProducts;
