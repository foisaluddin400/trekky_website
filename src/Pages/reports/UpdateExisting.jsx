import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react'
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
const UpdateExisting = () => {
    const [form] = Form.useForm();
    const [cost, setCost] = useState('');
    const formatWithCommas = (value) => {
        const onlyNumbers = value.replace(/[^\d]/g, '');
        return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleCostChange = (e) => {
        const input = e.target.value;
        const formatted = formatWithCommas(input);
        setCost(formatted);
        form.setFieldsValue({ cost: formatted });
    };

    const handleSubmit = (values) => {
        console.log(values)
    };
    //sss
    return (
        <div className='container m-auto'>
            <div className='lg:flex gap-4 lg:mt-11 mt-6 px-3'>
                <div className='lg:w-[400px] pb-7 lg:pb-0'>
                    <h1 className='text-3xl font-semibold '>Update Existing Merprisum</h1>
                </div>
                <div className='max-w-4xl '>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label="Renewal Date"
                                name="renewall"
                                rules={[{ required: true, message: "Please input Renewal Date!" }]}
                            >
                                <DatePicker
                                    className='w-full bg-transparent border border-black py-2'
                                    format={dateFormat}
                                    defaultValue={dayjs('09/03/2019', dateFormatt)}
                                    minDate={dayjs('08/01/2019', dateFormatt)}
                                    maxDate={dayjs('10/31/2020', dateFormatt)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Expiration Date"
                                name="ExpirationDate"
                                rules={[{ required: true, message: "Please input Expiration Date!" }]}
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
                                label="Cost"
                                name="cost"
                                rules={[{ required: true, message: "Please input your cost!" }]}
                            >
                                <Input
                                    className='w-full bg-transparent border border-black py-2'
                                    placeholder="$"
                                    value={cost}
                                    onChange={handleCostChange}
                                />
                            </Form.Item>


                            <Form.Item
                                label="Update Membership Number"
                                name="MembershipNumber"
                                rules={[{ required: true, message: "Please input Update Membership Number!" }]}
                            >
                                <Input className='w-full bg-transparent border border-black py-2' placeholder="Type Update Membership Number" />
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
                                label="Notes"
                                name="feedback"
                                rules={[{ required: true, message: "Please input Notes!" }]}
                            >
                                <Input.TextArea className='w-full bg-[#F9B038] border border-transparent py-2' rows={4} placeholder="Type Notes..." />
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

export default UpdateExisting