import React, { useState } from "react";
import product from "../assets/images/product-1-1 (1).png";
import { ShippingAddressForm } from "./Forms/ShippingForm";
import { PaymentMethodForm } from "./Forms/PaymentForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import LogoIcons from "../assets/images/Logo_1.png";
import { Carousel, Steps } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Checkout = () => {
  const { cartItems, is_plants_loading } = useSelector((state) => state.plants);
  console.log("plants", cartItems?.plants);
  const navigate = useNavigate();
  const [plantId,setPlantId]=useState(null);
  return (
    <div className="w-full">
      {/* <NavBar/> */}
      {/* <SubHeader/> */}
      <div className="flex justify-between bg-white shadow-md px-10 py-1 fixed top-0 z-10 w-full">
        <div className="logo cursor-pointer " onClick={() => navigate("/")}>
          <img src={LogoIcons} width={200} />
        </div>
        <div className="w-1/3 p-4">
          <Steps
            current={1}
            items={[
              {
                title: "Carts"
              },
              {
                title: "Checkout"
              },
              {
                title: "Delivery"
              }
            ]}
          />
        </div>
      </div>
      <div className="w-[80%] bg-white gap-4 m-auto flex mt-32 relative">
        <div className="w-[60%] bg-white border px-20 py-4 border-gsray-400">
          <div className="mt-20">
            <h1 className="text-lg font-semibold py-4">Select payment</h1>
            <div>{/* <ShippingAddressForm /> */}</div>
            <div className="mt-5">
              <PaymentMethodForm />
            </div>
          </div>
        </div>
        <div className="w-[40%] fixed top-[6rem] p-3 right-4 bg-gray-100 ">
          {cartItems?.plants?.map((el) => {
            return (
              <div className="flex gap-5 p-5 mt-3">
                <div className="relative">
                  <Carousel autoplay>
                    <div>
                      {el?.plant?.images?.map((img) => {
                        return (
                          <img
                            src={img?.url}
                            width={50}
                            height={50}
                            alt="Picture of the Logo"
                            className="border border-orange-300 p-1 rounded-sm"
                          />
                        );
                      })}
                    </div>
                  </Carousel>
                  <div className="w-6 h-6 rounded-full bg-gray-500 text-center absolute top-[-7px] right-[-7px]">
                    <span className="text-[12px] text-white">{el?.count}</span>
                  </div>
                </div>
                <div className="mt-4 w-[20rem]">
                  <p>{el?.plant?.title}</p>
                </div>
                <div className=" mt-3"></div>
                <div className="mt-4 ">
                  <p>{el?.price} rwf</p>
                </div>
              </div>
            );
          })}
          {/* <div className="mt-5 ml-5 mr-10">
            <h1 className="py-3 font-semibold text-lg ">Payment Details</h1>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Sub Total <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Shipping <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Total <span>3000 Rfw</span>
            </p>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;
