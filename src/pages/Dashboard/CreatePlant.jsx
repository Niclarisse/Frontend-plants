import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import UploadComponent from "../../components/UploadComponent";
import DashboardLayout from "../../components/DashboardLayout";

const CreatePlant = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value) => {
    console.log(value);
  };
  const { TextArea } = Input;
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChanges = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <DashboardLayout>
      <Form
        name="basic"
        className="w-[90%] m-auto"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="flex gap-4 flex-wrap">
          <Form.Item
            label="Kinyarwanda name/ Vernacular name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name of Plant!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                height: "45px",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Scientific name"
            name="scientific"
            rules={[
              {
                required: true,
                message: "Please enter Scientific name!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                height: "45px",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Common name"
            name="common"
            rules={[
              {
                required: true,
                message: "Please enter Common name!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                height: "45px",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Family"
            name="Family"
            rules={[
              {
                required: true,
                message: "Please enter Family!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                height: "45px",
              }}
            />
          </Form.Item>
        </div>
        <Form.Item
          label="Medicinal use"
          name="use"
          rules={[
            {
              required: true,
              message: "Please provide Medicinal use",
            },
          ]}
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            onChange={handleChanges}
            tokenSeparators={[","]}
            options={options}
          />
        </Form.Item>
        <Form.Item
          label="Part to be used"
          name="part"
          rules={[
            {
              required: true,
              message: "Please provide product part",
            },
          ]}
        >
          <TextArea rows={6} placeholder="provide product Descriptions" />
        </Form.Item>
        <Form.Item
          label="Dosages and preparation"
          name="prepation"
          rules={[
            {
              required: true,
              message: "Please provide product preparation",
            },
          ]}
        >
          <Input placeholder="provide product prepation" />
        </Form.Item>
        <Form.Item
          label="Side effects"
          name="effect"
          rules={[
            {
              required: true,
              message: "Please provide product Side effects",
            },
          ]}
        >
          <Input placeholder="provide product Side effects" />
        </Form.Item>
        <Form.Item
          label="Plant Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select category  of Plant!",
            },
          ]}
        >
          <Select
            labelInValue
            defaultValue={{
              value: "vegetables",
              label: "Vegetables",
            }}
            style={{
              width: "100%",
              height: "45px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "Vegetables",
                label: "Vegetables",
              },
              {
                value: "spices",
                label: "Spices",
              },
              {
                value: "flower",
                label: "Flawers",
              },
              {
                value: "ediblePlants",
                label: "Edible Plants",
              },
              {
                value: "not for daily activities",
                label: "Not for kitchen daily activities ",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input product description!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              height: "45px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Plant Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input product pic!",
            },
          ]}
        >
          <UploadComponent />
        </Form.Item>

        <Form.Item style={{ width: "50%", margin: "auto" }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DashboardLayout>
  );
};
export default CreatePlant;
