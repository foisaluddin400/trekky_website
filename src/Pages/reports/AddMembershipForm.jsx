import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
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
//asdfasdfasdfasdf
const AddMembershipForm = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='container m-auto'>

            <div className='flex gap-4'>
                <div className='w-[300px]'>
                    <h1 className='text-3xl font-semibold '>Add Membership</h1>
                </div>
                <div className='max-w-4xl '>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Name" />
                            </Form.Item>

                            <Form.Item
                                label="Date Puschased"
                                name="DatePuschased"
                                rules={[{ required: true, message: "Please input your Date Puschased!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Date Puschased" />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Website Link"
                                name="link"
                                rules={[{ required: true, message: "Please input your website!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type link" />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[{ required: true, message: "Please input your Phone Number!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type phone" />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Account Number"
                                name="account"
                                rules={[{ required: true, message: "Please input your account!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type account" />
                            </Form.Item>

                            <Form.Item
                                label="Amount Paid"
                                name="mileage"
                                rules={[{ required: true, message: "Please input your amount!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type amount" />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label="Membership Expairation"
                            name="repair"
                            rules={[{ required: true, message: "Please input your Repair!" }]}
                        >
                            <Input className='w-full bg-transparent border border-black py-2' placeholder="Type Repair" />
                        </Form.Item>



                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                    banned files.
                                </p>
                            </Dragger>
                            <Form.Item
                                label="Description"
                                name="feedback"
                                rules={[{ required: true, message: "Please input description!" }]}
                            >
                                <Input.TextArea className='w-full bg-[#F9B038] border border-transparent py-2' rows={4} placeholder="Type Here..." />
                            </Form.Item>
                        </div>

                        <Form.Item className=" pt-7">
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

export default AddMembershipForm