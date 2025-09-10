import { Button, ConfigProvider, DatePicker, Form, Input, message, Select, Upload } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useAddRepairMutation, useGetSingleRepairQuery, useUpdateRepairMutation } from "../redux/api/routesApi";
import { imageUrl } from "../redux/api/baseApi";
import { useParams } from "react-router-dom";
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
const UpdateRepairOrder = () => {
  const {id} = useParams();
    const {data:singleUpdate} = useGetSingleRepairQuery({id})
    console.log(singleUpdate)

  const[newRepair] = useUpdateRepairMutation()
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
   
     const formData = new FormData();
    formData.append("vendor", values.vendor || "");
    formData.append("cityState", values.cityState || "");
    formData.append(
      "date",
      values.date
        ? dayjs(values.date).format(dateFormat)
        : ""
    );

    formData.append("cost", values.cost ? Number(values.cost) : "");
    formData.append("qty", values.cost ? Number(values.qty) : "");

    formData.append("notes", values.notes || "");

    // Multiple image upload
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images", file.originFileObj);
      }
    });

    try {
      const res = await newRepair({formData,id}).unwrap();
      message.success(res?.message || "Saved successfully");
      
      form.resetFields();
      setFileList([]);
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };
  const [fileList, setFileList] = useState([]);
   const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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

     useEffect(() => {
      if (singleUpdate?.newRepair) {
        const admin = singleUpdate?.newRepair


  ;
    
        // ✅ Form values set
        form.setFieldsValue({
          qty: admin.qty || '',
          vendor: admin.vendor || '',
          modelNumber: admin.modelNumber || '',
          phoneNumber: admin.phoneNumber || "",
          date: admin.date ? dayjs(admin.date) : null,
          effectiveDate: admin.effectiveDate ? dayjs(admin.effectiveDate) : null,
          renewalDate: admin.renewalDate ? dayjs(admin.renewalDate) : null,
          cost: admin.cost || "",
          notes: admin.notes || "",
          cityState: admin.cityState || "",
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
    }, [singleUpdate, form]);
  return (
    <div className="container m-auto">
      <div className=" lg:mt-11 mt-6 px-3">
        <div className=" pb-7 lg:pb-0">
          <h1 className="text-3xl font-semibold text-[#F9B038]">
            Update New Repair
          </h1>
        </div>
        <div className="max-w-4xl m-auto">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="">
             
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Date</span>}
                name="date"
             
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Vendor</span>}
                name="vendor"
                // rules={[
                //   { required: true, message: "Please input vendor!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Eddlie"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>City/State</span>}
                name="cityState"
                // rules={[
                //   { required: true, message: "Please input city/state!" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Type city/state"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Cost</span>}
                name="cost"
                normalize={(value) => parseNumber(value)}
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

             <Form.Item
                label={<span style={{ color: "#F9B038" }}>QTY</span>}
                name="qty"
                normalize={(value) => parseNumber(value)}
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

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <h1 className="text-[#F9B038]">Upload Image</h1>
                <Upload
                  style={{ width: "100%", marginTop: "10px", color: "#F9B038" }}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  multiple={true}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </div>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Notes</span>}
                name="notes"
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

export default UpdateRepairOrder;
