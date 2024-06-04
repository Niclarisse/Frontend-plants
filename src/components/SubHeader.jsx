import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { Avatar, Badge, Space } from "antd";
import { BsCart } from "react-icons/bs";
import  LogoIcons from "../assets/images/Logo_1.png"
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchCart } from "../redux/slices/plant/plantThunks";
import { useDispatch, useSelector } from "react-redux";
const SubHeader = () => {
  const { cartItems,is_plant_loading } = useSelector((state) => state.plants);
  const {pathname}=useLocation();
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const GetCartData=(async()=>{
   await fetchCart()(dispatch);
    navigate("/cart")
  })
  return (
    <div className="bg-[#025222]">
      <div className="block justify-between px-5 md:px-[10rem] py-3 sm:flex">
        <h1 className="text-white text-base text-center">99 Roving St, Big City PKU 23456</h1>
        <div className="flex gap-5 pt-3 sm:pt-0 justify-center items-center">
        <Space size={24} className="mr-10">
           {/* {(pathname.includes("plant") || pathname.includes("shop") || pathname.includes("cart")) ||pathname.includes("checkout") &&  */}
           <Badge count={cartItems?.plants?.length} onClick={()=>GetCartData()}>
              <Avatar shape="circle" icon={<BsCart />} />
            </Badge>
            {/* } */}
            <Badge count={1}>
              <Avatar
                shape="circle"
                icon={<IoMdNotificationsOutline size={22} color="white"/>}
              />
            </Badge>
          </Space>
          <FaFacebook size={28} className="text-white "/>
          <AiFillTwitterCircle size={30} className="text-white "/>
          <SiYoutubemusic size={30} className="text-white "/>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
