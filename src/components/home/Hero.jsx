import React, { useState } from "react";
import hero from "../../assets/Home/hero.png";
import { Dropdown, Form, Input, Modal, Space } from "antd";
import { Link } from "react-router-dom";
const Hero = () => {
    const [openAddModal, setOpenAddModal] = useState(false);
  const dropdownItemsProfile = [
    {
      label: <div>55444UVd</div>,
      key: "profilepage",
    },
    {
      label: <div>55444UVd</div>,
      key: "profdilepage",
    },
     {
      label: <div>55444UVd</div>,
      key: "profdilepadge",
    },
  

  ];

  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setOpenAddModal(false);
  };
  const handleSubmit = async (values) => {
    console.log(values);
    // const formData = new FormData();

    // formData.append("url", values?.url);

    // fileList.forEach((file) => {
    //   formData.append("image", file.originFileObj);
    // });
    // setLoading(true);

    // try {
    //   const res= await adds(formData).unwrap();
    //   setLoading(false);
    //   message.success(res?.message);
    //   setOpenAddModal(false);
    //   setLoading(false);
    //   form.resetFields();
    // } catch (error) {
    //   message.error(` ${error?.data?.message}`);
    //   setLoading(false);
    // }
  };
  return (
    <div className="lg:grid grid-cols-2 container m-auto gap-11 lg:mt-9 text-[#F9B038]">
      <img className="w-full object-cover" src={hero} alt="" />
      <div className="flex items-center px-3">
        <div>
          <h1 className="md:text-6xl text-3xl mt-5 lg:mt-0 font-bold text-[#F9B038]">
            Welcome Eddie!
          </h1>
          <p className="max-w-2xl pt-4">
            Welcome to My RV Vault. Get started by tracking your latest
            expenses, managing repairs, or reviewing your checklists. We've got
            everything you need to maintain your RV life in one place!"
          </p>
          <div className="flex justify-start pt-8">
            <div className="">
              <div className="flex gap-3 bg-black p-3 items-center text-white">
                <h1>
                  2025 Cornerstone <br />
                  VIN#554454UJVD{" "}
                </h1>
                <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}><Link onClick={(e) => e.preventDefault()}><button className="bg-[#F9B038] px-5 py-3">
                  Select Other RV
                </button></Link></Dropdown>
              </div>
              <div className="bg-black flex gap-3 items-center text-white mt-3 p-3">
                <button className="bg-[#F9B038] px-11 py-3">53,5343</button>
                <h1>Current Mileage</h1>
                <button onClick={() => setOpenAddModal(true)}>
                
                   
                      <Space >:</Space>
                  
                </button>

                {/* <span><Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
                
                  <Space>
                    :
                  </Space>
                
              </Dropdown></span> */}


              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        centered
        open={openAddModal}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className="mb-6 mt-2 ">
          <h2 className="text-center font-semibold text-xl mb-4 text-[#F9B038]">
            Enter current mileage
          </h2>

          <div>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <div className="">
                <Form.Item
                  label={
                    <span style={{ color: "#F9B038" }}>
                     Enter current mileage
                    </span>
                  }
                  name="type"
                  rules={[
                    {
                      required: true,
                      message: "Please input Enter current mileage!",
                    },
                  ]}
                >
                  <Input
                    className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                    placeholder="Enter current mileage"
                  />
                </Form.Item>
             
              </div>

              <Form.Item className=" pt-7">
                <button
                  type="primary"
                  htmlType="submit"
                  className="w-full border border-black py-2"
                >
                  Save
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
