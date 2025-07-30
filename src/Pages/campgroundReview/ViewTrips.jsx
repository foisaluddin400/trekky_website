import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { DeleteOutlined, EyeOutlined, InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

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
const ViewTrips = () => {
  const [form] = Form.useForm();
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="container m-auto  py-8 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">View Trips</h1>{" "}
        <div></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" ">
              <div>
                <span>Trip Title :</span>
                <span className="font-normal">Travel Dhaka</span>
              </div>
            </div>
            <div className=" gap-4">
              <span>Start Date</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>End Date</span>
              <span className="font-normal">08-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>State :</span>
              <span className="font-normal">Alabama</span>
            </div>
            <div className=" gap-4">
              <span>Visit Status :</span>
              <span className="font-normal">Comped</span>
            </div>

            <div className=" gap-4">
              <span>Trip Type :</span>
              <span className="font-normal">Travel</span>
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
            <Link to={"/campgroundReview?tab=updateState"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
       <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" ">
              <div>
                <span>Trip Title :</span>
                <span className="font-normal">Travel Dhaka</span>
              </div>
            </div>
            <div className=" gap-4">
              <span>Start Date</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>End Date</span>
              <span className="font-normal">08-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>State :</span>
              <span className="font-normal">Alabama</span>
            </div>
            <div className=" gap-4">
              <span>Visit Status :</span>
              <span className="font-normal">Comped</span>
            </div>

            <div className=" gap-4">
              <span>Trip Type :</span>
              <span className="font-normal">Travel</span>
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
            <Link to={"/campgroundReview?tab=updateState"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
       <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" ">
              <div>
                <span>Trip Title :</span>
                <span className="font-normal">Travel Dhaka</span>
              </div>
            </div>
            <div className=" gap-4">
              <span>Start Date</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>End Date</span>
              <span className="font-normal">08-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>State :</span>
              <span className="font-normal">Alabama</span>
            </div>
            <div className=" gap-4">
              <span>Visit Status :</span>
              <span className="font-normal">Comped</span>
            </div>

            <div className=" gap-4">
              <span>Trip Type :</span>
              <span className="font-normal">Travel</span>
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
            <Link to={"/campgroundReview?tab=updateState"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" ">
              <div>
                <span>Trip Title :</span>
                <span className="font-normal">Travel Dhaka</span>
              </div>
            </div>
            <div className=" gap-4">
              <span>Start Date</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>End Date</span>
              <span className="font-normal">08-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>State :</span>
              <span className="font-normal">Alabama</span>
            </div>
            <div className=" gap-4">
              <span>Visit Status :</span>
              <span className="font-normal">Comped</span>
            </div>

            <div className=" gap-4">
              <span>Trip Type :</span>
              <span className="font-normal">Travel</span>
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
            <Link to={"/campgroundReview?tab=updateState"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTrips;
