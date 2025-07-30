import React from "react";
import ss from "../../assets/Home/ss.jpg";
import { Link } from "react-router-dom";
const RvSold = () => {
  return (
    <div className="container m-auto py-8 px-3 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">Sell RV</h1>
        <Link to={"/addSoldRv"}>
          {" "}
          <button className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium ">
            New RV
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" gap-4">
              <span>Name :</span>
              <span className="font-normal">Co Ltd</span>
            </div>

            <div className=" gap-4">
              <span>Sold RV :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Current Mileage :</span>
              <span className="font-normal">3434</span>
            </div>

            <div className=" gap-4">
              <span>Amount :</span>
              <span className="font-normal">$3443</span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateTire"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
       <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" gap-4">
              <span>Name :</span>
              <span className="font-normal">Co Ltd</span>
            </div>

            <div className=" gap-4">
              <span>Sold RV :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Current Mileage :</span>
              <span className="font-normal">3434</span>
            </div>

            <div className=" gap-4">
              <span>Amount :</span>
              <span className="font-normal">$3443</span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateTire"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
       <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" gap-4">
              <span>Name :</span>
              <span className="font-normal">Co Ltd</span>
            </div>

            <div className=" gap-4">
              <span>Sold RV :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Current Mileage :</span>
              <span className="font-normal">3434</span>
            </div>

            <div className=" gap-4">
              <span>Amount :</span>
              <span className="font-normal">$3443</span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateTire"}>
              <button className=" border border-black py-1 px-5 rounded-md  font-medium ">
                Update
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#F59B07]  py-4 w-full rounded gap-8 px-4">
          <div className=" text-gray-800 space-y-2  font-semibold">
            <div className=" gap-4">
              <span>Name :</span>
              <span className="font-normal">Co Ltd</span>
            </div>

            <div className=" gap-4">
              <span>Sold RV :</span>
              <span className="font-normal">03-24-2025</span>
            </div>
            <div className=" gap-4">
              <span>Current Mileage :</span>
              <span className="font-normal">3434</span>
            </div>

            <div className=" gap-4">
              <span>Amount :</span>
              <span className="font-normal">$3443</span>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            {" "}
            <button className=" border py-1 px-5 border-black  rounded-md  font-medium ">
              Delete
            </button>
            <Link to={"/updateTire"}>
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

export default RvSold;
