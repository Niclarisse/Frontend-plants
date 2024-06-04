import { Button, Modal } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { api } from "../../../../utils/helpers";
import { errorHandler, toastMessage } from "../../../../utils/toast";
import { useDispatch } from "react-redux";
import { fetchPlants } from "../../../../redux/slices/plant/plantThunks";

const DeletePlant = ({ isModalOpen, handleModal, id }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setLoading(true);
    api
      .delete(`/plants/${id}`)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        toastMessage("success", "Plant deleted successfully");
        handleModal();
        dispatch(fetchPlants());
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  const handleCancel = () => {
    handleModal();
  };

  return (
    <Modal
      title={<h2 className="text-lg"> Confirm Delete This plant</h2>}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
      okText={loading ? "Deleting" : "Delete"}
    >
      <span className="">Are you sure to delete this plant?</span>
    </Modal>
  );
};
export default DeletePlant;
