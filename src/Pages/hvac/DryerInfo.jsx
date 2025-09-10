import React from "react";
import ss from "../../assets/Home/ss.jpg";
import { Link } from "react-router-dom";
import { message } from "antd";
import { useDeleteDriyerMutation, useGetDriyerQuery } from "../redux/api/routesApi";
import { imageUrl } from "../redux/api/baseApi";

// Dummy data array
const dummyData = [
  {
    id: "1",
    name: "1 Ton Non-Inverter",
    model: "Hsu-12dsdaf",
    purchaseDate: "03-24-2025",
    location: "Front",
    cost: "$543",
    note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut.",
    image: ss,
  },
  {
    id: "2",
    name: "1.5 Ton Inverter",
    model: "LG-AC345",
    purchaseDate: "04-11-2024",
    location: "Rear",
    cost: "$645",
    note: "LG brand inverter with energy-saving features.",
    image: ss,
  },
  {
    id: "3",
    name: "2 Ton AC",
    model: "Samsung123",
    purchaseDate: "01-12-2023",
    location: "Side",
    cost: "$799",
    note: "Samsung split AC with fast cooling mode.",
    image: ss,
  },
  {
    id: "4",
    name: "1.5 Ton Split",
    model: "BlueStarX5",
    purchaseDate: "06-18-2022",
    location: "Roof",
    cost: "$599",
    note: "Outdoor installed BlueStar split system.",
    image: ss,
  },
];

const DryerInfo = () => {
    const { data, isLoading, isError } = useGetDriyerQuery()
  const [deleteInsurance] = useDeleteDriyerMutation();
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
    <div className="container m-auto py-8 px-3 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
          Dryer Information
        </h1>
        <Link to={"/details/AddDryerInfo"}>
          <button className="border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md font-medium">
            Add
          </button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.dryers?.map((item) => (
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
              {item.notes && (
                <div className="gap-4">
                  <span>Notes :</span>
                  <span className="font-normal">{item.notes}</span>
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
              <Link to={`/details/Dryer/update-dryer/${item._id}`}>
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
}

export default DryerInfo