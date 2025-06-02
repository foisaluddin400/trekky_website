import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react'
import { DeleteOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import AddReports from './AddReports';
import { Link } from 'react-router-dom';
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
const Reports = () => {
    const [form] = Form.useForm();
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='container m-auto'>

            <div className='lg:flex gap-4 lg:mt-11 mt-6 px-3'>
                <div className='lg:w-[300px] pb-7 lg:pb-0'>
                    <h1 className='text-3xl font-semibold '>Reports</h1>
                </div>
                <div className='max-w-6xl bg-[#F9B038] w-full shadow-xl p-7 px-20'>
                    {/* <div >
                        <Form form={form} onFinish={handleSubmit} layout="vertical">
                            <div className='' >
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: "Please input your name!" }]}
                                >
                                    <Input className='w-full bg-transparent border border-black py-2' placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: "Please input your name!" }]}
                                >
                                    <Input className='w-full bg-transparent border border-black py-2' placeholder="Name" />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="feedback"
                                    rules={[{ required: true, message: "Please input description!" }]}
                                >
                                    <Input.TextArea className='w-full bg-transparent border border-black py-2' rows={4} placeholder="Type Here..." />
                                </Form.Item>
                            </div>

                            <Form.Item className=" pt-7">
                                <button type="primary" htmlType="submit" className="w-full border border-black py-2">
                                    Save
                                </button>
                            </Form.Item>
                        </Form>
                    </div> */}
                    <div className='flex justify-end mb-5'>
                        <button onClick={() => setOpenAddModal(true)} className='border border-black p-2'>Add Reports</button>
                    </div>
                    <div className='space-y-3'>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <div className='flex gap-2'> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link><button><DeleteOutlined></DeleteOutlined></button></div>
                        </div>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <div className='flex gap-2'> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link><button><DeleteOutlined></DeleteOutlined></button></div>
                        </div>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <div className='flex gap-2'> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link><button><DeleteOutlined></DeleteOutlined></button></div>
                        </div>
                       <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <div className='flex gap-2'> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link><button><DeleteOutlined></DeleteOutlined></button></div>
                        </div>
                       <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <div className='flex gap-2'> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link><button><DeleteOutlined></DeleteOutlined></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <AddReports setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}></AddReports>
        </div>
    )
}

export default Reports