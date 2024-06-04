import React, { useEffect, useState } from "react";
import product from "../assets/images/pexels-photo-4036233.jpeg";
import { TfiMinus } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button, Checkbox, Steps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LogoIcons from "../assets/images/Logo_1.png";
import SubHeader from "./SubHeader";
import { deleteCart, fetchCart } from "../redux/slices/plant/plantThunks";
import { useDispatch, useSelector } from "react-redux";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toastMessage } from "../utils/toast";
import { api } from "../utils/helpers";

const { confirm } = Modal;
const ViewCart = () => {
  const { cartItems, is_plant_loading } = useSelector((state) => state.plants);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countProduct, setCountProduct] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const HandleCount = () => {
    setCountProduct(countProduct + 1);
  };
  const HandleRemoveCount = () => {
    setCountProduct(countProduct - 1);
  };
  useEffect(() => {
    fetchCart()(dispatch);
  }, [dispatch]);

  const DeleteCart = async () => {
    await api
      .delete("/user/empty-cart")
      .then((res) => {
        setLoading(false);
        toastMessage("success", res.statusText);
        navigate("/shop");
        console.log("msgesssss", res);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
        console.log("msg", error);
        toastMessage("success", error);
      });

    fetchCart()(dispatch);
  };
  console.log("cartItems", cartItems);
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this Cart?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteCart();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <div className="w-full">
      <SubHeader />
      <Modal
        title=<h1>Delete Cart</h1>
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div></div>
      </Modal>
      <div className="flex justify-between bg-white shadow-md px-10 py-1">
        <div className="logo cursor-pointer " onClick={() => navigate("/")}>
          <img src={LogoIcons} width={200} />
        </div>
        <div className="w-1/3 p-4">
          <Steps
            current={0}
            items={[
              {
                title: "Carts",
              },
              {
                title: "Checkout",
              },
              {
                title: "Delivery",
              },
            ]}
          />
        </div>
      </div>
      <div className="w-full lg:w-[80%] px-5 lg:px-0 lg:m-auto md:flex gap-5 ">
        <div className="w-full md:w-[70%] bg-white   mt-10 p-3">
          <div className="flex justify-between border border-gray-200 shadow-md px-3">
            <h1 className="p-5 ">
              Selcted Plant ({cartItems.plants && cartItems.plants.length}{" "}
              items)
            </h1>
            <h1 className="text-lg font-medium p-5 ">
              Total:{" "}
              <span className="text-orange-500">
                {cartItems?.cartTotal} Price
              </span>
            </h1>

            <div className=" sm:flex items-center space-x-4 p-5">
              {/* <div className="bg-orange-100 ml-7 pt-[5px] pl-[5px] mt-10 sm:mt-2 rounded-full hover:bg-red-300  cursor-pointer h-8 w-8" onClick={showDeleteConfirm}> */}
              {is_plant_loading ? (
                <Spin
                  indicator={<LoadingOutlined spin size={25} color="black" />}
                  className="text-black"
                />
              ) : (
                <MdDelete
                  color="orange"
                  size={30}
                  onClick={showDeleteConfirm}
                />
              )}
              {/* </div> */}
            </div>
          </div>
          {cartItems.plants &&
            cartItems.plants?.map((el) => {
              console.log("el.plant.images.length", el.plant.images.length);
              return (
                <div className="flex gap-5 border border-gray-200 shadow-md p-5">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" className="mr-5" />
                  </div>
                  {el.plant.images.length > 0 && (
                    <img
                      src={el?.plant?.images[0]?.url}
                      width={80}
                      height={80}
                      alt="Picture of the Logo"
                      className="border border-orange-300 p-1 rounded-sm"
                    />
                  )}
                  <p className="mt-5 sm:mt-10 w-[20rem]">{el?.plant?.title}</p>
                </div>
              );
            })}
          <div className="mt-28">
            {" "}
            <Button
              className="w-full bg-orange-400 text-base cursor-pointer hover:bg-blue-500"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </Button>
            {/* <Link href={"/shop"}> */}
            <div
              className="flex gap-2 mt-10 "
              onClick={() => navigate("/shop")}
            >
              <IoIosArrowRoundBack color="orange" size={35} />
              <p className="pt-1 text-orange-400 hover:text-blue-500 cursor-pointer">
                {" "}
                Return to shipping
              </p>
            </div>
            {/* </Link> */}
          </div>
        </div>
        {/* <div className="w-full md:w-[30%] h-fit bg-white rounded-md shadow-md mt-10 p-3">
          <div className="divide-y-2">
            <h1 className="py-3 font-semibold text-lg ">Payment Details</h1>
            <p className="py-2 text-gray-500 flex justify-between">
              Sub Total <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between">
              Tax <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between">
              Bonus <span>10%</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between">
              Shipping <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between">
              Total <span>3200 Rfw</span>
            </p>
          </div>
      
        </div> */}
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
