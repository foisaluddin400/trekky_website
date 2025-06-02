import { Collapse } from 'antd';
import React from 'react'
import { FaArrowDown, FaArrowUp, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import { IoIosArrowForward } from 'react-icons/io';
const Faq = () => {
    const items = [
        {
            key: "1",
            label: "What is included in your Break/Fix services?",
            children: (
                <p>
                    We Provide On-Demand Troubleshooting And Repair Services For Hardware
                    Failures, Network Outages, And Software Issues. Our Services Include
                    Diagnostics, Replacement Of Faulty Components, Configuration
                    Adjustments, And Deploying New Solutions If Required. We Ensure
                    Minimal Downtime And Tailored Fixes Based On Your Business Needs.
                </p>
            ),
        },
        {
            key: "2",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },
        {
            key: "3",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },
        {
            key: "4",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },
        {
            key: "5",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },
         {
            key: "6",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },
         {
            key: "7",
            label: "Do you offer remote IT support?",
            children: (
                <p>
                    Yes, We Provide Comprehensive Remote IT Support. Our Team Can
                    Troubleshoot And Resolve Many Technical Issues Remotely, Including
                    Software Configuration, Network Performance Optimization, And Basic
                    Troubleshooting. If An On-Site Visit Is Required, Our Team Will
                    Schedule It Promptly.
                </p>
            ),
        },

    ];
    return (
        <div>

            <div className=" container m-auto md:px-20 py-5 bg-[#F9B038] ">
                <div className='max-w-4xl m-auto'>
                    <div className='pb-6 text-center'>
                    <h1 className="text-3xl font-semibold ">Frequently Asked</h1>
                    <h1 className="text-3xl font-semibold pt-1">Questions</h1>
                </div>

                <Collapse

                    ghost
                    items={items}
                    expandIconPosition="right"

                    expandIcon={({ isActive }) =>
                        isActive ? (
                            <FaMinusCircle style={{ fontSize: "16px", color: "black" }} />

                        ) : (
                            <FaPlusCircle style={{ fontSize: "16px", color: "black" }} />

                        )
                    }
                />
                </div>
            </div>
        </div>
    )
}

export default Faq