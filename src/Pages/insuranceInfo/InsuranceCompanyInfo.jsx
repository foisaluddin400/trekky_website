// import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
// import Dragger from 'antd/es/upload/Dragger';
// import React, { useState } from 'react'
// import { InboxOutlined } from '@ant-design/icons';
// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);
// const dateFormat = 'YYYY-MM-DD';
// const props = {
//     name: 'file',
//     multiple: true,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//         const { status } = info.file;
//         if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     onDrop(e) {
//         console.log('Dropped files', e.dataTransfer.files);
//     },
// };
// const InsuranceCompanyInfo = () => {
//     const [form] = Form.useForm();
//     const [cost, setCost] = useState('');

//     const formatWithCommas = (value) => {
//         const onlyNumbers = value.replace(/[^\d]/g, '');
//         return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     };
//     const handleCostChange = (e) => {
//         const input = e.target.value;
//         const formatted = formatWithCommas(input);
//         setCost(formatted);
//         form.setFieldsValue({ cost: formatted });
//     };

//     const handleSubmit = (values) => {
//         console.log(values)
//     };
//     const companies = ["Allstate", "Progressive", "Reserve"];
//     return (
//         <div className='container m-auto'>

//             <div className=' gap-4  px-3'>
//                 <div className='lg:w-[300px] pb-7 lg:pb-0'>
//                     <h1 className='text-3xl font-semibold text-[#F9B038]'>Insurance Info</h1>
//                 </div>
//                 <div className="space-y-5 pt-5 max-w-[900px] m-auto">
//                     {companies.map((company, index) => (
//                         <div key={index}>
//                             <label className="block mb-1 text-[#F9B038] font-medium">{company}</label>
//                             <div className="flex flex-col md:flex-row gap-3">
//                                 <input
//                                     type="text"
//                                     defaultValue={company}
//                                     className="border border-[#F9B038] text-[#F9B038] px-4 bg-transparent py-2 rounded-md w-full md:w-1/3"
//                                 />
//                                 <button className="border border-[#F9B038] text-[#F9B038] px-4 py-2 rounded-md w-full md:w-1/3">
//                                     Update Policy
//                                 </button>
//                                 <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full md:w-1/4">
//                                     Delete Policy
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InsuranceCompanyInfo

import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from "react-router-dom";
dayjs.extend(customParseFormat);
const dateFormat = "MM/DD/YYYY";

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

const InsuranceCompanyInfo = () => {
  const [form] = Form.useForm();
  const [cost, setCost] = useState("");
  const formatWithCommas = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
const navigate = useNavigate();
  const handleCostChange = (e) => {
    const input = e.target.value;
    const formatted = formatWithCommas(input);
    setCost(formatted);
    form.setFieldsValue({ cost: formatted });
  };

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/addTire");
  };
  return (
    <div className="container m-auto">
      <div className=" gap-4 lg:mt-8  px-3">
        <div className="pb-7 lg:pb-0">
          <h1 className="text-3xl text-[#F9B038] font-semibold ">
            Insurance Company Info
          </h1>
        </div>
        <div className="max-w-4xl m-auto text-[#F9B038] mt-6">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Insurance Company</span>
                }
                name="name"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Insurance Company!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Insurance Company"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Website Link</span>}
                name="name"
                // rules={[
                //   { required: true, message: "Please input Website Link!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Website Link"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Phone Number</span>}
                name="phone"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Phone Number!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Type phone"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Effective Date</span>}
                name="repair"
                // rules={[
                //   { required: true, message: "Please input Effective Date!" },
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
                label={<span style={{ color: "#F9B038" }}>Renewal Date</span>}
                name="DatePuschase"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input Renewal Date!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Renewal Date"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Cost</span>}
                name="cost"
                // rules={[{ required: true, message: "Please input your cost!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="$"
                  value={cost}
                  onChange={handleCostChange}
                />
              </Form.Item>
            </div>

            <div className="">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Policy Number</span>}
                name="account"
                // rules={[
                //   { required: true, message: "Please input your account!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Type account"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon ">
                  <InboxOutlined />
                </p>
                <p className=" text-[#F9B038]">
                  Click or drag file to this area to upload
                </p>
                <p className="text-[#F9B038]">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
              <Form.Item
                label="Notes"
                name="feedback"
                // rules={[{ required: true, message: "Please input Notes!" }]}
              >
                <Input.TextArea
                  className="w-full bg-[#F9B038] border border-transparent py-2"
                  rows={4}
                  placeholder="Type Notes..."
                />
              </Form.Item>
            </div>

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
      </div>
    </div>
  );
};

export default InsuranceCompanyInfo;
