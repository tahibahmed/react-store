import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import {
  createUserWithEmailAndPassword,
  auth,
  collection,
  addDoc,
  db,
  onAuthStateChanged,
} from "../database/Firebase";
import { Button, Checkbox, Form, Input } from "antd";

const AuthContext = createContext();

export const Auth = () => {
  return useContext(AuthContext);
};
const UserAuthContext = () => {
  const [currentuser, setcurrentuser] = useState(null);
  const [error, seterror] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentuser(user);
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        setcurrentuser(null);
      }
    });
  }, []);
};

const onFinish = (values) => {
  createUserWithEmailAndPassword(auth, values.Email, values.password)
    .then(async (UserCredential) => {
      localStorage.setItem("uid", UserCredential.user.uid);
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: values.username,
          email: values.Email,
        });

        Swal.fire({
          icon: 'Success',
          text: 'You are registerd',
        })
        console.log("Document written with ID: ", docRef.id);
        UserAuthContext()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      console.log(errorMessage);
      // ..
    });
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Signup = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className="one-log"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
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
          message: "Please input your Email!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
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
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
       Signup Here
      </Button>
    </Form.Item>
  </Form>
);
export default Signup;
