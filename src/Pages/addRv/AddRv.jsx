import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  message,
  Select,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from "react-router-dom";
import { useAddRvMutation } from "../redux/api/routesApi";
dayjs.extend(customParseFormat);
const dateFormat = "MM/DD/YYYY";
const AddRv = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [addRv] = useAddRvMutation();

  const handleSubmit = async (values) => {
    const toFeet = (feet, inches) =>
    parseFloat(feet || 0) + (parseFloat(inches || 0) / 12);
 const payload = {
    length: toFeet(values.lengthFeet, values.lengthInches),
    width: toFeet(values.widthFeet, values.widthInches),
    height: toFeet(values.heightFeet, values.heightInches),
  };
  console.log(payload);

    const data = {
         ...payload,
      nickname: values.nickname,
      class: values.class,
      manufacturer: values.manufacturer,
      modelName: values.modelName,
      modelYear: values.modelYear,
      model: values.model,
      dateOfPurchase: values.dateOfPurchase?.toISOString(), 
      amountPaid: values.amountPaid,
      condition: values.condition,
      currentMileage: values.currentMileage,
      purchasedFrom: values.purchasedFrom,
      city: values.city,
      state: values.state,
      phoneNumber: values.phoneNumber,
      floorplan: values.floorplan,
      interiorColorScheme: values.interiorColorScheme,
      exteriorColorScheme: values.exteriorColorScheme,
    
      weight: values.weight,
    };

    try {
      const res = await addRv(data).unwrap();
      message.success(res?.message || "RV added successfully!");
      navigate("/information");
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong!");
    }
  };

  const formatWithCommas = (value) => {
    if (!value) return "";
    const onlyNumbers = value.toString().replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const parseNumber = (value) => {
    if (!value) return "";
    return value.replace(/,/g, "");
  };

  return (
    <div className="container m-auto py-7 px-3 lg:px-0">
      <div className="gap-4">
        <div className="">
          <h1 className="text-3xl font-semibold text-[#F9B038]">Add RV</h1>
        </div>
        <div className=" max-w-4xl m-auto pt-8">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>RV Nickname</span>}
                name="nickname"
                rules={[{ required: true, message: "Enter RV Nickname" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Enter RV Nickname"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Class</span>}
                name="class"
              >
                <Select
                  className="custom-select"
                  style={{ height: "40px" }}
                  placeholder="Select Class"
                >
                  <Option value="Class A">Class A</Option>
                  <Option value="Class B">Class B</Option>
                  <Option value="Class C">Class C</Option>
                  <Option value="Super C">Super C</Option>
                  <Option value="5th Wheel">5th Wheel</Option>
                  <Option value="Camper">Camper</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Manufacturer</span>}
                name="manufacturer"
                rules={[
                  {
                    required: true,
                    message: "Please input Manufacturer",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Manufacturer"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model Name</span>}
                name="modelName"
                rules={[
                  {
                    required: true,
                    message: "Please input Model Name",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Model Name"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model Year</span>}
                name="modelYear"
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
                name="model"
                rules={[
                  {
                    required: true,
                    message: "Please input Model!",
                  },
                ]}
              >
                <Input
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
                name="dateOfPurchase"
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Amount Paid</span>}
                name="amountPaid"
                normalize={(value) => parseNumber(value)}
                getValueProps={(value) => ({
                  value: formatWithCommas(value),
                })}
                rules={[
                  {
                    pattern: /^\d+$/,
                    message: "Please enter Amount Paid",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Amount Paid"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Condition</span>}
                name="condition"
              >
                <Select
                  className="custom-select"
                  style={{ height: "40px" }}
                  placeholder="Select Condition"
                >
                  <Option value="New">New</Option>
    <Option value="Used">Used</Option>
    <Option value="Excellent">Excellent</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Current Mileage</span>
                }
                name="currentMileage"
              >
                <Input
                type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Current Mileage"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Purchased Form</span>}
                name="purchasedFrom"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Purchased Form"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>City</span>}
                name="City"
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
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="State"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Phone Number</span>}
                name="phoneNumber"
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
                name="floorplan"
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
                name="interiorColorScheme"
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
                name="exteriorColorScheme"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Exterior Color Scheme"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Weight</span>}
                name="weight"
              >
                <Input
                type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Interior Weight"
                />
              </Form.Item>
            </div>


            {/* <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Form.Item name="length">
                    <Input
                      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                      placeholder="Feet"
                    />
                  </Form.Item>
                </div>

                <Form.Item name="inches">
                  <Input
                    className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                    placeholder="Inches"
                  />
                </Form.Item>
              </div>

              <div className="">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Form.Item name="length">
                      <Input
                        className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                        placeholder="Feet"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item name="inches">
                    <Input
                      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                      placeholder="Inches"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p className="mb-2">
                {<span style={{ color: "#F9B038" }}>Hight</span>}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Form.Item name="length">
                    <Input
                      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                      placeholder="Feet"
                    />
                  </Form.Item>
                </div>

                <Form.Item name="inches">
                  <Input
                    className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                    placeholder="Inches"
                  />
                </Form.Item>
              </div>
            </div> */}
            {/* Length */}
<div className="grid grid-cols-2 gap-4">
  <p className="mb-2">
    <span style={{ color: "#F9B038" }}>Length</span>
  </p>
</div>
<div className="grid grid-cols-2 gap-4">
  <Form.Item name="lengthFeet">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Feet"
    />
  </Form.Item>
  <Form.Item name="lengthInches">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Inches"
    />
  </Form.Item>
</div>

{/* Width */}
<div className="grid grid-cols-2 gap-4 mt-4">
  <p className="mb-2">
    <span style={{ color: "#F9B038" }}>Width</span>
  </p>
</div>
<div className="grid grid-cols-2 gap-4">
  <Form.Item name="widthFeet">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Feet"
    />
  </Form.Item>
  <Form.Item name="widthInches">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Inches"
    />
  </Form.Item>
</div>

{/* Height */}
<div className="grid grid-cols-2 gap-4 mt-4">
  <p className="mb-2">
    <span style={{ color: "#F9B038" }}>Height</span>
  </p>
</div>
<div className="grid grid-cols-2 gap-4">
  <Form.Item name="heightFeet">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Feet"
    />
  </Form.Item>
  <Form.Item name="heightInches">
    <Input
      className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
      placeholder="Inches"
    />
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
