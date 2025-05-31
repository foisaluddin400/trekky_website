import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react'
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'MM/DD/YYYY';
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
const NewExpense = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        const rawMileage = values.qty.replace(/,/g, '');
        console.log({ ...values, qty: rawMileage });
    };

    const [qty, setMileage] = useState('');


    const formatWithCommas = (value) => {
        const onlyNumbers = value.replace(/[^\d]/g, '');
        return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleChange = (e) => {
        const input = e.target.value;
        const formatted = formatWithCommas(input);
        setMileage(formatted);
        form.setFieldsValue({ qty: formatted });
    };

    return (
        <div className='container m-auto'>

            <div className='flex gap-4'>
                <div className='w-[300px]'>
                    <h1 className='text-3xl font-semibold '>New Expense</h1>
                </div>
                <div className='max-w-4xl '>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Expense Type"
                                name="expense"
                                rules={[{ required: true, message: "Please input Expense Type!" }]}
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
                            <Form.Item
                                label="Date"
                                name="date"
                                rules={[{ required: true, message: "Please input your company name!" }]}
                            >
                                <DatePicker
                                    className='w-full bg-transparent border border-black py-2'
                                    format={dateFormat}
                                    defaultValue={dayjs('09/03/2019', dateFormat)}
                                    minDate={dayjs('08/01/2019', dateFormat)}
                                    maxDate={dayjs('10/31/2020', dateFormat)}
                                />
                            </Form.Item>

                            
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <Form.Item
                                label="Vendor"
                                name="vendor"
                                rules={[{ required: true, message: "Please input your vendor!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Eddlie" />
                            </Form.Item>

                            <Form.Item
                                label="City/State"
                                name="city"
                                rules={[{ required: true, message: "Please input city/state!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type city/stape" />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Cost"
                                name="cost"
                                rules={[{ required: true, message: "Please input your cost!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="$" />
                            </Form.Item>
                            <Form.Item
                                label="QTY"
                                name="qty"
                                rules={[{ required: true, message: 'Please input your mileage!' }]}
                            >
                                <Input
                                    className='w-full bg-transparent border border-black py-2'
                                    placeholder='QTY'
                                    value={qty}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                        </div>





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
                                label="Massage"
                                name="massage"
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

export default NewExpense