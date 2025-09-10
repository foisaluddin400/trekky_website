import React from "react";
import { Link } from "react-router-dom";
import { useDeleteChassisMutation, useGetChassisQuery } from "../redux/api/routesApi";
import { message } from "antd";

const ChassisInfo = () => {
  const { data,isLoading, isError } = useGetChassisQuery();



     
  const [deleteInsurance] = useDeleteChassisMutation();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await deleteInsurance(id).unwrap();
      message.success(res?.message);
    } catch (err) {
      message.error(err?.data?.message);
    }
  };

  return (
    <div className="container m-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          Chassis Information
        </h1>
      </div>

      {data?.chassis?.map((item) => (
        <div
          key={item._id}
          className="bg-[#F59B07] py-4 w-full rounded gap-8 px-4 mb-6"
        >
          <div className="text-gray-800 space-y-2 font-semibold">
            <div className="gap-4">
              <span>Name :</span>
              <span className="font-normal">{item?.name}</span>
            </div>

            <div className="gap-4">
              <span>Manufactured :</span>
              <span className="font-normal">{item?.mfg}</span>
            </div>

            <div className="gap-4">
              <span>Model: </span>
              <span className="font-normal">{item?.modelNo}</span>
            </div>

            <div className="gap-4">
              <span>Serial ID :</span>
              <span className="font-normal">{item?.serialId}</span>
            </div>

            <div className="gap-4">
              <span>Fuel Type :</span>
              <span className="font-normal">{item?.fuelType}</span>
            </div>

            <div className="gap-4">
              <span>Engine Model :</span>
              <span className="font-normal">{item?.engineModel}</span>
            </div>

            <div className="gap-4">
              <span>Horsepower :</span>
              <span className="font-normal">{item?.hp}</span>
            </div>

            {/* Belt */}
            <div>
              <h1 className="text-center text-xl pt-7 pb-2 font-normal">
                Belt
              </h1>
              {item?.belt?.map((belt) => (
                <div key={belt._id} className="flex gap-4">
                  <p>{belt?.name}</p>:{" "}
                  <span className="font-normal">{belt?.partNo}</span>
                </div>
              ))}
            </div>

            {/* Oil Filter */}
            <div>
              <h1 className="text-center text-xl pt-7 pb-2 font-normal">
                Oil Filter
              </h1>
              {item?.oilFilter?.map((oil) => (
                <div key={oil._id} className="flex gap-4">
                  <p>{oil?.name}</p>:{" "}
                  <span className="font-normal">{oil?.partNo}</span>
                </div>
              ))}
            </div>

            {/* Fuel Filter */}
            <div>
              <h1 className="text-center text-xl pt-7 pb-2 font-normal">
                Fuel Filter
              </h1>
              {item?.fuelFilter?.map((fuel) => (
                <div key={fuel._id} className="flex gap-4">
                  <p>{fuel?.name}</p>:{" "}
                  <span className="font-normal">{fuel?.partNo}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <button onClick={() => handleDelete(item?._id)} className="border py-1 px-5 border-black rounded-md font-medium">
              Delete
            </button>
            <Link to={`/chassisInfo/update-chassis/${item?._id}`}>
              <button className="border border-black py-1 px-5 rounded-md font-medium">
                Update
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChassisInfo;
