import React, { useState, useEffect } from "react";

import { set, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../../redux/slices/category/categoryThunks";
import { api } from "../../../../utils/helpers";
import { errorHandler, toastMessage } from "../../../../utils/toast";
import Modal from "../../../../components/modal/Modal";
import Button1 from "../../../../components/Button1";
import { Steps } from "antd";
import Step1 from "../stepper/Step1";
import Step2 from "../stepper/Step2";
import Step3 from "../stepper/Step3";
import { fetchPlants } from "../../../../redux/slices/plant/plantThunks";

const AddPlant = ({ openModal, handleModal }) => {
  const [current, setCurrent] = useState(0);
  const [sideEffects, setSideEffects] = useState([]);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [dosages, setDosages] = useState({
    adults: [],
    children: [],
    all: [],
  });
  const dispatch = useDispatch();
  const [usages, setUsages] = useState([]);
  const [partToUse, setPartToUse] = useState([]);
  const [howToUse, setHowToUse] = useState([]);
  const [cautions, setCautions] = useState([]);
  const [precautions, setPrecautions] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [dosageType, setDosageType] = useState("all");
  const [plantId, setPlantId] = useState(null);

  const [plant, setPlant] = useState({
    title: "",
    scientificName: "",
    commonName: "",
    category: "",
    description: "",
    price: "",
  });

  const [fileList, setFileList] = useState([]);

  const savePlant = async () => {
    const data = {
      ...plant,
      dosages,
      howToUse,
      partToUse,
      precautions,
      sideEffects,
      cautions,
      measurements,
      medicinalUse: usages,
    };

    setSubmitLoading(true);
    try {
      const response = await api.post("/plants", data);
      console.log("API response:", response.data);
      setPlantId(response.data._id);
      dispatch(fetchPlants());
      toastMessage("success", "continue to upload image");
      return true; // Indicate success
    } catch (error) {
      errorHandler(error);
      return false;
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleUpload = async () => {
    console.log("Updloading...");
    if (fileList.length === 0) {
      return alert("Please upload an image.");
    }

    setUploadLoading(true);
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("images", file.originFileObj);
    });

    try {
      const response = await api.put(`/plants/upload/${plantId}`, formData);
      console.log("Upload response:", response.data);
      toastMessage("success", "Plant image uploaded successfully.");
      dispatch(fetchPlants());
      reset();
      // Move to next step on success
    } catch (error) {
      errorHandler(error);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleNext = async () => {
    if (current === 1) {
      const isSaved = await savePlant();
      if (!isSaved) {
        handleSubmit(() => setCurrent(current))();
      } else {
        handleSubmit(() => setCurrent(current + 1))();
      }
    } else if (current === 2) {
      await handleUpload();
    } else {
      handleSubmit(() => setCurrent(current + 1))();
    }
  };

  const handleBack = () => {
    const newCurrent = current - 1;
    setCurrent(newCurrent < 0 ? 0 : newCurrent);
  };

  const [data, setData] = useState({
    title: "",
    description: "",
    status: "active",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    control,
  } = useForm();

  const [submitLoading, setSubmitLoading] = useState(false);

  //   const onSubmit = () => {
  //     setSubmitLoading(true);
  //     api
  //       .post("/plant", data)
  //       .then((res) => {
  //         setSubmitLoading(false);
  //         dispatch(fetchCategory());
  //         reset();
  //         toastMessage("success", res.data.message);
  //         setData({ title: "", description: "", status: "active" });
  //         handleModal();
  //       })
  //       .catch((error) => {
  //         errorHandler(error);
  //         setSubmitLoading(false);
  //       });
  //   };

  const handleName = (e) => {
    const { value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        title: value,
      };
    });
  };

  const handleDescription = (e) => {
    const { value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        description: value,
      };
    });
  };
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlant((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCategoryChange = (selectedOption) => {
    setPlant((prevState) => ({ ...prevState, category: selectedOption.label }));
  };

  return (
    <Modal
      isOpen={openModal}
      onClose={() => {
        handleModal();
      }}
      Style={"w-[90%] max-h-[70vh] lg:w-1/3  flex m-auto py-4"}
    >
      {" "}
      <Modal.Header>
        <h1 className="font-bold text-lg">Add plant</h1>
      </Modal.Header>
      <Modal.Body>
        <div className="flex justify-between items-center">
          <Steps
            current={current}
            onChange={onChange}
            items={[
              {
                title: "Plant information:",
              },
              {
                title: "Plant Description:",
              },
              {
                title: "Upload Image",
              },
            ]}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-3 ">
            {current === 0 && (
              <Step1
                errors={errors}
                handleInputChange={handleInputChange}
                register={register}
                plant={plant}
                control={control}
                handleCategoryChange={handleCategoryChange}
              />
            )}
            {current === 1 && (
              <Step2
                cautions={cautions}
                dosageType={dosageType}
                dosages={dosages}
                howToUse={howToUse}
                partToUse={partToUse}
                precautions={precautions}
                setCautions={setCautions}
                setDosageType={setDosageType}
                setDosages={setDosages}
                setHowToUse={setHowToUse}
                setPartToUse={setPartToUse}
                setPrecautions={setPrecautions}
                setSideEffects={setSideEffects}
                setUsages={setUsages}
                sideEffects={sideEffects}
                usages={usages}
                measurements={measurements}
                setMeasurements={setMeasurements}
              />
            )}
            {current === 2 && (
              <Step3
                id={plantId}
                fileList={fileList}
                setFileList={setFileList}
              />
            )}
          </div>

          <div className="flex justify-end item-center w-full mt-6">
            <div className="flex gap-4 items-center">
              {current > 0 ? (
                <Button1
                  type="button"
                  content={
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-fontGrey font-normal text-lg">Back</p>
                    </div>
                  }
                  onClick={handleBack}
                  loading={false}
                  btnColor="darkGrey"
                  Style={"w-fit h-12 mt-4 rounded-lg"}
                />
              ) : (
                <Button1
                  type="button"
                  content={
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-fontGrey font-normal text-lg">
                        Discard
                      </p>
                    </div>
                  }
                  onClick={() => {
                    handleModal();
                  }}
                  loading={false}
                  btnColor="darkGrey"
                  Style={"w-fit h-12 mt-4 rounded-lg"}
                />
              )}

              {current === 1 || current === 2 ? (
                <Button1
                  type="submit"
                  content={
                    <div className="flex items-center justify-center">
                      {/* <IoCheckmarkOutline color="#fff" size={20} /> */}
                      <p className="text-white font-normal text-lg">
                        {current === 2 ? "Submit" : "Continue"}
                      </p>
                    </div>
                  }
                  loading={submitLoading || uploadLoading}
                  onClick={handleNext}
                  btnColor="primary"
                  Style={"w-fit h-12 mt-4 rounded-lg"}
                />
              ) : (
                <Button1
                  type="button"
                  content={
                    <div className="flex items-center justify-center">
                      {/* <IoCheckmarkOutline color="#fff" size={20} /> */}
                      <p className="text-white font-normal text-lg">Continue</p>
                    </div>
                  }
                  loading={submitLoading}
                  onClick={handleNext}
                  btnColor="primary"
                  Style={"w-fit h-12 mt-4 rounded-lg"}
                />
              )}
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPlant;
