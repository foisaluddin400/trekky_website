import { Checkbox } from "antd";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcDeleteColumn } from "react-icons/fc";
import { RiDeleteBinLine } from "react-icons/ri";

const ChecklistDetails = () => {
  return (
    <div className="container m-auto py-8">
      <div className="text-[#F59B07]">
        <h1 className=" mb-11">
          {" "}
          <span className="font-semibold">
            Cleanly Separates concerns between widget and painter
          </span>
        </h1>
        <div className="max-w-4xl mx-auto  space-y-4">
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 0</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
           <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 1</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
           <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 2</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
           <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 3</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 4</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 5</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 6</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 7</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 8</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 9</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between border-b border-b-slate-500 pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 10</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
          <div className="flex justify-between  pb-4">
            <Checkbox className="text-[#F59B07]">Task Item 11</Checkbox>
            <RiDeleteBinLine className="text-xl" />
          </div>
            <button
                type="primary"
                htmlType="submit"
                className="w-full text-black bg-[#F9B038] py-2"
              >
                Complete
              </button>
        </div>
        
      </div>
    </div>
  );
};

export default ChecklistDetails;
