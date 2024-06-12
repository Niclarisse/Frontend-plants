import React, { useState } from "react";
import UploadComponent from "../../../../components/UploadComponent";
import { Button, Form } from "antd";
import { api } from "../../../../utils/helpers";
import { errorHandler, toastMessage } from "../../../../utils/toast";
import { useDispatch } from "react-redux";
import { fetchPlants } from "../../../../redux/slices/plant/plantThunks";
import toast from "react-hot-toast";

const Step3 = ({ id, fileList, setFileList }) => {
  const dispatch = useDispatch();

  const handleFileChange = (newFileList) => {
    setFileList(newFileList);
  };

  return (
    <div className="mt-10">
      <Form.Item
        label="Plant Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input plant image!",
          },
        ]}
      >
        <UploadComponent onFileChange={handleFileChange} />
      </Form.Item>
      {/* <Button type="primary" onClick={handleUpload} loading={uploadLoading}>
        Upload and Continue
      </Button> */}
    </div>
  );
};

export default Step3;
