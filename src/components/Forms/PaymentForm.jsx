import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Modal } from "antd";
import { DatePicker, Select } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export function PaymentMethodForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { paymentValue, SetPaymentValue } = useState("mobileMoney");
  const [paymentMethord, setPaymentMethord] = useState("bank");
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
  console.log(`selected ${paymentMethord}`);
  return (
    <div>
      <Card className="w-full ">
        <div className="grid xl:grid-cols-2 border border-orange-200 px-6 py-2 rounded-md">
          <div className="w-64 ">
            <h1 className="text-base ">Payment Method</h1>
            <p className="text-sm py-1">
              Use Right Selector to select Payment method
            </p>
          </div>
          <div className="xl:ml-5">
            <Select
              defaultValue={paymentMethord}
              style={{
                width: "100%"
              }}
              onChange={handleChange}
              options={[
                {
                  value: "mobileMoney",
                  label: "Mobile Money"
                },
                {
                  value: "bank",
                  label: "Bank"
                },
                {
                  value: "creditCard",
                  label: "Credit Card"
                }
              ]}
            />
          </div>
        </div>
        <Card className="mt-10">
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
          <Form>
            <form className="space-y-8">
              {paymentMethord === "mobileMoney" ? (
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : paymentMethord === "bank" ? (
                <Form.Item
                  label="Bank"
                  name="bank"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Bank!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : (
                <>
                  <Form.Item
                    label="Card number"
                    name="cardNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Card number!"
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <div className="flsex gap-3"> 
                   <div className="flex gap-3 mb-2"> <h1>Validation Date</h1><DatePicker onChange={onChange} width={"100%"}/></div> 
                    <Form.Item
                      label="Security code"
                      name="securityCode"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Security code!"
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="Name on Card"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name on Card!"
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </>
              )}
              <Button className="w-full" onClick={showModal}>
                Pay Now
              </Button>
            </form>
          </Form>
        </Card>
      </Card>
    </div>
  );
}
