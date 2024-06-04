import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export function ShippingAddressForm() {

  return (
    <Form>
      <form className="space-y-8">
        <div className="flex gap-3">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
            </Form.Item>
         <Form.Item
          name="lastName"
          label="Last Name"
          >
            <Input />
            </Form.Item>
        </div>
        <Form.Item
          name="Province"
          label="province"
          >
            <Input />
            </Form.Item>
            <Form.Item
          name="district"
          label="District"
          >
            <Input />
            </Form.Item>
            <Form.Item
          name="sector"
          label="Sector"
          >
            <Input />
            </Form.Item>
            <Form.Item
          name="cell"
          label="cell"
          >
            <Input />
            </Form.Item>
            <Form.Item
          name="phone"
          label="Phone"
          >
            <Input />
            </Form.Item>
            <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  )
}