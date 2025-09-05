import { DatePicker, Form, Input, message, Select, Upload } from "antd";

import React, { useState } from "react";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from "react-router-dom";
import { useAddTireMutation } from "../redux/api/routesApi";

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

const AddTire = () => {
  const [form] = Form.useForm();
  const [cost, setCost] = useState("");
  const [fileList, setFileList] = useState([]);
  const [addTire] = useAddTireMutation();
  const formatWithCommas = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const navigate = useNavigate();
const handleCostChange = (e) => {
  const input = e.target.value;
  const onlyNumbers = input.replace(/[^\d]/g, ""); // remove non-numeric
  const formatted = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add commas
  setCost(formatted);
  form.setFieldsValue({ cost: onlyNumbers }); // backend এ numeric value রাখবে
};


  const handleSubmit = async (values) => {
    console.log("Form Values:", values?.cost);

    const formData = new FormData();
    formData.append("mfg", values.Manufacturer || "");
    formData.append("location", values.location || "");
    formData.append(
      "dateOfPurchase",
      values.effectiveDate ? dayjs(values.effectiveDate).format(dateFormat) : ""
    );

formData.append("cost", values.cost ? Number(values.cost) : "");



    formData.append("notes", values.notes || "");

    // Multiple image upload
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images", file.originFileObj);
      }
    });

    try {
      const res = await addTire(formData).unwrap();
      message.success(res?.message || "Saved successfully");
      navigate("/add");
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="container m-auto">
      <div className=" lg:mt-11 mt-6 px-3">
        <div className="lg:w-[300px] pb-7 lg:pb-0">
          <h1 className="text-3xl text-[#F9B038] font-semibold ">Add Tire</h1>
        </div>
        <div className="max-w-4xl m-auto text-[#F9B038]">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Manufacturer</span>}
                name="Manufacturer"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Manufacturer"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Date Purchase</span>}
                name="dateOfPurchase"
              >
                <DatePicker
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  format={dateFormat}
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Tire Size</span>}
                name="size"
              >
                <Input
                  type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Tire Size"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Location</span>}
                name="location"
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Location"
                />
              </Form.Item>
            </div>

           <Form.Item
  label={<span style={{ color: "#F9B038" }}>Cost</span>}
  name="cost"
>
  <Input
    className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
    placeholder="$"
    value={cost}
    onChange={handleCostChange}
  />
</Form.Item>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                multiple={true}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Notes</span>}
                name="notes"
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

export default AddTire;
