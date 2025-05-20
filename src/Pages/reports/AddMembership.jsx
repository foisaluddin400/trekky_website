import React from "react";
import ss from '../../assets/Home/ss.jpg'
const AddMembership = () => {
    return (
        <div className="container m-auto flex py-11">
            <div className='w-[300px]'>
                <h1 className='text-3xl font-semibold '>Add Membership</h1>
            </div>
            <div className=" bg-[#F9B038] flex flex-col items-center justify-center w-full h-[70vh] gap-8 px-4">
                <div className="text-center text-gray-800 space-y-3 text-lg md:text-xl font-semibold">
                    <div className="flex justify-center">
                        <div>
                            <h1>Add Membership</h1>
                            <img className="w-[150px] h-[150px] rounded-full object-cover" src={ss} alt="" />
                        </div>
                    </div>

                    <h1>Jon Smith</h1>
                    <div className="flex justify-center gap-4">
                        <span>Last Updated :</span>
                        <span className="font-normal">21-24-2025</span>
                    </div>
                    <div className="flex justify-center gap-4">
                        <span>Report Type :</span>
                        <span className="font-normal">State Visit</span>
                    </div>
                </div>

                <div className="flex gap-6">
                    <button className=" border border-black px-12 py-3 rounded-md text-lg font-medium hover:bg-cyan-500 transition">
                        New Membership
                    </button>
                    <button className=" border border-black px-12 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition">
                        Update Existing
                    </button>
                </div>


            </div>
        </div>
    );
};

export default AddMembership;
