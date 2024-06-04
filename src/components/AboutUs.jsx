import aboutImage from "../assets/images/depositphotos_387030350-stock-photo-medicinal-plants-bowls-dry-medicinal.jpg";
import aboutImage1 from "../assets/images/banner-v4-2.webp";
import aboutImage2 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";

import leaveImage from "../assets/images/homeimg.jpg";
import prImg from "../assets/images/banner-v4-2.webp";
import prImg2 from "../assets/images/slideshow-v1-2.webp";
import prImg3 from "../assets/images/slideshow-v1-1.webp";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Carousel, Skeleton } from "antd";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import UnControlebleSlideShow from "./UnControllebleSlideShow";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../redux/slices/plant/plantThunks";
import { useEffect } from "react";
const AboutUs = () => {
  const { allplants, is_plants_loading } = useSelector((state) => state.plants);
  const navigate = useNavigate();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
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
            {allplants.map((el, i) => {
              console.log("plant data", el);
              return (
                <ProductCard
                  key={i}
                  img1={el?.images[0]?.url}
                  img2={el?.images[1]?.url}
                  name={el?.title}
                  // amount={el?.price}
                  btnName={"ReadMore"}
                  // btnSecondName={"Add to cart"}
                  description={el?.description}
                  onClick={() => navigate(`/plant/view/${el?._id}`)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default AboutUs;
