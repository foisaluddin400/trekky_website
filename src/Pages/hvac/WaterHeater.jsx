import React from "react";
import ss from "../../assets/Home/ss.jpg";
import { Link } from "react-router-dom";

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

const WaterHeater = () => {
  return (
    <div className="container m-auto py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#F9B038] mb-6">
         Water Heater Information
        </h1>
        <Link to={"/Add"}>
          <button className="border border-[#F9B038] py-2 px-5 text-[#F9B038] rounded-md font-medium">
            Add
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="bg-[#F59B07] py-4 w-full rounded gap-8 px-4"
          >
            <div className="text-gray-800 space-y-2 font-semibold">
              <div className="flex justify-center">
                <img
                  className="w-full rounded object-cover"
                  src={item.image}
                  alt="air-condition"
                />
              </div>
              <div>
                <span>Name: </span>
                <span className="font-normal">{item.name}</span>
              </div>
              <div>
                <span>Model Number: </span>
                <span className="font-normal">{item.model}</span>
              </div>
              <div>
                <span>Date of Purchase: </span>
                <span className="font-normal">{item.purchaseDate}</span>
              </div>
              <div>
                <span>Location: </span>
                <span className="font-normal">{item.location}</span>
              </div>
              <div>
                <span>Cost: </span>
                <span className="font-normal">{item.cost}</span>
              </div>
              <div>
                <span>Note: </span>
                <span className="font-normal">{item.note}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-3">
              <button className="border py-1 px-5 border-black rounded-md font-medium">
                Delete
              </button>
              <Link to={`/update/${item.id}`}>
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

export default WaterHeater