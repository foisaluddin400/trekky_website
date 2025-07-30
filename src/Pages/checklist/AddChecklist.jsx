import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useState } from "react";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
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

const AddChecklist = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
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

  const handleSubmit = (values) => {
    console.log(values);
    // navigate("/");
  };

  useEffect(() => {
    form.setFieldsValue({ cooking: [""], ingredients: [""], nutrition: [""] });
  }, [form]);
  return (
    <div className="container m-auto">
      <div className=" gap-4 lg:mt-8 mt-6 px-3">
        <div className=" pb-7 lg:pb-0">
          <h1 className="text-3xl text-[#F9B038] font-semibold mb-6">
            Add Checklist
          </h1>
        </div>
        <div className="max-w-4xl m-auto text-[#F9B038]">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Title</span>}
              name="title"
            //   rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input
                className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                placeholder="Title"
              />
            </Form.Item>

            <Form.List name="ingredients">
              {(fields, { add, remove }) => (
                <>
                  <div className="pb-2 text-[#F9B038]">Item</div>
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-11">
                        {fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-12 mb-2">
                        <Form.Item
                          className="col-span-11"
                          {...field}
                          name={[field.name]}
                        //   rules={[{ required: true, message: "Required" }]}
                        >
                          <Input className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2" placeholder="Add Item"/>
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                            className="ml-5 text-red-500"
                          />
                        )}
                      </div>
                    ))}
                    </div>
                    <Form.Item>
                      <div className="">
                        <Button
                          style={{
                            backgroundColor: "#00000000",
                            color: "#fff",
                            border: "1px solid #F9B038",
                            color: "#F9B038",
                            width: "32px",
                            borderRadius: "50%",
                          }}
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        ></Button>
                      </div>
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>

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

export default AddChecklist;
