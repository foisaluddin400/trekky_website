import { DatePicker, Form, Input, Modal } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

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
const AddReports = ({ openAddModal, setOpenAddModal }) => {
  const [cost, setCost] = useState("");
  const formatWithCommas = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCostChange = (e) => {
    const input = e.target.value;
    const formatted = formatWithCommas(input);
    setCost(formatted);
    form.setFieldsValue({ cost: formatted });
  };

  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setOpenAddModal(false);
  };
  const handleSubmit = async (values) => {
    console.log(values);
    // const formData = new FormData();

    // formData.append("url", values?.url);

    // fileList.forEach((file) => {
    //   formData.append("image", file.originFileObj);
    // });
    // setLoading(true);

    // try {
    //   const res= await adds(formData).unwrap();
    //   setLoading(false);
    //   message.success(res?.message);
    //   setOpenAddModal(false);
    //   setLoading(false);
    //   form.resetFields();
    // } catch (error) {
    //   message.error(` ${error?.data?.message}`);
    //   setLoading(false);
    // }
  };
  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={500}
    >
      <div className="mb-6 mt-2 ">
        <h2 className="text-center font-semibold text-xl mb-4 text-[#F9B038]">
          Add Reports
        </h2>

        <div>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Report Title</span>}
                name="Report"
                rules={[
                  {
                    required: true,
                    message: "Please input Report Title!",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Report"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Area</span>}
                name="Area"
                rules={[
                  { required: true, message: "Please input Area!" },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Area"
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ color: "#F9B038" }}>Odometer Reading</span>
                }
                name="Odometer"
                rules={[
                  {
                    required: true,
                    message: "Please input Odometer Reading!",
                  },
                ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Odometer Reading"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Date of Service</span>}
                name="Date"
                rules={[
                  { required: true, message: "Please input Date!" },
                ]}
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
            <Form.Item
                label={<span style={{ color: "#F9B038" }}>Cost</span>}
                name="cost"
                rules={[{ required: true, message: "Please input your cost!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="$"
                  value={cost}
                  onChange={handleCostChange}
                />
              </Form.Item>
            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Notes</span>}
              name="feedback"
              // rules={[{ required: true, message: "Please input Notes!" }]}
            >
              <Input.TextArea
                className="w-full bg-[#F9B038] border border-transparent py-2"
                rows={4}
                placeholder="Type Notes..."
              />
            </Form.Item>

            <Form.Item className=" pt-7">
              <button
                type="primary"
                htmlType="submit"
                className="w-full border border-black py-2"
              >
                Save
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AddReports;
