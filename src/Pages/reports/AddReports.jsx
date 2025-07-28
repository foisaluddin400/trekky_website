import { Form, Input, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
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
const AddReports = ({ openAddModal, setOpenAddModal }) => {
    const [form] = Form.useForm();
    const handleCancel = () => {
        form.resetFields();
        setOpenAddModal(false);
    };
    const handleSubmit = async (values) => {
        console.log(values)
        // const formData = new FormData();

        // formData.append("url", values?.url);


        // fileList.forEach((file) => {
        //   formData.append("image", file.originFileObj);
        // });
        // setLoading(true);

        // try {
        //   const res= await adds(formData).unwrap();
        //   setLoading(false);
        //   message.success(res?.message);
        //   setOpenAddModal(false);
        //   setLoading(false);
        //   form.resetFields();
        // } catch (error) {
        //   message.error(` ${error?.data?.message}`);
        //   setLoading(false);
        // }
    };
    return (
        <Modal
            centered
            open={openAddModal}
            onCancel={handleCancel}
            footer={null}
            width={500}

        >
            <div className="mb-6 mt-2 ">
                <h2 className="text-center font-semibold text-xl mb-4 text-[#F9B038]">Add Reports</h2>

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
        </Modal>
    )
}

export default AddReports