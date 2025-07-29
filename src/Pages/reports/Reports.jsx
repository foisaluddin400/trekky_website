import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { DeleteOutlined, EyeOutlined, InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import AddReports from "./AddReports";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
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
const Reports = () => {
  const [form] = Form.useForm();
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="container m-auto  py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">Reports</h1>{" "}
       <div>
         <button
          onClick={() => setOpenAddModal(true)}
          className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium "
        >
          Add Report
        </button>
       </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex  justify-between items-center">
              <div>
                <span>Report Title :</span>
                <span className="font-normal">
                  Roof Sealant Maintenance - April 2025
                </span>
              </div>
              <div className="text-red-600">
                <BsHeartFill></BsHeartFill>
              </div>
            </div>
            <div className=" gap-4">
              <span>Cost :</span>
              <span className="font-normal">$34</span>
            </div>

            <div className=" gap-4">
              <span>Area :</span>
              <span className="font-normal">Dhaka</span>
            </div>
            <div className=" gap-4">
              <span>Date of Services :</span>
              <span className="font-normal">03-24-2025</span>
            </div>

            <div className=" gap-4">
              <span>Odometer Reading :</span>
              <span className="font-normal">20,343 miles</span>
            </div>
            <div className=" gap-4">
              <span>Notes :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                natus?
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={""}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex  justify-between items-center">
              <div>
                <span>Report Title :</span>
                <span className="font-normal">
                  Roof Sealant Maintenance - April 2025
                </span>
              </div>
              <div className="text-red-600">
                <BsHeartFill></BsHeartFill>
              </div>
            </div>
            <div className=" gap-4">
              <span>Cost :</span>
              <span className="font-normal">$34</span>
            </div>

            <div className=" gap-4">
              <span>Area :</span>
              <span className="font-normal">Dhaka</span>
            </div>
            <div className=" gap-4">
              <span>Date of Services :</span>
              <span className="font-normal">03-24-2025</span>
            </div>

            <div className=" gap-4">
              <span>Odometer Reading :</span>
              <span className="font-normal">20,343 miles</span>
            </div>
            <div className=" gap-4">
              <span>Notes :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                natus?
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={""}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex  justify-between items-center">
              <div>
                <span>Report Title :</span>
                <span className="font-normal">
                  Roof Sealant Maintenance - April 2025
                </span>
              </div>
              <div className="text-red-600">
                <BsHeartFill></BsHeartFill>
              </div>
            </div>
            <div className=" gap-4">
              <span>Cost :</span>
              <span className="font-normal">$34</span>
            </div>

            <div className=" gap-4">
              <span>Area :</span>
              <span className="font-normal">Dhaka</span>
            </div>
            <div className=" gap-4">
              <span>Date of Services :</span>
              <span className="font-normal">03-24-2025</span>
            </div>

            <div className=" gap-4">
              <span>Odometer Reading :</span>
              <span className="font-normal">20,343 miles</span>
            </div>
            <div className=" gap-4">
              <span>Notes :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                natus?
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={""}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex  justify-between items-center">
              <div>
                <span>Report Title :</span>
                <span className="font-normal">
                  Roof Sealant Maintenance - April 2025
                </span>
              </div>
              <div className="text-red-600">
                <BsHeartFill></BsHeartFill>
              </div>
            </div>
            <div className=" gap-4">
              <span>Cost :</span>
              <span className="font-normal">$34</span>
            </div>

            <div className=" gap-4">
              <span>Area :</span>
              <span className="font-normal">Dhaka</span>
            </div>
            <div className=" gap-4">
              <span>Date of Services :</span>
              <span className="font-normal">03-24-2025</span>
            </div>

            <div className=" gap-4">
              <span>Odometer Reading :</span>
              <span className="font-normal">20,343 miles</span>
            </div>
            <div className=" gap-4">
              <span>Notes :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                natus?
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={""}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AddReports
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      ></AddReports>
    </div>
  );
};

export default Reports;
