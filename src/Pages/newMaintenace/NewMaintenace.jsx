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
const NewMaintenace = () => {
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
    return (
        <div className='container m-auto'>

            <div className='lg:flex gap-4 lg:mt-11 mt-6 px-3 '>
                <div className='lg:w-[300px] pb-7 lg:pb-0'>
                    <h1 className='text-3xl font-semibold '>New Maintenance Schedule</h1>
                </div>
                <div className='max-w-4xl w-full'>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">


                        <Form.Item
                            label="Component"
                            name="component"
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
                                label="Service Interval"
                                name="dropdate"
                                rules={[{ required: true, message: "Please input date!" }]}
                            >
                                <DatePicker
                                    className='w-full bg-transparent border border-black py-2'
                                    format={dateFormatt}
                                    defaultValue={dayjs('09/03/2019', dateFormatt)}
                                    minDate={dayjs('08/01/2019', dateFormatt)}
                                    maxDate={dayjs('10/31/2020', dateFormatt)}
                                />
                            </Form.Item>

                            
                     
                        

                     


                     
                          
                            <Form.Item
                                label="Notes"
                                name="feedback"
                                rules={[{ required: true, message: "Please input Notes!" }]}
                            >
                                <Input.TextArea className='w-full bg-[#F9B038] border border-transparent py-2' rows={4} placeholder="Type Notes..." />
                            </Form.Item>
                

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

export default NewMaintenace