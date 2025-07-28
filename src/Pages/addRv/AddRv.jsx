import React from 'react'
import car from '../../assets/Home/car.png'
import car1 from '../../assets/Home/car1.png'
import car2 from '../../assets/Home/car2.png'
const AddRv = () => {
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
            status: "Never miss a service again. Get reminders, log expenses, and store important documents — so you can focus on the adventure, not the admin.",
            image: car,
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
            status: "Never miss a service again. Get reminders, log expenses, and store important documents — so you can focus on the adventure, not the admin.",
            image: car1,
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
            status: "Never miss a service again. Get reminders, log expenses, and store important documents — so you can focus on the adventure, not the admin.",
            image: car2,
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
            status: "Never miss a service again. Get reminders, log expenses, and store important documents — so you can focus on the adventure, not the admin.",
            image: car1,
        },

    ];
    return (
        <div className="container m-auto">
            <div className='flex justify-between py-4'>
                <h1 className="text-3xl font-semibold text-[#F9B038]">RV Sold & RV Information</h1>
                <button className='bg-[#F9B038] rounded px-4 py-2'>Add</button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                {rvData.map((rv) => (
                    <div
                        key={rv.id}
                        className=" "
                    >
                        <img
                            src={rv.image}
                            alt={rv.name}
                            className="w-full h-48 object-cover rounded"
                        />
                        <div className=" ">
                            <div className="text-xl py-2 font-semibold text-[#F9B038] ">
                                <p >
                                     {rv.name}
                                </p>
                               
                            </div>
                            <p className=" text-[#F9B038]">{rv.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddRv