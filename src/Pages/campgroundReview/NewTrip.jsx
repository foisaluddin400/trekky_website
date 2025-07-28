
import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'MM/DD/YYYY';
const dateFormatt = 'MM/DD/YYYY';
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
const NewTrip = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='max-w-4xl m-auto'>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
                <Form.Item
                    label={<span style={{ color: "#F9B038" }}>Title</span>}
                    name="title"
                    rules={[{ required: true, message: "Please input Title!" }]}
                >
                    <Input className='w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2' placeholder="title" />
                </Form.Item>
                <Form.Item
                        label={<span style={{ color: "#F9B038" }}>Description</span>}
                        name="feedback"
                        rules={[{ required: true, message: "Please input description!" }]}
                    >
                        <Input.TextArea className='w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2' rows={4} placeholder="Type Here..." />
                    </Form.Item>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Form.Item
                         label={<span style={{ color: "#F9B038" }}>End Date (Optional)</span>}
                        name="pick"
                        rules={[{ required: true, message: "Please input date!" }]}
                    >
                        <DatePicker
                                    className='w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2'
                                    format={dateFormatt}
                                    defaultValue={dayjs('09/03/2019', dateFormatt)}
                                    minDate={dayjs('08/01/2019', dateFormatt)}
                                    maxDate={dayjs('10/31/2020', dateFormatt)}
                                />
                    </Form.Item>

                    <Form.Item
                         label={<span style={{ color: "#F9B038" }}>Start Date</span>}
                        name="start"
                        rules={[{ required: true, message: "Please input date!" }]}
                    >
                         <DatePicker
                                    className='w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2'
                                    format={dateFormat}
                                    defaultValue={dayjs('09/03/2019', dateFormat)}
                                    minDate={dayjs('08/01/2019', dateFormat)}
                                    maxDate={dayjs('10/31/2020', dateFormat)}
                                />
                    </Form.Item>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Form.Item
                         label={<span style={{ color: "#F9B038" }}>City/State</span>}
                        name="city"
                        rules={[{ required: true, message: "Please select your city!" }]}

                    >


                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">USA</Option>
                                <Option value="Service_Request">JAPAN</Option>
                                <Option value="Partnership_Inquiry">BANGLADESH</Option>
                            </Select>
                        </ConfigProvider>


                    </Form.Item>

                    <Form.Item
                         label={<span style={{ color: "#F9B038" }}>Visit Status</span>}
                        name="city"
                        rules={[{ required: true, message: "Please select visit Status!" }]}

                    >


                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">USA</Option>
                                <Option value="Service_Request">JAPAN</Option>
                                <Option value="Partnership_Inquiry">BANGLADESH</Option>
                            </Select>
                        </ConfigProvider>


                    </Form.Item>
                </div>
               
                    <Form.Item
                         label={<span style={{ color: "#F9B038" }}>Trip Type</span>}
                        name="trip"
                        rules={[{ required: true, message: "Please input your cost!" }]}
                    >
                        <Input className='w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2' placeholder="Trip Type" />
                    </Form.Item>

                

                     <Dragger {...props}>
                <p className="ant-upload-drag-icon ">
                  <InboxOutlined />
                </p>
                <p className=" text-[#F9B038]">
                  Click or drag file to this area to upload
                </p>
                <p className="text-[#F9B038]">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
                   
         

                <Form.Item className=" pt-7">
                    <button type="primary" htmlType="submit" className="w-full bg-[#F9B038] py-2">
                        Save
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default NewTrip