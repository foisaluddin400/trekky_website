import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "MM/DD/YYYY";
const dateFormatt = "MM/DD/YYYY";
const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const NewTrip = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-4xl m-auto">
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label={<span style={{ color: "#F9B038" }}>Trip Title</span>}
          name="title"
          // rules={[{ required: true, message: "Please input Title!" }]}
        >
          <Input
            className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
            placeholder="title"
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ color: "#F9B038" }}>Description</span>}
          name="feedback"
          // rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input.TextArea
            className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
            rows={4}
            placeholder="Type Here..."
          />
        </Form.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label={
              <span style={{ color: "#F9B038" }}>End Date (Optional)</span>
            }
            name="pick"
            // rules={[{ required: true, message: "Please input date!" }]}
          >
            <DatePicker
              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
              format={dateFormatt}
              defaultValue={dayjs("09/03/2019", dateFormatt)}
              minDate={dayjs("08/01/2019", dateFormatt)}
              maxDate={dayjs("10/31/2020", dateFormatt)}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "#F9B038" }}>Start Date</span>}
            name="start"
            // rules={[{ required: true, message: "Please input date!" }]}
          >
            <DatePicker
              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
              format={dateFormat}
              defaultValue={dayjs("09/03/2019", dateFormat)}
              minDate={dayjs("08/01/2019", dateFormat)}
              maxDate={dayjs("10/31/2020", dateFormat)}
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label={<span style={{ color: "#F9B038" }}>State</span>}
            name="State"
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
              <Select placeholder="Select State" className="w-full">
                 <Option value="General_Inquiry">Select</Option>
                <Option value="Service_Request">Alabama</Option>
                <Option value="Partnership_Inquiry">Alaska</Option>
                <Option value="Partnership_Inquiry">Arizon</Option>
                <Option value="Partnership_Inquiry">Arkansas</Option>
                <Option value="Partnership_Inquiry">Colifornia</Option>
                <Option value="Partnership_Inquiry">Colorado</Option>
                <Option value="Partnership_Inquiry">Connecticut</Option>
                <Option value="Partnership_Inquiry">Delaware</Option>
                <Option value="Partnership_Inquiry">Florida</Option>
                <Option value="Partnership_Inquiry">Georgia</Option>
                <Option value="Partnership_Inquiry">Hawaii</Option>
                <Option value="Partnership_Inquiry">Kansas</Option>
                <Option value="Partnership_Inquiry">Kentucky</Option>
                <Option value="Partnership_Inquiry">Louisiana</Option>
                <Option value="Partnership_Inquiry">Maine</Option>
                <Option value="Partnership_Inquiry">Maryland</Option>
                <Option value="Partnership_Inquiry">Massachusetts</Option>
                <Option value="Partnership_Inquiry">Michigan</Option>
              </Select>
            </ConfigProvider>
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "#F9B038" }}>Visit Status</span>}
            name="Visit"
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
              <Select placeholder="Select Visit State" className="w-full">
                <Option value="General_Inquiry">Select</Option>
                <Option value="Service_Request">Camped</Option>
                <Option value="Partnership_Inquiry">Traveled Though</Option>
                <Option value="Partnership_Inquiry">Planning To Visit</Option>
                <Option value="Partnership_Inquiry">Not Yet Visited</Option>
              </Select>
            </ConfigProvider>
          </Form.Item>
        </div>

        <Form.Item
          label={<span style={{ color: "#F9B038" }}>Trip Type</span>}
          name="trip"
          // rules={[{ required: true, message: "Please input your cost!" }]}
        >
          <Input
            className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
            placeholder="Trip Type"
          />
        </Form.Item>

      

        <Form.Item className=" pt-7">
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
  );
};

export default NewTrip;
