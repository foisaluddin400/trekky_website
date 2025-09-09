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
import { Button, DatePicker, Form, Input, message, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useAddInsuranceMutation, useGetSingleInsuranceCompanyQuery, useUpdateInsuranceCompanyMutation } from "../redux/api/routesApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { imageUrl } from "../redux/api/baseApi";

dayjs.extend(customParseFormat);
const dateFormat = "MM/DD/YYYY";

const onPreview = async (file) => {
  let src =
    file.url ||
    (await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    }));
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

const UpdatingCompanyInfo = () => {
  const [form] = Form.useForm();
  const [cost, setCost] = useState("");
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [updateIinsurance] = useUpdateInsuranceCompanyMutation();
  const {id} = useParams();
  console.log(id)
  const {data:singleInsurance} = useGetSingleInsuranceCompanyQuery({id})
  console.log(singleInsurance)

 const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

useEffect(() => {
  if (singleInsurance?.insuranceCompany) {
    const admin = singleInsurance?.insuranceCompany;

    // ✅ Form values set
    form.setFieldsValue({
      insuranceCompany: admin.insuranceCompany || '',
      websiteLink: admin.websiteLink || '',
      phoneNumber: admin.phoneNumber || "",
      effectiveDate: admin.effectiveDate ? dayjs(admin.effectiveDate) : null,
      renewalDate: admin.renewalDate ? dayjs(admin.renewalDate) : null,
      cost: admin.cost || "",
      notes: admin.notes || "",
      policyNumber: admin.policyNumber || "",
    });

    // ✅ Image list set for Upload component
    if (admin.images && admin.images.length > 0) {
      const formattedImages = admin.images.map((img, index) => ({
        uid: String(index),
        name: img.split("\\").pop(), 
        status: "done",
        url: `${imageUrl}/${img}`, 
      }));
      setFileList(formattedImages);
    }
  }
}, [singleInsurance, form]);




  const formatWithCommas = (value) => {
    if (!value) return "";
    const onlyNumbers = value.toString().replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const parseNumber = (value) => {
    if (!value) return "";
    return value.replace(/,/g, "");
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async (values) => {
    const id = singleInsurance?.insuranceCompany?._id
    console.log("Form Values:", values?.cost);
   const existingImages = fileList
      .filter((file) => file.url)
      .map((file) => file.url.replace(imageUrl, ""));
    const newImages = fileList.filter((file) => file.originFileObj);
    const formData = new FormData();

    formData.append("insuranceCompany", values.insuranceCompany || "");
    formData.append("websiteLink", values.websiteLink || "");
    formData.append(
      "effectiveDate",
      values.effectiveDate ? dayjs(values.effectiveDate).format(dateFormat) : ""
    );
    formData.append(
      "renewalDate",
      values.renewalDate ? dayjs(values.renewalDate).format(dateFormat) : ""
    );
    formData.append("phoneNumber", values.phoneNumber || "");
    formData.append("cost", values.cost ? Number(values.cost) : "");

    formData.append("policyNumber", values.policyNumber || "");
    formData.append("notes", values.notes || "");

    // Multiple image upload
      newImages.forEach((file) => {
      formData.append("images", file.originFileObj);
    });


    try {
      const res = await updateIinsurance({formData,id}).unwrap();
      message.success(res?.message || "Saved successfully");
      form.resetFields();
      setFileList([]);
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container m-auto">
      <div className=" gap-4 lg:mt-8  px-3">
        <div className="pb-7 lg:pb-0">
          <h1 className="text-3xl text-[#F9B038] font-semibold ">
            Update Insurance Company Info
          </h1>
        </div>
        <div className="max-w-4xl m-auto text-[#F9B038] mt-6">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Insurance Company</span>
                }
                name="insuranceCompany"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Insurance Company"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Website Link</span>}
                name="websiteLink"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Website Link"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Phone Number</span>}
                name="phoneNumber"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Type phone"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Effective Date</span>}
                name="effectiveDate"
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Renewal Date</span>}
                name="renewalDate"
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Cost</span>}
                name="cost"
                normalize={(value) => parseNumber(value)} // Store unformatted value in form
                getValueProps={(value) => ({
                  value: formatWithCommas(value),
                })}
                rules={[
                  {
                    pattern: /^\d+$/,
                    message: "Please enter a valid number",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="$"
                />
              </Form.Item>
            </div>

            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Policy Number</span>}
              name="policyNumber"
            >
              <Input
                className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                placeholder="Type account"
              />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <h1 className="text-[#F9B038]">Upload Image</h1>
                {/* <Upload
                  style={{ width: "100%", marginTop: "10px", color: "#F9B038" }}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  multiple={true}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload> */}
                 <Upload
                  style={{ width: "100%", marginTop: "10px", color: "#F9B038" }}
            listType="picture-card"
            fileList={fileList}
            onChange={handleUploadChange}
            onRemove={handleRemove}
            beforeUpload={() => false}
            multiple
          >
            {fileList.length >= 4 ? null : (
              <div className="flex items-center gap-2">
                <PlusOutlined />
                <div>Add Image</div>
              </div>
            )}
          </Upload>
              </div>

              <Form.Item label="Notes" name="notes">
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
                Add
              </button>
            </Form.Item>
          </Form>

          <Link to={"/addTire"}>
            <button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#F9B038] py-2 text-black"
            >
              Skip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatingCompanyInfo;
