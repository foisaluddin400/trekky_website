import { Checkbox, Form, Input, message, Modal } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../assets/Home/hero.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";



const Login = () => {


  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Check if route state requests to show modal
    if (location.state?.showModal) {
      setModalVisible(true);

      // Auto close modal after 5 seconds
      const timer = setTimeout(() => {
        setModalVisible(false);
      }, 3000);

      // Clean up timer on unmount or if modal closes early
      return () => clearTimeout(timer);
    }
  }, [location.state]);

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
    <>
      <Modal
        centered
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <h1 className="text-center pb-3 text-3xl">Our app is available! You can download it now.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur facilis numquam tempora voluptatibus rerum ex dolorem corporis quaerat iste, beatae nisi cum repellat dolore, officiis nostrum consectetur doloremque! Accusantium, voluptatum consequuntur dignissimos inventore repellat voluptas ipsa eius commodi hic error corrupti, deserunt enim. Veritatis nostrum aliquam illo quibusdam commodi.</p>
        <button className="bg-[#27E2F5] w-full py-2 mt-4">Let's Go</button>
      </Modal>

      <div className="min-h-screen bg-white flex items-center justify-center md:px-4">
        <div className="w-full max-w-[1500px] m-auto">
          <div className="md:flex md:justify-center lg:grid grid-cols-2">
            <div className="  lg:w-full md:px-16 px-5  ">

              <h2 className="text-xl font-bold mb-2 text-gray-800">
                Sign in to your account
              </h2>

              <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off" layout="vertical">
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                    { type: "email", message: "The input is not valid E-mail!" },
                  ]}
                >
                  <Input placeholder="Enter your Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <div className="flex items-center justify-between mb-4">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="text-gray-700">Remember me</Checkbox>
                  </Form.Item>
                  <Link to={"/forgetpassword"} className="text-sm text-[#2F799E] hover:underline">
                    Forget password?
                  </Link>
                </div>

                <Form.Item>
                  <button
                    type="submit"
                    className={`w-full py-3 bg-[#27E2F5] text-black rounded focus:ring-2 focus:ring-gray-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </Form.Item>
              </Form>
              <Link to={'/auth/signUp'}><button
                type="submit"
                className={`w-full py-3 bg-[#27E2F5] text-black rounded focus:ring-2 focus:ring-gray-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}

              >
                Create An Account
              </button></Link>
              <h1 className="text-gray-400 text-center mt-5">----Or Login with----</h1>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="border flex gap-2 justify-center border-[#27E2F5] w-full py-2 rounded text-xl"><FcGoogle className="mt-1" />Sign In with Google</button>
                <button className="border border-[#27E2F5] w-full flex gap-1 justify-center py-2 rounded text-xl"><FaApple className="mt-1" />Sign In With Apple</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img className="rounded-3xl" src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
