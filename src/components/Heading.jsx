import CustomButton from "./CustomButton";
import headingImage from "../assets/images/depositphotos_210464032-stock-photo-close-green-leaves-water-drops.jpg";
import leaveImage from "../assets/images/banner-v4-2.webp";
import img2 from "../assets/images/banner-v4-2.webp";
import img3 from "../assets/images/amazing-beautiful-beauty-blue.jpg";
import img4 from "../assets/images/bladder-plant-bladder-plant-red-419687.jpeg";
import { Carousel } from "antd";
const Heading = () => {
  const contentStyle = {
    margin: 0,
    height: "70vh",
    color: "#fff",
    width: "100%",
    lineHeight: "160px",
    textAlign: "center",
    borderRadius: "6px",
  };
  return (
    <>
      <div className="block md:flex justify-between pl-3 lg:pl-5 xl:pl-[5rem]">
        <div className="w-full md:w-[40%]  pt-[10rem]">
          <h1 className="text-[2.2rem] 2xl:text-[4.2rem] font-medium leading[1rem] 2xl:leading-[4rem] text-[#003F13]">
            Discover the Healing Power of Medicinal Plants
          </h1>
          <p className="text-xl font-normal text-justify leading-[1.5rem] text-[#363636] py-8 pr-4">
            It is too crucial to put your health in the hands of chance. Take
            charge, educate yourself, and make sure using natural medicines is
            safe for you. . Explore the hidden truths about
            medicinal plants today!
            <br />
            <br />
            {/* Are you feeling stressed? Struggling to manage life&apos;s
            pressures? Seeking natural remedies to support your health,
            including fighting cancer? We bring you a comprehensive guide to
            medicinal plants that can transform your well-being. Explore our
            selection of healing plants and embark on a journey to a healthier,
            happier you. */}
          </p>
          <CustomButton />
          {/* <div className="flex gap-2 mt-2 cursor-pointer pt-4 text-[#363636] font-bold">View All Products <MdOutlineReadMore size={25}/></div> */}
        </div>
        <div className="  pt-[5rem] w-full md:w-[60%] rounded-md">
          {/* <img src={headingImage} alt="landing image" className="w-full " /> */}
          {/* <div className='w-1/2'> */}
          <Carousel autoplay className="rounded-md">
            <div className="rounded-md">
              <img src={headingImage} alt="imag" style={contentStyle} />
            </div>
            <div className="rounded-md">
              <img src={img2} alt="imag" style={contentStyle} />
            </div>
            <div className="rounded-md">
              <img src={img3} alt="imag" style={contentStyle} />
            </div>
            <div className="rounded-md">
              <img src={img4} alt="imag" style={contentStyle} />
            </div>
          </Carousel>
          {/* </div> */}
        </div>
      </div>
      <div className="w-full h-[5vh]">
        <img
          src={leaveImage}
          alt=""
          className="w-full h-full bg-top rounded-md"
        />
      </div>
    </>
  );
};

export default Heading;
