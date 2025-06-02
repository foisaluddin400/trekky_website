import { Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/Home/hero.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";



const SignUp = () => {


  const [loading, setLoading] = useState(false); // Loading state for submit button

  const onFinish = async (values) => {
    // setLoading(true);
    // try {
     
    //   const payload = await loginAdmin(values).unwrap();
    
    //   if (payload?.success) {
    //     // localStorage.setItem("accessToken", payload?.data?.accessToken);
    //     dispatch(setToken(payload?.data?.accessToken))
    //     message.success("Login successful!");
    //     navigate("/");
    //   } else {
    //     message.error(payload?.message || "Login failed!");
    //   }
    // } catch (error) {
      
    //   message.error(error?.data?.message || "Something went wrong. Try again!");
    // } finally {
    //   setLoading(false);
      
    // }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-[1500px] m-auto">
        <div className="md:flex md:justify-center lg:grid grid-cols-2">
          <div className="  lg:w-full md:px-16   ">
            
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              Sign Up to your account
            </h2>

            <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off" layout="vertical">
              <div className="grid grid-cols-2 gap-3">
                <Form.Item
                name="FirstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please input your Name!" },
                  {  message: "The input is not valid Name!" },
                ]}
              >
                <Input placeholder="Enter first Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input last Name!" },
                  {  message: "The input is not last Name!" },
                ]}
              >
                <Input placeholder="Enter last Name" />
              </Form.Item>
              </div>
               <div className="grid grid-cols-2 gap-3">
                <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {  message: "The input is not valid email!" },
                ]}
              >
                <Input placeholder="Enter first email" />
              </Form.Item>
              <Form.Item
                name="number"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please Phone Number!" },
                  {  message: "The input is not Phone Number!" },
                ]}
              >
                <Input placeholder="Enter Phone Number" />
              </Form.Item>
              </div>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

               <Form.Item
                name="confirm"
                label="Confirm Password"
                rules={[{ required: true, message: "Please input your Confirm password!" }]}
              >
                <Input.Password placeholder="Enter your Confirm password" />
              </Form.Item>

              <div className="flex items-center justify-between mb-4">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-gray-700">I agree to all the Terms and Privacy Policies</Checkbox>
                </Form.Item>
                
              </div>

              <Form.Item>
                <button
                  type="submit"
                  className={`w-full py-3 bg-[#27E2F5] text-black rounded focus:ring-2 focus:ring-gray-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Sign Up"}
                </button>
              </Form.Item>
            </Form>
            
                <h1 className="text-gray-400 text-center mt-5">----Or Login with----</h1>

                 <div className="grid grid-cols-2 gap-3 mt-5">
                  <button className="border flex gap-2 justify-center border-[#27E2F5] w-full py-2 rounded text-xl"><FcGoogle className="mt-1"/>Sign In with Google</button>
                  <button className="border border-[#27E2F5] w-full flex gap-1 justify-center py-2 rounded text-xl"><FaApple className="mt-1"/>Sign In With Apple</button>
                </div>
          </div>
          <div className="hidden lg:block">
            <img className="rounded-3xl" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
