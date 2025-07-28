import React from "react";
import img from "../../assets/Home/rv.png"; // Adjust the path if needed

const RvSold = () => {
    const rvData = [
        {
            id: 1,
            name: "Winnebago Minnie 2500FL",
            vin: "(17 characters max)",
            serial: "542151",
            fuelType: "Gasoline",
            size: "27ft / 400 HP",
            oilFilter: "OF-1234",
            fuelFilter: "FF-5678",
            status: "Sold RV",
            image: img,
        },
        {
            id: 2,
            name: "Winnebago Minnie 2500FL",
            vin: "(17 characters max)",
            serial: "542151",
            fuelType: "Gasoline",
            size: "27ft / 400 HP",
            oilFilter: "OF-1234",
            fuelFilter: "FF-5678",
            status: "Sold RV",
            image: img,
        },
        {
            id: 3,
            name: "Winnebago Minnie 2500FL",
            vin: "(17 characters max)",
            serial: "542151",
            fuelType: "Gasoline",
            size: "27ft / 400 HP",
            oilFilter: "OF-1234",
            fuelFilter: "FF-5678",
            status: "Sold RV",
            image: img,
        },
        {
            id: 4,
            name: "Winnebago Minnie 2500FL",
            vin: "(17 characters max)",
            serial: "542151",
            fuelType: "Gasoline",
            size: "27ft / 400 HP",
            oilFilter: "OF-1234",
            fuelFilter: "FF-5678",
            status: "Sold RV",
            image: img,
        },
    ];

    return (
        <div className="container m-auto">
            <div>
                <h1 className="text-3xl font-semibold py-5 text-[#F9B038]">RV Sold & RV Information</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rvData.map((rv) => (
                    <div
                        key={rv.id}
                        className="bg-[#F9B038] rounded-lg shadow-lg overflow-hidden flex flex-col"
                    >
                        <img
                            src={rv.image}
                            alt={rv.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6 flex flex-col flex-grow justify-between">
                            <div className="text-sm text-gray-900 space-y-1">
                                <p>
                                    <span className="font-semibold">RV Name :</span> {rv.name}
                                </p>
                                <p>
                                    <span className="font-semibold">VIN Number :</span> {rv.vin}
                                    <span className="ml-20 font-semibold">Serial / ID Number :</span> {rv.serial}
                                </p>
                                <p>
                                    <span className="font-semibold">RV Name :</span> {rv.name}
                                    <span className="ml-20 font-semibold">Fuel Type :</span> {rv.fuelType}
                                </p>
                                <p>
                                    <span className="font-semibold">Size / Horsepower (HP) :</span> {rv.size}
                                    <span className="ml-20 font-semibold">Oil Filter Number :</span> {rv.oilFilter}
                                </p>
                                <p>
                                    <span className="font-semibold">Fuel Filter Number :</span> {rv.fuelFilter}
                                </p>
                            </div>
                            <p className="mt-6 text-center font-semibold text-black">{rv.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RvSold;
