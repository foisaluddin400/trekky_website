import React from "react";
import ss from "../../assets/Home/cc.jpg";
import { Link } from "react-router-dom";
import { imageUrl } from "../redux/api/baseApi";
import { useDeleteTireMutation, useGetTireQuery } from "../redux/api/routesApi";
import { message } from "antd";
const Tire = () => {
  const { data, isLoading, isError } = useGetTireQuery();
  const [deleteInsurance] = useDeleteTireMutation();
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
    <div className="container m-auto  py-8  px-3 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          Tire Information
        </h1>
        <Link to={"/AddTire"}>
          {" "}
          <button className=" border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md  font-medium ">
            New Tire
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.tire?.map((item) => (
          <div
            key={item._id}
            className="bg-[#F59B07] py-4 w-full rounded gap-8 px-4"
          >
            <div className="text-gray-800 space-y-2 font-semibold">
              {/* Image show only if exists */}
              {item.images?.length > 0 && (
                <div className="flex justify-center">
                  <img
                    className="w-full rounded object-cover"
                    src={`${imageUrl}/${item.images[0]}`}
                    alt={item.name || "Insurance"}
                  />
                </div>
              )}

  {item.manufacturer && (
                <div className="gap-4">
                  <span>Manufacturer :</span>
                  <span className="font-normal">{item.manufacturer}</span>
                </div>
              )}

  {item.tireSize && (
                <div className="gap-4">
                  <span>Tire Size :</span>
                  <span className="font-normal">{item.tireSize}</span>
                </div>
              )}



              {item.name && (
                <div className="gap-4">
                  <span>Name :</span>
                  <span className="font-normal">{item.name}</span>
                </div>
              )}

              {/* Website Link */}
              {item.websiteLink && (
                <div className="gap-4">
                  <span>Website Link :</span>
                  <span className="font-normal">{item.websiteLink}</span>
                </div>
              )}

              {/* Phone Number */}
              {item.modelNumber && (
                <div className="gap-4">
                  <span>Model Number :</span>
                  <span className="font-normal">{item.modelNumber}</span>
                </div>
              )}

              {/* Effective Date */}
              {item.dateOfPurchase && (
                <div className="gap-4">
                  <span>Date Of Purchase :</span>
                  <span className="font-normal">
                    {new Date(item.dateOfPurchase).toLocaleDateString()}
                  </span>
                </div>
              )}

              {/* Renewal Date */}
              {item.renewalDate && (
                <div className="gap-4">
                  <span>Renewal Date :</span>
                  <span className="font-normal">
                    {new Date(item.renewalDate).toLocaleDateString()}
                  </span>
                </div>
              )}

                {item.location && (
                <div className="gap-4">
                  <span>Location :</span>
                  <span className="font-normal">{item.location}</span>
                </div>
              )}

              {/* Policy Number */}
              {item.policyNumber && (
                <div className="gap-4">
                  <span>Policy Number :</span>
                  <span className="font-normal">{item.policyNumber}</span>
                </div>
              )}

              {/* Cost */}
              {item.cost && (
                <div className="gap-4">
                  <span>Cost :</span>
                  <span className="font-normal">{item.cost}</span>
                </div>
              )}

              {/* Notes */}
              {item.note && (
                <div className="gap-4">
                  <span>Notes :</span>
                  <span className="font-normal">{item.note}</span>
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
              <Link to={`/updateTire/${item._id}`}>
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

export default Tire;
