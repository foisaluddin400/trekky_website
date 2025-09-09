
import { Button, DatePicker, Form, Input, message, Upload } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddInsuranceMutation } from "../redux/api/routesApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

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

const InsuranceCompanyInfo = () => {
  const [form] = Form.useForm();
  const [cost, setCost] = useState("");
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [addInsurance] = useAddInsuranceMutation();

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

  const handleCostChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/[^\d]/g, "");
    const formatted = formatWithCommas(onlyNumbers);
    setCost(formatted);
    form.setFieldsValue({ cost: onlyNumbers });
  };
  const handleSubmit = async (values) => {
    console.log("Form Values:", values?.cost);

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
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images", file.originFileObj);
      }
    });

    try {
      const res = await addInsurance(formData).unwrap();
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

export default InsuranceCompanyInfo;
