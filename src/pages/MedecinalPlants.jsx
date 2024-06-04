import React, { useEffect,useState } from "react";
import NavBar from "../components/NavBar";
import "../components/header.css";
import ProductCard from "../components/ProductCard";
import aboutImage1 from "../assets/images/Urtica dioica L.(igisura).jpg";
import aboutImage2 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import Footer from "../components/Footer";
import { Collapse, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlantByCategories } from "../redux/slices/plant/plantThunks";
import { useNavigate } from "react-router-dom";
import LeavesPlants from "./plantCategories/leavesPlants";
import Vegetables from "./plantCategories/Vegetables";
import NotChecken from "./plantCategories/NotChecken";
import Flower from "./plantCategories/Flowers";
import Fruits from "./plantCategories/Fruits";
import Routes from "./plantCategories/Routes";
import Spices from "./plantCategories/Spices";
import Edible from "./plantCategories/Edible";
const MedecinalPlants = () => {
  const { plantCategory,is_plants_loading } = useSelector((state) => state.plants);
  const [selectedCategories,setSelectedCategories]=useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchPlantByCategories(`?category=leaves`)(dispatch);
  // }, [dispatch]);
  console.log("plant categories medecinalCategory", selectedCategories);
  return (
    <>
      <NavBar setSelectedCategories={setSelectedCategories}/>
      <div className="w-full h-screen bg-[url('https://images.pexels.com/photos/720394/pexels-photo-720394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover mt-[7rem] bg-fixed">
        <h1 className="pt-[8rem] text-center  text-2xl font-bold text-white">
          Medicinal Plants
        </h1>
        {is_plants_loading ? (
          <div className="grid grid-cols-4 gap-4 bg-white h-[70vh] w-full">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) :(

        <div className="pt-10">
        {selectedCategories ? <>
        {selectedCategories==="leaves" && <LeavesPlants/>}
       {selectedCategories==="Vegetables" && <Vegetables />}
       {selectedCategories==="unkown" && <NotChecken />}
        {selectedCategories==="flowers" && <Flower />}
        {selectedCategories==="fruit" && <Fruits />}
        {selectedCategories==="rootes" && <Routes />}
        {selectedCategories==="spices" && <Spices />}
        {selectedCategories==="edible" && <Edible />}
      
        </>:<>
        <LeavesPlants />
        <Vegetables />
        <NotChecken />
        <Flower />
        <Fruits />
        <Routes />
        <Spices />
        <Edible />
        </>}</div>)}
       <div className="mt-[15rem]">

        <Footer />
       </div>
      </div>
    </>
  );
};

export default MedecinalPlants;
