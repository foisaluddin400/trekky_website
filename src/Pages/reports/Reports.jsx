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
const Reports = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='container m-auto'>

            <div className='flex gap-4 my-11'>
                <div className='w-[300px]'>
                    <h1 className='text-3xl font-semibold '>New Expense</h1>
                </div>
                <div className='max-w-6xl bg-[#F9B038] shadow-xl p-7 px-20'>
                   <div >
                     <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <div className='' >
                            <label className='text-xl font-semibold' htmlFor="Upload">Upload</label>
                            <Dragger  {...props}>
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
                                <Input.TextArea className='w-full bg-transparent border border-black py-2' rows={4} placeholder="Type Here..." />
                            </Form.Item>
                        </div>

                        <Form.Item className=" pt-7">
                            <button type="primary" htmlType="submit" className="w-full border border-black py-2">
                                Save
                            </button>
                        </Form.Item>
                    </Form>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Reports