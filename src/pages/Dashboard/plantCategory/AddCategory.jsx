import { Button, Form, Input } from "antd";
import DashboardLayout from "../../../components/DashboardLayout";
import { api } from "../../../utils/helpers";
import { errorHandler, toastMessage } from "../../../utils/toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../../redux/slices/category/categoryThunks";

const AddCategory = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);

    await api
      .post("/category", values)
      .then((res) => {
        setLoading(false);
        form.resetFields();
        dispatch(fetchCategory());
        toastMessage("success", res.data.message);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  return (
    <DashboardLayout>
      <Form
        name="basic"
        className="w-[60%] m-auto border "
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <div className="bg-[#025222] flex justify-center items-center p-3 text-xl text-white">
          Create category
        </div>
        <div className="p-3">
          <Form.Item
            label="Name"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input name of Product!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                height: "45px",
              }}
              className=" w-full"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input product description!",
              },
            ]}
          >
            <TextArea
              style={{
                width: "100%",
                height: "100px",
              }}
            />
          </Form.Item>

          <Form.Item style={{ width: "100%", margin: "auto" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#025222",
              }}
              className="text-lg"
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </DashboardLayout>
  );
};
export default AddCategory;
