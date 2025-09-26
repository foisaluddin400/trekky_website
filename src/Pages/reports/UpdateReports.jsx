import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Upload,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  useAddRepairMutation,
  useAddReportsMutation,
  useGetSingleReportsQuery,
  useUpdateReportsMutation,
} from "../redux/api/routesApi";
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
const UpdateReports = () => {
  const { id } = useParams();
  const { data: singleUpdate } = useGetSingleReportsQuery({ id });
  console.log(singleUpdate);
  const [newRepair] = useUpdateReportsMutation();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("reportTitle", values.reportTitle || "");
    formData.append("area", values.area || "");
    formData.append("odometerReading", values.odometerReading || "");
    formData.append(
      "dateOfService",
      values.dateOfService ? dayjs(values.dateOfService).format(dateFormat) : ""
    );

    formData.append("cost", values.cost ? Number(values.cost) : "");

    formData.append("note", values.notes || "");

    // Multiple image upload

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
    if (singleUpdate?.data) {
      const admin = singleUpdate?.data;

      // ✅ Form values set
      form.setFieldsValue({
        reportTitle: admin.reportTitle || "",
        location: admin.location || "",
        odometerReading: admin.odometerReading || "",
        area: admin.area || "",
        dateOfService: admin.dateOfService ? dayjs(admin.dateOfService) : null,
        effectiveDate: admin.effectiveDate ? dayjs(admin.effectiveDate) : null,
        renewalDate: admin.renewalDate ? dayjs(admin.renewalDate) : null,
        cost: admin.cost || "",
        notes: admin.note || "",
        policyNumber: admin.policyNumber || "",
      });
    }
  }, [singleUpdate, form]);
  return (
    <div className="container m-auto">
      <div className=" lg:mt-11 mt-6 px-3">
        <div className=" pb-7 lg:pb-0">
          <h1 className="text-3xl font-semibold text-[#F9B038]">
            Update Reports
          </h1>
        </div>
        <div className="max-w-4xl m-auto">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="">
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Date Of Service</span>
                }
                name="dateOfService"
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
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Area</span>}
                name="area"
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
                label={
                  <span style={{ color: "#F9B038" }}>Odometer Reading</span>
                }
                name="odometerReading"
                // rules={[
                //   { required: true, message: "Please input city/state!" },
                // ]}
              >
                <Input
                  type="number"
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Odometer Reading"
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
                label={<span style={{ color: "#F9B038" }}>Report Title</span>}
                name="reportTitle"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your company name!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="report Title"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
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

export default UpdateReports;
