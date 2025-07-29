import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from "react-router-dom";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const AddRv = () => {
    const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/information");
  };

  const [cost, setCost] = useState("");
  const handleCostChange = (e) => {
    const input = e.target.value;
    const formatted = formatWithCommas(input);
    setCost(formatted);
    form.setFieldsValue({ cost: formatted });
  };

  const formatWithCommas = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatWithCommas(input);
    setMileage(formatted);
    form.setFieldsValue({ qty: formatted });
  };

  return (
    <div className="container m-auto py-7">
      <div className="gap-4">
        <div className="">
          <h1 className="text-3xl font-semibold text-[#F9B038]">Add RV</h1>
        </div>
        <div className=" max-w-4xl m-auto pt-8">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>RV Nickname</span>}
                name="type"
                rules={[
                  { required: true, message: "Please input your Fuel Type!" },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Fuel Type"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Class</span>}
                name="AddBelt"
                // rules={[
                //   { required: true, message: "Please input your Add Belt!" },
                // ]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Select Inquiry" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="Service_Request">Part</Option>
                    <Option value="Partnership_Inquiry">Qz</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Manufacturer</span>}
                name="Manufacturer"
                rules={[
                  {
                    required: true,
                    message: "Please input your Fuel Add another Belt!",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Add another Belt"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model Name</span>}
                name="ModelName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Fuel Add Oil Filter!",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Add Oil Filter"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model Year</span>}
                name="ModelYear"
                rules={[
                  {
                    required: true,
                    message: "Please input Model Year!",
                  },
                ]}
              >
                <Input
                  type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Model Year"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model</span>}
                name="Model"
                rules={[
                  {
                    required: true,
                    message: "Please input Model!",
                  },
                ]}
              >
                <Input
                  type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Model"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Date of Purchase</span>
                }
                name="date"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your company name!",
                //   },
                // ]}
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                  defaultValue={dayjs("09/03/2019", dateFormat)}
                  minDate={dayjs("08/01/2019", dateFormat)}
                  maxDate={dayjs("10/31/2020", dateFormat)}
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Amount Paid</span>}
                name="cost"
                // rules={[{ required: true, message: "Please input Amount!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="$"
                  value={cost}
                  onChange={handleCostChange}
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Condition</span>}
                name="condition"
                // rules={[{ required: true, message: "Please input Condition!" }]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Select Condition" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="Service_Request">New</Option>
                    <Option value="Partnership_Inquiry">Used</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Current Mileage</span>
                }
                name="Currente"
                // rules={[
                //   { required: true, message: "Please input Current Mileage!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Current Mileage"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Purchased Form</span>}
                name="Purchased"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Purchased Form!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Purchased Form"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>City</span>}
                name="City"
                // rules={[{ required: true, message: "Please input City!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="City"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>State</span>}
                name="State"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input State!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="State"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Phone Number</span>}
                name="Phone Number"
                // rules={[
                //   { required: true, message: "Please input Phone Number!" },
                // ]}
              >
                <Input
                  type="Number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Phone Number"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Floor Plan</span>}
                name="Floor"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Floor Plan!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Floor Plan"
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>
                    Interior Color Scheme
                  </span>
                }
                name="Scheme"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Interior Color Scheme!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Interior Color Scheme"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>
                    Exterior Color Scheme
                  </span>
                }
                name="FlSchemeoor"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Exterior Color Scheme!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Exterior Color Scheme"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Weight</span>}
                name="Weight"
                // rules={[
                //   { required: true, message: "Please input Interior Weight!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Interior Weight"
                />
              </Form.Item>
            </div>
            <p className="mb-2">
              {<span style={{ color: "#F9B038" }}>Length</span>}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="Length"
                // rules={[{ required: true, message: "Please input Length!" }]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Length" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="11">5 Feet</Option>
                    <Option value="12">10 Feet</Option>
                    <Option value="13">20 Feet</Option>
                    <Option value="30">30 Feet</Option>
                    <Option value="40">40 Feet</Option>
                    <Option value="50">50 Feet</Option>
                    <Option value="60">60 Feet</Option>
                    <Option value="70">70 Feet</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>

              <Form.Item
                name="AddBelt"
                // rules={[
                //   { required: true, message: "Please input your Add Belt!" },
                // ]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Inches" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="0">0 Inches</Option>
                    <Option value="1">1 Inches</Option>
                    <Option value="2">2 Inches</Option>
                    <Option value="3">3 Inches</Option>
                    <Option value="4">4 Inches</Option>
                    <Option value="5">5 Inches</Option>
                    <Option value="6">6 Inches</Option>
                    <Option value="7">7 Inches</Option>
                    <Option value="8">8 Inches</Option>
                    <Option value="9">9 Inches</Option>
                    <Option value="10">10 Inches</Option>
                    <Option value="11">11 Inches</Option>
                    <Option value="12">12 Inches</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>
            </div>

            <p className="mb-2">
              {<span style={{ color: "#F9B038" }}>Width</span>}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="Length"
                // rules={[{ required: true, message: "Please input Length!" }]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Length" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="11">5 Feet</Option>
                    <Option value="12">10 Feet</Option>
                    <Option value="13">20 Feet</Option>
                    <Option value="30">30 Feet</Option>
                    <Option value="40">40 Feet</Option>
                    <Option value="50">50 Feet</Option>
                    <Option value="60">60 Feet</Option>
                    <Option value="70">70 Feet</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>

              <Form.Item
                name="AddBelt"
                // rules={[
                //   { required: true, message: "Please input your Add Belt!" },
                // ]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Inches" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="0">0 Inches</Option>
                    <Option value="1">1 Inches</Option>
                    <Option value="2">2 Inches</Option>
                    <Option value="3">3 Inches</Option>
                    <Option value="4">4 Inches</Option>
                    <Option value="5">5 Inches</Option>
                    <Option value="6">6 Inches</Option>
                    <Option value="7">7 Inches</Option>
                    <Option value="8">8 Inches</Option>
                    <Option value="9">9 Inches</Option>
                    <Option value="10">10 Inches</Option>
                    <Option value="11">11 Inches</Option>
                    <Option value="12">12 Inches</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>
            </div>

            <p className="mb-2">
              {<span style={{ color: "#F9B038" }}>Height</span>}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="Length"
                // rules={[{ required: true, message: "Please input Length!" }]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Length" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="11">5 Feet</Option>
                    <Option value="12">10 Feet</Option>
                    <Option value="13">20 Feet</Option>
                    <Option value="30">30 Feet</Option>
                    <Option value="40">40 Feet</Option>
                    <Option value="50">50 Feet</Option>
                    <Option value="60">60 Feet</Option>
                    <Option value="70">70 Feet</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>

              <Form.Item
                name="AddBelt"
                // rules={[
                //   { required: true, message: "Please input your Add Belt!" },
                // ]}
              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F9B038",
                      borderRadius: 8,
                      controlHeight: 40,
                    },
                  }}
                >
                  <Select placeholder="Inches" className="w-full">
                    <Option value="General_Inquiry">Select</Option>
                    <Option value="0">0 Inches</Option>
                    <Option value="1">1 Inches</Option>
                    <Option value="2">2 Inches</Option>
                    <Option value="3">3 Inches</Option>
                    <Option value="4">4 Inches</Option>
                    <Option value="5">5 Inches</Option>
                    <Option value="6">6 Inches</Option>
                    <Option value="7">7 Inches</Option>
                    <Option value="8">8 Inches</Option>
                    <Option value="9">9 Inches</Option>
                    <Option value="10">10 Inches</Option>
                    <Option value="11">11 Inches</Option>
                    <Option value="12">12 Inches</Option>
                  </Select>
                </ConfigProvider>
              </Form.Item>
            </div>
            <Form.Item className=" pt-3">
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

export default AddRv;
