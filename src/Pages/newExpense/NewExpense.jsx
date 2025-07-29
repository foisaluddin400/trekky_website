import React from "react";
import ss from "../../assets/Home/ss.jpg";
import { Link } from "react-router-dom";
const NewExpense = () => {
  return (
    <div className="container m-auto  py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          New Expense
        </h1>
        <Link to={"/addNewExpense"}>
          {" "}
          <button className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium ">
            Add New Expense
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex justify-center">
              <div>
                <img className="w-full rounded object-cover" src={ss} alt="" />
              </div>
            </div>

            <div className=" gap-4">
              <span>Expense Type :</span>
              <span className="font-normal">Fuel</span>
            </div>
            <div className=" gap-4">
              <span>Date :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Vendor :</span>
              <span className="font-normal">Applied Decor Self-leveling</span>
            </div>

            <div className=" gap-4">
              <span>City/State :</span>
              <span className="font-normal">Dhaka, Bangladesh</span>
            </div>

            <div className=" gap-4">
              <span>QTY :</span>
              <span className="font-normal">43</span>
            </div>

            <div className=" gap-4">
              <span>Note :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, aut.
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateNewExpense"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
          <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex justify-center">
              <div>
                <img className="w-full rounded object-cover" src={ss} alt="" />
              </div>
            </div>

            <div className=" gap-4">
              <span>Expense Type :</span>
              <span className="font-normal">Fuel</span>
            </div>
            <div className=" gap-4">
              <span>Date :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Vendor :</span>
              <span className="font-normal">Applied Decor Self-leveling</span>
            </div>

            <div className=" gap-4">
              <span>City/State :</span>
              <span className="font-normal">Dhaka, Bangladesh</span>
            </div>

            <div className=" gap-4">
              <span>QTY :</span>
              <span className="font-normal">43</span>
            </div>

            <div className=" gap-4">
              <span>Note :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, aut.
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateNewExpense"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
          <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex justify-center">
              <div>
                <img className="w-full rounded object-cover" src={ss} alt="" />
              </div>
            </div>

            <div className=" gap-4">
              <span>Expense Type :</span>
              <span className="font-normal">Fuel</span>
            </div>
            <div className=" gap-4">
              <span>Date :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Vendor :</span>
              <span className="font-normal">Applied Decor Self-leveling</span>
            </div>

            <div className=" gap-4">
              <span>City/State :</span>
              <span className="font-normal">Dhaka, Bangladesh</span>
            </div>

            <div className=" gap-4">
              <span>QTY :</span>
              <span className="font-normal">43</span>
            </div>

            <div className=" gap-4">
              <span>Note :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, aut.
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateNewExpense"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
          <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className="flex justify-center">
              <div>
                <img className="w-full rounded object-cover" src={ss} alt="" />
              </div>
            </div>

            <div className=" gap-4">
              <span>Expense Type :</span>
              <span className="font-normal">Fuel</span>
            </div>
            <div className=" gap-4">
              <span>Date :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Vendor :</span>
              <span className="font-normal">Applied Decor Self-leveling</span>
            </div>

            <div className=" gap-4">
              <span>City/State :</span>
              <span className="font-normal">Dhaka, Bangladesh</span>
            </div>

            <div className=" gap-4">
              <span>QTY :</span>
              <span className="font-normal">43</span>
            </div>

            <div className=" gap-4">
              <span>Note :</span>
              <span className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, aut.
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateNewExpense"}>
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

export default NewExpense;
