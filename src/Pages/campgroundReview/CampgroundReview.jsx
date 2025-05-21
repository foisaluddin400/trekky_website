
import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import NewTrip from './NewTrip';
import Progress from './Progress';
import UpdateState from './UpdateState';
import ViewTrips from './ViewTrips';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const CampgroundReview = () => {
    const [activeTab, setActiveTab] = useState("newTrip");

    const renderContent = () => {
        const [form] = Form.useForm();
        const handleSubmit = (values) => {
            console.log(values)
        };
        switch (activeTab) {
            case "progress":
                return <Progress></Progress>;
            case "newTrip":
                return <NewTrip></NewTrip>;
            case "updateState":
                return <UpdateState></UpdateState>;
            case "viewTrips":
                return <ViewTrips></ViewTrips>;
            default:
                return null;
        }
    };

    return (
        <div className=" container m-auto">


            <div className="flex gap-4 mb-4">
                <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "progress" ? "bg-[#F9B038] text-black" : "border border-black text-black"
                        }`}
                    onClick={() => setActiveTab("progress")}
                >
                    Progress
                </button>
                <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "newTrip" ? "bg-[#F9B038] text-black" : "border border-black text-black"
                        }`}
                    onClick={() => setActiveTab("newTrip")}
                >
                    New Trip
                </button>
                <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "updateState" ? "bg-[#F9B038] text-black" : "border border-black text-black"
                        }`}
                    onClick={() => setActiveTab("updateState")}
                >
                    Update State
                </button>
                <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "viewTrips" ? "bg-[#F9B038] text-black" : "border border-black text-black"
                        }`}
                    onClick={() => setActiveTab("viewTrips")}
                >
                    View Trips
                </button>
            </div>

            {/* Content for active tab */}
            {renderContent()}


        </div>
    );
};

export default CampgroundReview;
