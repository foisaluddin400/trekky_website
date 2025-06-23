
import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'


const UpdateState = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div className='max-w-4xl m-auto'>
            <Form form={form} onFinish={handleSubmit} layout="vertical">

                <Form.Item
                    label="Select State"
                    name="state"
                    rules={[{ required: true, message: "Please select your state!" }]}

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
                            <Option value="General_Inquiry">USA</Option>
                            <Option value="Service_Request">JAPAN</Option>
                            <Option value="Partnership_Inquiry">BANGLADESH</Option>
                        </Select>
                    </ConfigProvider>


                </Form.Item>

                <Form.Item
                    label="Select Type"
                    name="type"
                    rules={[{ required: true, message: "Please select type!" }]}

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
                            <Option value="General_Inquiry">Camped</Option>
                            <Option value="Service_Request">Traveled Though</Option>
                            <Option value="Partnership_Inquiry">Planning to Visit</Option>
                        </Select>
                    </ConfigProvider>


                </Form.Item>




                <Form.Item
                    label="Camped in traveled through planned"
                    name="feedback"
                    rules={[{ required: true, message: "Please input description!" }]}
                >
                    <Input.TextArea className='w-full bg-transparent border border-black py-2' rows={4} placeholder="Type Here..." />
                </Form.Item>


                <Form.Item className=" pt-7">
                    <button type="primary" htmlType="submit" className="w-full bg-[#F9B038] py-2">
                        Save
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateState