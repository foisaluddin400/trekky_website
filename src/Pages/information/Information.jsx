import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Link, useNavigate } from "react-router-dom";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const Information = () => {
    const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/insuranceCompanyInfoForm");
  };

  return (
    <div className="container m-auto">
      <div className="lg:flex gap-4 lg:mt-11 mt-6 px-3">
        <div className="lg:w-[300px] pb-7 lg:pb-0">
          <h1 className="text-3xl font-semibold text-[#F9B038]">
            Chassis information
          </h1>
        </div>
        <div className="w-full max-w-4xl">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Mfg</span>}
                name="type"
                rules={[{ required: true, message: "Please input Mfg!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Mfg"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model</span>}
                name="type"
                rules={[{ required: true, message: "Please input Model!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Model"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Name</span>}
                name="type"
                rules={[{ required: true, message: "Please input Name!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Serial ID</span>}
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Please input your Fuel Add Oil Filter!",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Serial ID"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Engine Model</span>}
                name="filter"
                rules={[
                  { required: true, message: "Please input Engine Model" },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Engine Model"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Horsepower</span>}
                name="filter"
                rules={[{ required: true, message: "Please input Horsepower" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Horsepower"
                />
              </Form.Item>
            </div>

            <div>
              <div className="flex gap-4">
                <Link className="w-full" to={"/information/addBelt"}>
                  {" "}
                  <button className="w-full bg-[#F9B038] p-3 rounded">
                    Add a belt
                  </button>
                </Link>
                <Link className="w-full" to={"/information/addOiltFilter"}>
                  <button className="w-full bg-[#F9B038] p-3 rounded">
                    Add An Oil Filter
                  </button>
                </Link>
              </div>
              <div className="flex gap-4 pt-5">
                <Link className="w-full" to={"/information/addFuelFilter"}>
                  <button className="w-full bg-[#F9B038] p-3 rounded">
                    Add a Fuel Filter
                  </button>
                </Link>
                <Link className="w-full" to={"/information/addOtherBeltFilter"}>
                  {" "}
                  <button className="w-full bg-[#F9B038] p-3 rounded">
                    Add other belt or filter
                  </button>
                </Link>
              </div>
            </div>

            <Form.Item className=" pt-9">
              <button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#F9B038] py-2"
              >
                Save
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Information;
