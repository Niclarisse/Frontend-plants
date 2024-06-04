import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import UploadComponent from "../../components/UploadComponent";
import DashboardLayout from "../../components/DashboardLayout";

const CreateUser = () => 
   {
    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const handleChange = (value) => {
        console.log(value); 
      };
      const { TextArea } = Input
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
     return(
      <DashboardLayout>
  <Form
    name="basic"
    className="w-[90%] m-auto"
    initialValues={{
      remember: true
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
  >
  <Form.Item
    label="Image"
    name="image"
    rules={[
      {
        required: true,
        message: "Please input product pic!"
      }
    ]}
  >
    <UploadComponent/>
  </Form.Item>
    <Form.Item
      label="First name"
      name="name"
      rules={[
        {
          required: true,
          message: "Please input first name"
        }
      ]}
    >
      <Input  style={{
      width: "100%",
      height:"45px"
    }}/>
    </Form.Item>
    <Form.Item
      label="Second name"
      name="last"
      rules={[
        {
          required: true,
          message: "Please enter last name"
        }
      ]}
    >
      <Input  style={{
      width: "100%",
      height:"45px"
    }}/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please enter email!"
        }
      ]}
    >
      <Input  style={{
      width: "100%",
      height:"45px"
    }}/>
    </Form.Item>
    <Form.Item
      label="Role"
      name="role"
      rules={[
        {
          required: true,
          message: "Please select role"
        }
      ]}
    >
   <Select
    labelInValue
    defaultValue={{
      value: 'user',
      label: 'user',
    }}
    style={{
      width: "100%",
      height:"45px"
    }}
    onChange={handleChange}
    options={[
      {
        value: 'user',
        label: 'User',
      },
      {
        value: 'admin',
        label: 'Admin',
      },
      {
        value: 'partner',
        label: 'Partner',
      },
    ]}
  />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please provide password"
        }
      ]}
    >
      <Input placeholder="provide password"  />
    </Form.Item>
    <Form.Item
      label="Address street"
      name="address"
      rules={[
        {
          required: true,
          message: "Please provide street address"
        }
      ]}
    >
      <Input placeholder="provide Street address"/>
    </Form.Item>
    <Form.Item
      label="Province"
      name="province"
      rules={[
        {
          required: true,
          message: "Please provide province"
        }
      ]}
    >
      <Input placeholder="provide province"/>
    </Form.Item>

    <Form.Item style={{width:"50%",margin:"auto"}}
    >
      <Button type="primary" htmlType="submit" style={{width:"100%"}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </DashboardLayout>
);}
export default CreateUser;
