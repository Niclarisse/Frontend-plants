import React, { useEffect, useState } from "react";
import { Carousel, Skeleton } from "antd";
import NavBar from "../components/NavBar";
import img1 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
// import img3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
// import img4 from "../assets/images/Tetradenia riparia(umuravumba).jpg"
import DropDownAccordion from "../components/dropdownAccordion";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import headingImage from "../assets/images/Tetradenia riparia(umuravumba).jpg";
import leaveImage from "../assets/images/homeimg.jpg";
import img2 from "../assets/images/Urtica dioica L.(igisura).jpg";
import img3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import img4 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import aboutImage from "../assets/images/Tetradenia riparia(umuravumba).jpg";
import aboutImage1 from "../assets/images/Urtica dioica L.(igisura).jpg";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlantByCategories } from "../redux/slices/plant/plantThunks";
import { fetchPlants } from "../redux/slices/plant/plantThunks";
const contentStyle = {
  margin: 0,
  height: "70vh",
  color: "#fff",
  width: "100%",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "8px",
};
const Shop = () => {
  const { allplants, is_plants_loading ,plantCategory} = useSelector((state) => state.plants);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory,setSelectedCategory]=useState("")
  console.log("selectedCategory",selectedCategory)
  useEffect(() => {
    if(selectedCategory){

      fetchPlantByCategories(`?category=${selectedCategory}`)(dispatch)
    }else{

      dispatch(fetchPlants());
    }
  }, [dispatch,selectedCategory]);
  return (
    <>
      <NavBar setSelectedCategory={setSelectedCategory}/>
      <div className="mt-40 md:flex  gap-10 px-20">
        <div className="mt-5 w-full">
          <h1 className="py-4 text-lg font-medium ">
            Select your prefered medicinal Plants
          </h1>
          <DropDownAccordion />
        </div>
        <div className="w-full md:w-[60%] pt-4">
          <Carousel autoplay>
            <div>
              <img src={img1} alt="imag" style={contentStyle} />
            </div>
            <div>
              <img src={img2} alt="imag" style={contentStyle} />
            </div>
            <div>
              <img src={img3} alt="imag" style={contentStyle} />
            </div>
            <div>
              <img src={img4} alt="imag" style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="mt-5">
        {is_plants_loading ? (
          <div className="grid grid-cols-4 gap-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
          {(selectedCategory)?  plantCategory.map((el, i) => {
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
            }):  allplants.map((el, i) => {
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
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Shop;
