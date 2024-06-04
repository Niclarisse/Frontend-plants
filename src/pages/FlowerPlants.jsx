import React from 'react';
import { Carousel } from 'antd';
import NavBar from '../components/NavBar';
import img1 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
// import img3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
// import img4 from "../assets/images/Tetradenia riparia(umuravumba).jpg"
import DropDownAccordion from '../components/dropdownAccordion';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import headingImage from "../assets/images/Tetradenia riparia(umuravumba).jpg"
import leaveImage from "../assets/images/homeimg.jpg"
import img2 from "../assets/images/Urtica dioica L.(igisura).jpg"
import img3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
import img4 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
import aboutImage from "../assets/images/Tetradenia riparia(umuravumba).jpg";
import aboutImage1 from "../assets/images/Urtica dioica L.(igisura).jpg";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import { useNavigate } from 'react-router-dom';
const contentStyle = {
  margin: 0,
  height: '70vh',
  color: '#fff',
  width:"100%",
  lineHeight: '160px',
  textAlign: 'center',
};
const FlowerPlants = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const navigate=useNavigate();
  return (
    <>
    <NavBar/>
    <div className='mt-40'>
        <h1 className='text-center font-bold text-xl'>medicinal Plants(Flowers) </h1>
    <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"Sold"} img1={aboutImage1} img2={aboutImage} name={"Rubia cordifolia L"}amount={50000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"discount"} img1={aboutImage2} img2={aboutImage1} name={"Rubia cordifolia L"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Rubia cordifolia L"}amount={3000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/details")}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/details")}/>
      </div>
        <div className='mt-3'>

        <Footer/>
        </div>
    </div>
    
    </>
  );
};
export default FlowerPlants;