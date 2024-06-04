import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { IoMdStar } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Buttons from "./Button";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import { useDispatch, useSelector } from "react-redux";
import "../components/Forms/forms.css";
import {
  fetchCart,
  fetchPlants,
  fetchSinglePlant,
} from "../redux/slices/plant/plantThunks";
import { Button, Form, Input, Modal, Skeleton } from "antd";
import { api } from "../utils/helpers";
import { errorHandler, toastMessage } from "../utils/toast";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { setLoggedInUser, setToken } from "../redux/slices/loggedInSlice/loggedInSlice";
const ProductDetails = () => {
  const { plant, allplants, is_plants_loading } = useSelector(
    (state) => state.plants
  );
  const [currentImage, setCurrentImage] = useState(
    plant?.images && plant?.images[0]?.url
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

 
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { plantId } = useParams();
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
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  const handleOk = async(values) => {
    setLoading(true);
    console.log("Success:", values);

    
    setIsModalOpen(false);
  };
  const onSubmit = async (values) => {
    setLoading(true);
    await api
      .post("/user/login", values)
      .then((res) => {
        setLoading(false);
        console.log("res login hereeee", res);
        dispatch(setLoggedInUser(res.data.user));
        dispatch(setToken(res.data.token));
        localStorage.setItem("userToken", res.data.token);
        handleOk()
        if (res.status === 200) {
          handleOk();
          console.log("res login bello", res);
        }
      })
      .catch((error) => {
        errorHandler(error);
        setLoading(false);
      });
      setIsModalOpen(false);
      await api
      .post("/user/cart", {
        cart: [
          {
            _id: plantId,
            count: count,
          },
        ],
      })
      .then((res) => {
        setLoading(false);
        toastMessage("success", "Added To card Successfully");
        // navigate("/cart");
        console.log("msg", res);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
        console.log("msg errrr", error);
      });

    fetchCart()(dispatch);
  };
 

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full ">
      <NavBar />
      <div className="flex justify-between w-full px-20 py-10 mt-36 ">
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <Form className="w-full" layout="vertical" onFinish={onSubmit}>
          <h1 className="text-center text-lg font-medium text-[#030229] py-2">
            Login{" "}
          </h1>

          <Form.Item label=<h1 className="text-base">Email</h1> name={"email"}>
            <Input placeholder="Email" className="rounded-lg h-12" />
          </Form.Item>

          <Form.Item
            label=<h1 className="text-base pt-2 ">Password</h1>
            name="password"
            className="relative"
          >
            <Input.Password
              placeholder="Enter Password"
              className="rounded-lg h-12"
              type={showPassword ? "text" : "password"}
            />
            {/* <button
                className="absolute top-1 right-0 p-2 rounded-lg text-sm"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <BiSolidHide size={20} color="#025222"/> : <BiShow size={20} color="#025222"/>}
              </button> */}
          </Form.Item>
<Form.Item>
          <Button
            htmlType="submit"
            className="mt-7 w-full bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#025222] h-12 text-[18px] "
          >
            {" "}
            {loading ? (
              <Spin
                indicator={<LoadingOutlined spin color="white" />}
                className="text-white"
              />
            ) : (
              "Login"
            )}
          </Button>
          </Form.Item>
          <div className="flex gap-5   items-center ">
            <p className="text-lg mt-3">Not have an Account?</p>
            <Button
              onClick={() => navigate("/signup")}
              type="submit"
              className=" w-42 bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed h-12 text-lg    "
              // disabled={isPending}
            >
              Signup
            </Button>
          </div>
        </Form>
      </Modal>
        <h1 className="text-2xl font-semibold text-center ">Plant Details</h1>
        <p className="text-lg font-normal">Home /Plant /Details</p>
      </div>
      <div className="w-[85%] m-auto md:flex gap-5 h-[40rem] ">
        <div className=" w-full md:w-2/5 h-full">
          {" "}
          <div className="w-full h-[70%] flex items-center justify-center bg-gray-200">
            <img
              src={currentImage}
              alt=""
              className="w-[50%] h-[50%] rounded-md"
            />
          </div>
          <div className="w-full h-[25%] mt-2 bg-gray-200 rounded-sm flex gap-5 justify-center items-center">
            {plant?.images?.map((el) => {
              return (
                <img
                  src={el?.url}
                  onClick={() => {
                    el?.url && setCurrentImage(el?.url);
                  }}
                  alt=""
                  className="w-24 h-24 rounded-md border border-green-300"
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 w-full md:w-1/2 ">
        
          <div className="px-2 w-full ">
            <h1 className="text-[#030229] font-medium text-2xl underline">
              {plant?.title}
            </h1>
            <div className="flex gap-2 pt-3">
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <p>{plant?.totalrating} Review</p>
          </div>
            <p className="text-[#030229] font-bold text-md pt-3">
              Kinyarwanda Name
              <span className="font-medium text-sm pl-4">
                {" "}
                {plant?.kinyarwandaName}
              </span>
            </p>
            <p className="text-[#030229] font-bold text-md py-1">
              {" "}
              Scientific name:{" "}
              <span className="font-medium text-sm pl-4">
                {" "}
                {plant?.scientificName}
              </span>
            </p>
            <p className="text-[#030229] font-bold text-md py-[2px]">
              {" "}
              Common name:{" "}
              <span className="font-medium text-sm pl-4">
                {" "}
                {plant?.commonName}
              </span>
            </p>
            <p className="text-[#030229] font-bold text-md py-1">
              {" "}
              Total Price:{" "}
              <span className="font-mdeium text-xl pl-12">
                {" "}
                {plant?.price} RFW
              </span>
            </p>
            <p className="text-[#030229B2] text-sm pt-2">
              Family: <span className="pl-[5.5rem]">{plant?.slug} </span>
            </p>
            <div className="flex gap-2">
            <span className=" text-sm text-center pt-1">
          {" "}
          Part To Use:{" "}
        </span>
        <ul className="text-[#030229B2] text-sm ml-10">
          {plant?.partToUse?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
            </div>
            
          </div>
          <div >Categories: {plant?.category}</div>
          <div className="flex gap-3 mt-5">
            <div className="flex items-center justify-center gap-2 border py-2 px-5 rounded-md">
              <button disabled={count <= 1} onClick={() => setCount(count - 1)}>
                <HiOutlineMinus size={20} className="cursor-pointer" />
              </button>
              <p className="px-4">{count}</p>
              <button>
                {" "}
                <GoPlus
                  size={20}
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer"
                />
              </button>
            </div>
            <Buttons
              name={
                loading ? (
                  <Spin
                    indicator={<LoadingOutlined spin size={25} color="black" />}
                    className="text-black"
                  />
                ) : (
                  "Add To Cart"
                )
              }
              color={"black"}
              width={"[50px]"}
              onClick={() => showModal()}
            />
          </div>
        </div>
      </div>
      <div className="px-20 mt-[30rem] md:mt-10 lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 w-[75%] m-auto">
        <h1 className="text-[#030229] font-medium text-2xl text-center py-1 mt-6">
          {" "}
          Medicinal use:{" "}
        </h1>
        <ul className="text-[#030229B2] text-sm">
          {plant?.medicinalUse?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
          {" "}
          How To Use:{" "}
        </h1>
        <ul className="text-[#030229B2] text-sm">
          {plant?.howToUse?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
          {" "}
          Part To Use:{" "}
        </h1>
        <ul className="text-[#030229B2] text-sm">
          {plant?.partToUse?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
          {" "}
          Measurements:{" "}
        </h1>
        <ul className="text-[#030229B2] text-sm">
          {plant?.measurements?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-2xl text-center py-3">
          {" "}
          Dosages and preparation:{" "}
        </h1>
        {/* <p className="text-[#030229B2] text-sm pt-1">
          {plant?.dosages?.children?.map((el)=>{

          })}
        </p> */}
        <ul className="text-[#030229B2] text-sm">
          {plant?.dosages?.all?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <ul className="text-[#030229B2] text-sm">
          {plant?.dosages?.adults?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <ul className="text-[#030229B2] text-sm">
          {plant?.dosages?.children?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
          Side effects
        </h1>
        <ul className="text-[#030229B2] text-sm">
          {plant?.sideEffect?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
          Description
        </h1>
        <p className="text-[#030229B2] text-sm pt-2">{plant?.description}</p>
      </div>
      <div className="mts-[60rem] lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 mt-5">
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
                status={"For Sale"}
                img1={el?.images[0]?.url}
                img2={el?.images[1]?.url}
                name={el?.title}
                amount={el?.price}
                btnName={"ReadMore"}
                // btnSecondName={"Add to cart"}
                description={el?.description}
                onClick={() => navigate(`/shop/${el?._id}`)}
              />
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
