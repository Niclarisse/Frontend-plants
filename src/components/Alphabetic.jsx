import React, { useEffect, useState } from "react";
import api from "./axios";
import { errorHandler } from "../utils/toast";
import AlphabeticView from "./AlphabeticView";

const Alphabetic = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const showModal = (index) => {
    setIsModalOpen(index);
  };

  const handleOk = () => {
    setIsModalOpen(null);
  };

  const handleCancel = () => {
    setIsModalOpen(null);
  };

  const Alphabet = [];

  // Loop through ASCII codes for 'A' (65) to 'Z' (90)
  for (let i = 65; i <= 90; i++) {
    Alphabet.push({ name: String.fromCharCode(i) });
  }

  console.log("selectedLetter", selectedLetter);
  const getPlants = (selectedLetter) => {
    setLoading(true);
    api
      .get(`/plants?search=${selectedLetter}`)
      .then((res) => {
        setPlants(res.data);
        setLoading(false);
      })
      .catch((error) => {
        errorHandler(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPlants(selectedLetter);
  }, [selectedLetter]);
  return (
    <div>
      <AlphabeticView
        handleModal={handleOpenModal}
        letter={selectedLetter}
        openModal={openModal}
        plants={plants}
        loading={loading}
      />
      <div className="bg-white shadow-md h-full w-full flex gap-4 pt-10 pl-10">
        <p className="pt-4 font-medium text-lg">Common Name</p>
        <hr className="bg-black w-1 h-10" />
        <p className="pt-4 font-medium text-lg">Scientific Name</p>
        <div>
          <ul className="text-black flex gap-2 mt-4 ">
            {Alphabet.map((el, index) => {
              return (
                <li
                  key={index}
                  className="hover:bg-[#025222] hover:text-white py-2 px-3 rounded-md cursor-pointer relative"
                  onClick={() => {
                    setSelectedLetter(el.name);
                    handleOpenModal();
                    console.log("elele", el);
                  }}
                >
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alphabetic;
