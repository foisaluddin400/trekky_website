import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react'
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
const InsuranceCompanyInfo = () => {
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
    const companies = ["Allstate", "Progressive", "Reserve"];
    return (
        <div className='container m-auto'>

            <div className=' gap-4  px-3'>
                <div className='lg:w-[300px] pb-7 lg:pb-0'>
                    <h1 className='text-3xl font-semibold text-[#F9B038]'>Insurance Info</h1>
                </div>
                <div className="space-y-5 pt-5 max-w-[900px] m-auto">
                    {companies.map((company, index) => (
                        <div key={index}>
                            <label className="block mb-1 text-[#F9B038] font-medium">{company}</label>
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    defaultValue={company}
                                    className="border border-[#F9B038] text-[#F9B038] px-4 bg-transparent py-2 rounded-md w-full md:w-1/3"
                                />
                                <button className="border border-[#F9B038] text-[#F9B038] px-4 py-2 rounded-md w-full md:w-1/3">
                                    Update Policy
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full md:w-1/4">
                                    Delete Policy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InsuranceCompanyInfo