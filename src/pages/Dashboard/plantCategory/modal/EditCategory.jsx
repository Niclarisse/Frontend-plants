import { useState } from "react";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import { IoCheckmarkOutline } from "react-icons/io5";
import { api } from "../../../../utils/helpers";
import { fetchCategory } from "../../../../redux/slices/category/categoryThunks";
import { errorHandler } from "../../../../utils/toast";
import Modal from "../../../../components/modal/Modal";
import Input from "../../../../components/Input";
import TextArea from "../../../../components/TextArea";
import Button1 from "../../../../components/Button1";

const EditCategory = ({ openModal, handleModal, data, setData }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    control,
  } = useForm();

  const [submitLoading, setSubmitLoading] = useState(false);

  const onSubmit = () => {
    setSubmitLoading(true);
    api
      .put(`/category/${data._id}`, data)
      .then(() => {
        setSubmitLoading(false);
        dispatch(fetchCategory());
        reset();
        setData({ title: "", description: "", status: "active" });
        handleModal();
      })
      .catch((error) => {
        errorHandler(error);
        setSubmitLoading(false);
      });
  };

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

  return (
    <Modal
      isOpen={openModal}
      onClose={() => {
        handleModal();
      }}
      Style={"w-[90%] lg:w-1/3  flex m-auto py-4"}
    >
      {" "}
      <Modal.Header>
        <h1 className="font-bold text-lg">Edit category</h1>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-3 ">
            <Input
              labelFor={"name"}
              labelText={""}
              name={"name"}
              customClass=""
              isRequired={true}
              value={data.title}
              onChange={(e) => {
                handleName(e);
              }}
              inputStyle={"rounded-lg border border-lightGrey"}
              placeholder={"Enter bank name"}
              register={register}
              errors={errors}
            />

            <TextArea
              labelFor={"description"}
              labelText={""}
              type={"description"}
              name={"description"}
              customClass=" "
              isRequired={true}
              value={data.description}
              inputStyle={
                "rounded-lg border border-lightGrey bg-white h-[100px]"
              }
              placeholder={"Enter bank description"}
              onChange={(e) => {
                handleDescription(e);
              }}
              register={register}
              errors={errors}
            />
          </div>

          <div className="flex justify-end item-center w-full mt-6">
            <div className="flex gap-4 items-center">
              <Button1
                type="button"
                content={
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-fontGrey font-normal text-lg ">
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

              <Button1
                type="submit"
                content={
                  <div className="flex items-center justify-center gap-3">
                    {/* <IoCheckmarkOutline color="#fff" /> */}
                    <p className="text-white font-normal text-lg">Update</p>
                  </div>
                }
                loading={submitLoading}
                btnColor="primary"
                Style={"w-fit h-12 mt-4 rounded-lg"}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCategory;
