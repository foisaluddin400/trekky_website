import { Form, Input, Radio } from "antd";
import { useState } from "react";

const AddNewMaintanceSchedule = () => {
  const [form] = Form.useForm();
  const [rvType, setRvType] = useState("new"); // Default selected value

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container m-auto">
      <div className=" gap-4 lg:mt-8 mt-6 px-3 ">
        <div className=" pb-7 lg:pb-0">
          <h1 className="text-4xl m-auto font-semibold text-[#F9B038]">
            New Maintenance Schedule
          </h1>
        </div>
        <div className="max-w-4xl m-auto w-full mt-6">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Component</span>}
              name="companyName"
              rules={[{ required: true, message: "Please input Component!" }]}
            >
              <Input
                className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                placeholder="Component Name"
              />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ color: "#F9B038" }}>
                  Maintenance to be Performed
                </span>
              }
              name="maintentance"
              rules={[
                {
                  required: true,
                  message: "Please input Maintenance to be Performed!",
                },
              ]}
            >
              <Input
                className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                placeholder="Maintenance to be Performed"
              />
            </Form.Item>

            {/* Radio Group */}
            <Form.Item label={<span style={{ color: "#F9B038" }}>Type</span>}>
              <Radio.Group
                name="rvType"
                value={rvType}
                onChange={(e) => setRvType(e.target.value)}
                options={[
                  { value: "new", label: "New" },
                  { value: "old", label: "Old" },
                ]}
              />
            </Form.Item>

            {/* Conditionally render based on radio selection */}
            {rvType === "new" && (
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Initial</span>}
                name="Initial"
                rules={[{ required: true, message: "Please input Initial!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Initial"
                />
              </Form.Item>
            )}

            {rvType === "old" && (
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Regular</span>}
                name="Regular"
                rules={[{ required: true, message: "Please input Regular!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Regular"
                />
              </Form.Item>
            )}

            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Notes</span>}
              name="feedback"
              rules={[{ required: true, message: "Please input Notes!" }]}
            >
              <Input.TextArea
                className="w-full bg-[#F9B038] border border-transparent py-2"
                rows={4}
                placeholder="Type Notes..."
              />
            </Form.Item>

            <Form.Item className="pt-7">
              <button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#F9B038] py-2"
              >
                Save
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMaintanceSchedule;
