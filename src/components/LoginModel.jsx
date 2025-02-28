import React from "react";
import { Button, Form, Input, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const LoginModel = ({ open, setOpen, setSignupOpen }) => {
  const [form] = Form.useForm();

  const handleSignupRedirect = () => {
    setOpen(false);
    setSignupOpen(true); // No delay needed
  };

  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={() => setOpen(false)}
      open={open}
      width={400}
      className="custom-drawer bg-gray-900 relative transition-all duration-300 ease-in-out"
    >
      <div className="absolute top-4 right-4">
        <CloseOutlined className="text-white text-2xl cursor-pointer" onClick={() => setOpen(false)} />
      </div>

      <div className="p-6 pt-12">
        <h3 className="text-center text-white font-bold text-2xl mb-6">Log in</h3>

        <Form form={form} name="loginForm" layout="vertical">
          <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
            <Input placeholder="Enter your email" className="custom-input" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input placeholder="Enter your password" className="custom-input" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="custom-button bg-[#6842ff]">
              Continue
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-white text-sm mt-4">
          Don't have an account?{" "}
          <span className="text-blue-400 cursor-pointer" onClick={handleSignupRedirect}>
            Sign up
          </span>
        </p>
      </div>
    </Drawer>
  );
};

export default LoginModel;
