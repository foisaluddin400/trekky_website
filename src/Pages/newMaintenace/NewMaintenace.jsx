import React from "react";
import ss from "../../assets/Home/rv.png";
import { Link } from "react-router-dom";
import {
  useDeleteMaintanceMutation,
  useGetMaintanceQuery,
} from "../redux/api/routesApi";
import { imageUrl } from "../redux/api/baseApi";
import { message } from "antd";
const NewMaintenace = () => {
  const { data, isLoading, isError } = useGetMaintanceQuery();
  console.log(data)
  const [deleteInsurance] = useDeleteMaintanceMutation();
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
    <div className="container m-auto  py-8 px-3 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          New Maintence Schedule
        </h1>
        <Link to={"/AddNewMaintanceSchedule"}>
          {" "}
          <button className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium ">
            New Maintence Schedule
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.maintenanceSchedule?.map((item) => (
          <div
            key={item._id}
            className="bg-[#F59B07] py-4 w-full rounded gap-8 px-4"
          >
            <div className="text-gray-800 space-y-2 font-semibold">
            
              {item.images?.length > 0 && (
                <div className="flex justify-center">
                  <img
                    className="w-full rounded object-cover"
                    src={`${item.images[0]}`}
                    alt={item.name || "Insurance"}
                  />
                </div>
              )}
              {item.component && (
                <div className="gap-4">
                  <span>Component :</span>
                  <span className="font-normal"> {item.component}</span>
                </div>
              )}

              {item.maintenanceToBePerformed && (
                <div className="gap-4">
                  <span>Maintenance To Be Performed :</span>
                  <span className="font-normal"> {item.maintenanceToBePerformed}</span>
                </div>
              )}

     
              {item.initialMilage && (
                <div className="gap-4">
                  <span>Initial Milage :</span>
                  <span className="font-normal"> {item.initialMilage}</span>
                </div>
              )}

              {item.dateOfPurchase && (
                <div className="gap-4">
                  <span>Date Of Purchase :</span>
                  <span className="font-normal">
                    {new Date(item.dateOfPurchase).toLocaleDateString()}
                  </span>
                </div>
              )}

              {item.renewalDate && (
                <div className="gap-4">
                  <span>Renewal Date :</span>
                  <span className="font-normal">
                    {new Date(item.renewalDate).toLocaleDateString()}
                  </span>
                </div>
              )}

              {item.policyNumber && (
                <div className="gap-4">
                  <span>Policy Number :</span>
                  <span className="font-normal">{item.policyNumber}</span>
                </div>
              )}

              {item.cost && (
                <div className="gap-4">
                  <span>Cost :</span>
                  <span className="font-normal"> {item.cost}</span>
                </div>
              )}

              {item.notes && (
                <div className="gap-4">
                  <span>Notes :</span>
                  <span className="font-normal"> {item.notes}</span>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => handleDelete(item?._id)}
                className="border py-1 px-5 border-black rounded-md font-medium"
              >
                Delete
              </button>
              <Link to={`/UpdateMaintanceSchedule/${item._id}`}>
                <button className="border border-black py-1 px-5 rounded-md font-medium">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMaintenace;
