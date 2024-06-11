import React, { useState, useEffect } from "react";

import Modal from "../../../../components/modal/Modal";

import { useForm } from "react-hook-form";
import api from "../../../../components/axios";
import Select from "../../../../components/Select";
import { fetchAllUsers } from "../../../../redux/slices/usersSlice/usersThunks";

import { useDispatch } from "react-redux";
import Button1 from "../../../../components/Button1";
import { errorHandler, toastMessage } from "../../../../utils/toast";

const EditUser = ({ openModal, handleModal, userId }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState({});

  const roles = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "user",
      label: "user",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
    control,
  } = useForm();

  const [submitLoading, setSubmitLoading] = useState(false);

  const onSubmit = () => {
    setSubmitLoading(true);
    api
      .put(`/user/update-role/${userId}`, { role: role.value })
      .then(() => {
        setSubmitLoading(false);
        dispatch(fetchAllUsers());
        reset();
        setRole("");
        toastMessage("success", "Role updated!");
        handleModal();
      })
      .catch((error) => {
        errorHandler(error);

        setSubmitLoading(false);
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
        <h1 className="font-bold text-lg">Edit User role</h1>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-3">
            <Select
              label=""
              className="w-full mb-2"
              isLoading={false}
              isDisabled={false}
              placeholder={"Select role"}
              defaultValue={role}
              options={roles}
              handleChange={(e) => {
                console.log(e);
                setRole(e);
              }}
              register={{
                control,
                name: "role",
                rules: { required: "Role is required" },
              }}
              setValue={setValue}
              error={errors["role"]?.message}
            />
          </div>

          <div className="flex justify-end item-center w-full mt-6">
            <div className="flex gap-4 items-center">
              <Button1
                type="button"
                content={
                  <div className="flex items-center justify-center">
                    <p className="text-fontGrey font-normal text-lg">Discard</p>
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

export default EditUser;
