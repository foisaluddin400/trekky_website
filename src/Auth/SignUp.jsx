import { Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/Home/hero.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRegisterUserMutation } from "../Pages/redux/api/userApi";



const SignUp = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
const [register] = useRegisterUserMutation()
  const onFinish = async (values) => {
    setLoading(true);
    const data = {
      name:values.name,
      email:values.email,
      password:values.password,
      confirmPassword:values.confirmPassword,
    }
    try {
     
      const payload = await register(data).unwrap();
    console.log(payload)
      if (payload?.success) {
           localStorage.setItem("email", values?.email);
        // dispatch(setToken(payload?.data?.accessToken))
        message.success(payload?.message);
        navigate("/auth/signUp/verify-email");
      } else {
        message.error(payload?.message || "Login failed!");
      }
    } catch (error) {
      
      message.error(error?.data?.message || "Something went wrong. Try again!");
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <div className="min-h-screen bg-[#35549B] flex items-center justify-center px-4">
      <div className="w-full max-w-[1500px] m-auto">
        <div className="md:flex md:justify-center lg:grid grid-cols-2">
          <div className="  lg:w-full md:px-16   ">
            
            <h2 className="text-xl font-bold mb-2 text-[#F9B038]">
              Sign Up to your account
            </h2>

            <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off" layout="vertical">
              <div className="grid grid-cols-1 gap-3">
                <Form.Item
                name="name"
                label={<span style={{ color: "#F9B038" }}>Name</span>}
                rules={[
                  { required: true, message: "Please input your Name!"},
                  {  message: "The input is not valid Name!"},
                ]}
              >
                <Input className="bg-[#F9B038] border-none py-3" placeholder="Enter first Name" />
              </Form.Item>
              {/* <Form.Item
                name="lastName"
                label={<span style={{ color: "#F9B038" }}>Last Name</span>}
                rules={[
                  { required: true, message: "Please input last Name!" },
                  {  message: "The input is not last Name!" },
                ]}
              >
                <Input className="bg-[#F9B038] border-none py-3" placeholder="Enter last Name" />
              </Form.Item> */}
              </div>
               <div className="grid grid-cols-2 gap-3">
                <Form.Item
                name="email"
                label={<span style={{ color: "#F9B038" }}>Email</span>}
                rules={[
                  { required: true, message: "Please input your email!" },
                  {  message: "The input is not valid email!" },
                ]}
              >
                <Input className="bg-[#F9B038] border-none py-3" placeholder="Enter first email" />
              </Form.Item>
              <Form.Item
                name="number"
                label={<span style={{ color: "#F9B038" }}>Phone Number</span>}
                rules={[
                  { required: true, message: "Please Phone Number!" },
                  {  message: "The input is not Phone Number!" },
                ]}
              >
                <Input className="bg-[#F9B038] border-none py-3" placeholder="Enter Phone Number" />
              </Form.Item>
              </div>

           <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please set your password!" },
                  {
                    min: 8,
                    max: 10,
                    message: "Password must be 8-10 characters long!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="bg-[#F9B038] border-none py-3"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Re-enter your password"
                 className="bg-[#F9B038] border-none py-3"
                />
              </Form.Item>

              <div className="flex items-center justify-between mb-4">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-[#F9B038]">I agree to all the Terms and Privacy Policies</Checkbox>
                </Form.Item>
                
              </div>

              <Form.Item>
                <button
                  type="submit"
                  className={`w-full py-3 bg-[#F9B038] text-black rounded focus:ring-2 focus:ring-gray-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Sign Up"}
                </button>
              </Form.Item>
            </Form>
            
                <h1 className="text-gray-400 text-center mt-5">----Or Login with----</h1>

                 <div className="grid grid-cols-2 gap-3 mt-5">
                  <button className="border flex gap-2 justify-center border-[#F9B038] w-full py-2 rounded text-xl"><FcGoogle className="mt-1"/>Sign In with Google</button>
                  <button className="border border-[#F9B038] w-full flex gap-1 justify-center py-2 rounded text-xl"><FaApple className="mt-1"/>Sign In With Apple</button>
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
