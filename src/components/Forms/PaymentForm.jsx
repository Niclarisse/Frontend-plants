import React, { useEffect, useState } from "react";
import { Button, Card, Checkbox, Form, Input, Modal } from "antd";
import { DatePicker, Select } from "antd";
import api from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler, toastMessage } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export function PaymentMethodForm() {
  const { cartItems, is_plants_loading } = useSelector((state) => state.plants);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { paymentValue, SetPaymentValue } = useState("mobileMoney");
  const [paymentMethord, setPaymentMethord] = useState("mobileMoney");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate=useNavigate();
  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    setPaymentMethord(value);
  };
  useEffect(() => {
    form.setFieldsValue({
      amount: cartItems?.plants[0]?.price
    });
  }, [cartItems?.plants]);
  console.log("selected>>>> ", cartItems?.plants[0]?.price);

  const onSubmit = async (values) => {
    setLoading(true);
   await api
      .post("/payment/pay", {
        ...values,
        plantId: cartItems?.plants?.[0]?._id,
        amount: cartItems?.plants[0]?.price
      })
      .then((res) => {
        navigate("/");
        toastMessage("success", " successfully Paid");
        setLoading(false);
      })
      .catch((error) => errorHandler(error));
      await api
      .delete("/user/empty-cart")
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    fetchCart()(dispatch);
      setLoading(false);
  };
  return (
    <div>
      <Card className="w-full ">
        <Modal
          footer={null}
          open={isModalOpen}
          closable={false}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="text-center py-5 text-lg text-[#030229fa]">
            Confirm Payment Ammount: 30000
          </p>
          <div className="flex gap-5 mt-5 ml-20">
            <button
              type="submit"
              className="bg-red-400 text-white py-2 rounded-md w-40 text-lg "
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-blue-400 text-white py-2 rounded-md w-40 text-lg"
              onClick={handleOk}
            >
              Pay
            </button>
          </div>
        </Modal>
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={cartItems?.plants}
          form={form}
          style={{ maxWidth: "100%" }}
        >
          <div className="flex gap-5  border border-gray-300 pt-1 rounded-md px-6 py-1 pt-2 w-full bg-gray-200">
            <p>amount</p> <p >{cartItems?.plants[0]?.price}</p>
          </div>
          {/* <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
            <Input
              disabled
              onChange={(e) => console.log("v?>>>>>", e?.target?.value)}
            />
          </Form.Item> */}

          <Form.Item
            label="Phone"
            name="number"
            rules={[{ required: true }]}
            onChange={(e) => console.log("v", e?.target?.value)}
          >
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              {loading ? "Submiting ..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
