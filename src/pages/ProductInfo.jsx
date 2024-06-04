import React from "react";
import NavBar from "../components/NavBar";
import "../components/header.css";
import profileImg from "../assets/images/Screenshot 2024-05-20 100848.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaRegComment, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import Footer from "../components/Footer";
const ProductInfo = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-screen bg-[url('https://media.istockphoto.com/id/175203893/photo/smiling-woman-with-healthy-skin-holding-cream.jpg?s=2048x2048&w=is&k=20&c=PyB-0SOmKlVtEFsHpuYh-IxJcdfbg-SIoYrWwEuZeBU=')] bg-cover mt-40 bg-fixed">
        <div className="bg-white relative top-1/2 px-40">
          <h1 className="font-bold text-center text-2xl pt-10">
            Outdoor Fitness: Best Exercises in the Fresh Air for Active People
          </h1>
          <div className="w-full">
            <div className=" w-1/2 m-auto">
              <div className="flex gap-5 w-full py-10">
                <h1 className="text-3xl border border-black py-10 px-5 rounded-sm">
                  S
                </h1>
                <p>
                  {" "}
                  Fresh roots are crushed, boiled and strained, and the liquid
                  is used to treat gonorrhoea and syphilis. Fresh leaf juice,
                  sometimes with Erythrina sacleuxii Hua, is used for the
                  treatment of leprosy. Leaf and roots are used for pleurisy,
                  inflammatory conditions of chest and for oxytocic activity. Is
                  extensively used in many skin disease medicine.
                </p>
              </div>
              <h1 className="text-lg ">
                Below is a road map to improve your Health, designed by the
                coaches, trainers who boost self-esteem for a living.
              </h1>
              <BiSolidQuoteAltLeft className="m-auto mt-3" size={25} />
              <div className="w-full mt-10">
                <h1 className="text-center">01.</h1>
                <p className="text-center font-bold pt-2">Medicinal use</p>
                <p className="pt-5">
                  {" "}
                  Fresh roots are ground, cooked in banana beer and drunk to
                  treat gonorrhoea. Treatment of Arthritis and Joint Pain, Blood
                  Purification and Detoxification; Treatment of Urinary
                  Disorders, Bacteria; Biliousness; Bite; Bleeding; Complexion;
                  Constipation;Diabetes, Dysentery; Hemoptysis; Hemorrhoid;
                  Hepatosis ,Infection; Inflammation, Diarrheal
                </p>
              </div>
              <div className="w-full mt-10">
                <h1 className="text-center">02.</h1>
                <p className="text-center font-bold pt-2">
                  Dosages and preparation
                </p>
                <p className="pt-5">
                  {" "}
                  To orally administer the macerated fresh leaves or the
                  filtrate of dry and crushed stems: 2 spoons three times per
                  day (morning, midday, and evening) for 5 days.
                </p>
              </div>
              <div className="w-full mt-10">
                <h1 className="text-center">03.</h1>
                <p className="text-center font-bold pt-2">Side effects</p>
                <p className="pt-5">
                  Fresh roots are crushed, boiled and strained, and the liquid
                  is used to treat gonorrhoea and syphilis. Fresh leaf juice,
                  sometimes with Erythrina sacleuxii Hua, is used for the
                  treatment of leprosy. Leaf and roots are used for pleurisy,
                  inflammatory conditions of chest and for oxytocic activity. Is
                  extensively used in many skin disease medicine.
                </p>
              </div>
              <div className="w-full mt-10">
                <h1 className="text-center">04.</h1>
                <p className="text-center font-bold pt-2">Description</p>
                <p className="pt-5">
                  {" "}
                  Urtica massaica, may cause skin irritation upon contact due to
                  its stinging hairs, and in some cases, ingestion may lead to
                  gastrointestinal discomfort or allergic reactions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div class="flex items-center py-4">
              <div class="flex-grow h-px bg-gray-400"></div>

              <span class="flex-shrink text-lg px-4 italic font-light">
                Share
              </span>

              <div class="flex-grow h-px bg-gray-400"></div>
            </div>
            <div className="flex justify-between w-1/2 m-auto ">
              <img src={profileImg} alt="" className="rounded-full w-10 h-10" />
              <div className="flex gap-5">
                <CiFacebook />
                <FaXTwitter />
                <FaWhatsapp />
              </div>
              <div className="flex gap-3">
                <FaRegComment className="mt-1"/>
                <p>0 Comments</p>
              </div>
            </div>
            <div className="flex w-1/2 m-auto mt-10">
              <div className="flex gap-5 ">
                <img
                  src={profileImg}
                  alt=""
                  className="rounded-full w-20 h-20"
                />
                <div>
                  <h1 className="font-bold">Clarisse</h1>
                  <p className="text-[12px]">Founder, Writter</p>
                  <p>
                    Now, as an established writer, Clarisse continues to inspire
                    with her words, always staying true to her heart and the
                    simple wonders that first sparked her imagination.
                  </p>
                  <p>Posted by Clarisse</p>
                </div>
              </div>
            </div>
            {/* <div className="w-1/2 m-auto">
              <h1 className="text-2xl text-center font-bold">Subscribe so you don't miss a Post</h1>
              <p>Sign up with your email address to receive news and updates!</p>

            </div> */}
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
