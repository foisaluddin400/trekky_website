import React from 'react'
import car from '../../assets/Home/car.png'
import car1 from '../../assets/Home/car1.png'
import car2 from '../../assets/Home/car2.png'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
const ViewTrips = () => {
    const rvData = [
        {
            id: 1,
            name: "Winnebago Minnie 2500FL",
            vin: "UK",
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
            vin: "Canada",
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
            vin: "USA",
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
            vin: "USA",
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
        <div>
            <div className='flex justify-between py-2'>
                <h1 className="text-xl font-semibold ">Recent Trip</h1>
                <Link to={'/viewAllTrip'}><button className='hover:border-b'>View All</button></Link>
            </div>
            <div className="  ">
                {rvData.map((rv) => (
                    <div
                        key={rv.id}
                        className=" flex justify-between bg-[#F9B038] border-b gap-4 p-2  "
                    >
                        <div className='flex'>
                            <img
                                src={rv.image}
                                alt={rv.name}
                                className="w-[100px] h-[100px] object-cover rounded"
                            />
                            <div className=" ">
                                <div className="text-xl py-2 font-semibold text-gray-900 ">
                                    <p>
                                        {rv.name}
                                    </p>

                                </div>

                                <p className=" text-gray-500">{rv.vin}</p>
                                <p className=" text-gray-500">{rv.serial}</p>
                            </div>
                        </div>
                        <Link to={'/campgroundReview?tab=updateState'}><button className='text-xl'><BiEdit></BiEdit></button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewTrips