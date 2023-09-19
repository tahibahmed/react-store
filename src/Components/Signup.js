import React from 'react';

import { Button, Form, Input } from 'antd';


const onFinish = ({values}) => {
console.log(values )
    // console.log('Success:', values);

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Signup = () => {


  return (

  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    className='one'
    style={{
      width: 600,

    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
   
  >
    <Form.Item
      label="UserName"
      name="UserName"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="Email"
      
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
          
        },
        
      ]
    }
    >
      <Input  />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >

    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" >
        Create Account
      </Button>
    </Form.Item>
  </Form>)
};
export default Signup;