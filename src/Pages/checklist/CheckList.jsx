import React from "react";
import ss from "../../assets/Home/rv.png";
import { Link } from "react-router-dom";
const CheckList = () => {
  return (
    <div className="container m-auto  py-8 px-3 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          Checklist
        </h1>
        <Link to={"/addChecklist"}>
          {" "}
          <button className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium ">
            Add Checklist
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <Link to={'/checklistDetails'}><div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  ">
            <div className=" gap-4">
              <span className="font-semibold">
                Cleanly Separates concerns between widget and painter
              </span>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
          </div>
        </div></Link>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  ">
            <div className=" gap-4">
              <span className="font-semibold">
                Cleanly Separates concerns between widget and painter
              </span>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  ">
            <div className=" gap-4">
              <span className="font-semibold">
                Cleanly Separates concerns between widget and painter
              </span>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  ">
            <div className=" gap-4">
              <span className="font-semibold">
                Cleanly Separates concerns between widget and painter
              </span>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
            <div>
              <h1>Cleanly Separates</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
