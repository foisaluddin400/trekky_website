import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react'
import { DeleteOutlined, EditFilled, EyeOutlined, HeartFilled, InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { BsEye } from 'react-icons/bs';
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
const FavouriteReport = () => {
    const [form] = Form.useForm();
 
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='container m-auto'>

            <div className='lg:flex gap-4 lg:mt-11 mt-6 px-3'>
                <div className='lg:w-[300px] pb-7 lg:pb-0'>
                    <h1 className='text-3xl font-semibold text-[#F9B038]'>Favorite Reports</h1>
                </div>
                <div className='max-w-6xl bg-[#F9B038] w-full shadow-xl md:p-7 p-3 md:px-20'>
                  
                    <div className='space-y-3'>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 1</h1>
                            <p>Type: State Visit</p>
                            <div className=''><button><HeartFilled></HeartFilled></button> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link></div>
                        </div>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >2 : Report 2</h1>
                            <p>Type: State Visit</p>
                            <div className=''><button><HeartFilled></HeartFilled></button> <button><EyeOutlined></EyeOutlined></button></div>
                        </div>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 3</h1>
                            <p>Type: State Visit</p>
                            <div className=''><button><HeartFilled></HeartFilled></button> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link></div>
                        </div>
                        <div className='border-b pb-3 flex justify-between'>
                            <h1 >1 : Report 4</h1>
                            <p>Type: State Visit</p>
                            <div className=''><button><HeartFilled></HeartFilled></button> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link></div>
                        </div>
                        <div className=' pb-3 flex justify-between'>
                            <h1 >1 : Report 5</h1>
                            <p>Type: State Visit</p>
                            <div className=''><button><HeartFilled></HeartFilled></button> <Link to={'/myreports'}><button><EyeOutlined></EyeOutlined></button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FavouriteReport