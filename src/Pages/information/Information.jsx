import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const Information = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };
    //dasdfkljasdfkjhasdfkjhasdfhksjdfklja
    return (
        <div className='container m-auto'>

            <div className='flex gap-4'>
                <div className='w-[300px]'>
                    <h1 className='text-3xl font-semibold '>New Expense</h1>
                </div>
                <div className='w-full max-w-4xl'>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Fuel Type"
                                name="type"
                                rules={[{ required: true, message: "Please input your Fuel Type!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Fuel Type" />
                            </Form.Item>

                            <Form.Item
                                label="Add Belt"
                                name="AddBelt"
                                rules={[{ required: true, message: "Please input your Add Belt!" }]}
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
                                        <Option value="General_Inquiry">Select</Option>
                                        <Option value="Service_Request">Part</Option>
                                        <Option value="Partnership_Inquiry">Qz</Option>
                                    </Select>
                                </ConfigProvider>
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Form.Item
                                label="Add another Belt"
                                name="type"
                                rules={[{ required: true, message: "Please input your Fuel Add another Belt!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Add another Belt" />
                            </Form.Item>
                           <Form.Item
                                label="Add Oil Filter"
                                name="type"
                                rules={[{ required: true, message: "Please input your Fuel Add Oil Filter!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Add Oil Filter" />
                            </Form.Item>
                        
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Add another oil Filter"
                                name="filter"
                                rules={[{ required: true, message: "Please input your Add another oil Filter" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Add another oil Filter" />
                            </Form.Item>

                            <Form.Item
                                label="Mileage"
                                name="mileage"
                                rules={[{ required: true, message: "Please input your mileage!" }]}
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
                                        <Option value="General_Inquiry">Select</Option>
                                        <Option value="Service_Request">Part</Option>
                                        <Option value="Partnership_Inquiry">Qz</Option>
                                    </Select>
                                </ConfigProvider>
                            </Form.Item>
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Form.Item
                                label="Mtg"
                                name="type"
                                rules={[{ required: true, message: "Please input your Mtg!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Add Mtg" />
                            </Form.Item>
                           <Form.Item
                                label="Model"
                                name="type"
                                rules={[{ required: true, message: "Please input your MOdel" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Model" />
                            </Form.Item>
                        
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Form.Item
                                label="Name"
                                name="type"
                                rules={[{ required: true, message: "Please input your Fuel Name!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Name" />
                            </Form.Item>
                           <Form.Item
                                label="Serial ID"
                                name="type"
                                rules={[{ required: true, message: "Please input your Serial ID!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Serial ID" />
                            </Form.Item>
                        
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Form.Item
                                label="Engine Model"
                                name="type"
                                rules={[{ required: true, message: "Please input your Engine Model!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Engine Model" />
                            </Form.Item>
                           <Form.Item
                                label="Horsepower"
                                name="type"
                                rules={[{ required: true, message: "Please input your horsepower!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Horse Prower" />
                            </Form.Item>
                        
                        </div>


                        <Form.Item className=" pt-3">
                            <button type="primary" htmlType="submit" className="w-full bg-[#F9B038] py-2">
                                Save
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Information