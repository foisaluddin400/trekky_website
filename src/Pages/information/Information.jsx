import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  message,
  Select,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect } from "react";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Link, useNavigate } from "react-router-dom";
import { useAddChassisMutation } from "../redux/api/routesApi";
import { useGetProfileQuery } from "../redux/api/userApi";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const Information = () => {
  const [addChassisInformation] = useAddChassisMutation();
  const { data: profileData } = useGetProfileQuery();
 
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
  const rvId = profileData?.user?.selectedRvId?._id;

  if (!rvId) {
    message.error("Please select your RV from the home page before submitting.");
    return; 
  }
    const data = {
      mfg: values.Manufacturer,
      modelNo: values.Model,
      name: values.Name,
      rvId: rvId,
      serialId: values.Serial,
      fuelType: values.FuelType,

      engineModel: values.engineModel || "",
      hp: Number(values.Horsepower) || 0,
      belt:
        values.belts?.map((item) => ({
          name: item.beltName,
          partNo: Number(item.partNumber),
        })) || [],
      oilFilter:
        values.Oil?.map((item) => ({
          name: item.beltName,
          partNo: Number(item.partNumber),
        })) || [],
      fuelFilter:
        values.Fuel?.map((item) => ({
          name: item.beltName,
          partNo: Number(item.partNumber),
        })) || [],
    };

    try {
      const res = await addChassisInformation(data).unwrap();
      message.success(res?.message);
      navigate("/insuranceCompanyInfoForm");
    } catch (err) {
      message.error(err?.data?.message);
    }
  };
  useEffect(() => {
    form.setFieldsValue({ cooking: [""], ingredients: [""], nutrition: [""] });
  }, [form]);
  return (
    <div className="container m-auto">
      <div className="lg:flex gap-4 lg:mt-11 mt-6 px-3">
        <div className="lg:w-[300px] pb-7 lg:pb-0">
          <h1 className="text-3xl font-semibold text-[#F9B038]">
            Chassis information
          </h1>
        </div>
        <div className="w-full max-w-4xl">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Manufacturer</span>}
                name="Manufacturer"
                rules={[{ required: true, message: "Please input Mfg!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Mfg"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Model</span>}
                name="Model"
                // rules={[{ required: true, message: "Please input Model!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Model"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Name</span>}
                name="Name"
                // rules={[{ required: true, message: "Please input Name!" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Serial ID</span>}
                name="Serial"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your Fuel Add Oil Filter!",
                //   },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Serial ID"
                />
              </Form.Item>
            </div>
            <Form.Item
              label={<span style={{ color: "#F9B038" }}>Fuel type</span>}
              name="FuelType"
              // rules={[{ required: true, message: "Please input Name!" }]}
            >
              <Input
                className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                placeholder="Fuel type"
              />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Engine Model</span>}
                name="engineModel"
                // rules={[
                //   { required: true, message: "Please input Engine Model" },
                // ]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Engine Model"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: "#F9B038" }}>Horsepower</span>}
                name="Horsepower"
                // rules={[{ required: true, message: "Please input Horsepower" }]}
              >
                <Input
                  className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                  placeholder="Horsepower"
                />
              </Form.Item>
            </div>
            <h1 className="text-center text-[#F9B038] underline mb-3">Belt</h1>

            <Form.List name="belts" initialValue={[{}]}>
              {(fields, { add, remove }) => (
                <>
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      {fields.map(({ key, name, ...restField }) => (
                        <div
                          key={key}
                          className="grid grid-cols-12 gap-4 mb-3 items-center"
                        >
                          {/* Belt Name with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>
                                Belt Name
                              </span>
                            }
                            {...restField}
                            name={[name, "beltName"]}
                            className="col-span-6"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Belt Name"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Part Number with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>
                                Part Number
                              </span>
                            }
                            {...restField}
                            name={[name, "partNumber"]}
                            className="col-span-5"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Part Number"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Remove Button */}
                          {fields.length > 1 && (
                            <MinusCircleOutlined
                              onClick={() => remove(name)}
                              className="text-red-500 col-span-1 cursor-pointer"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Add Belt Button */}
                    <Form.Item>
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#00000000",
                            color: "#fff",
                            border: "1px solid #F9B038",
                            color: "#F9B038",
                            width: "32px",
                            borderRadius: "50%",
                          }}
                          type="dashed"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                          className="border-[#F9B038] text-[#F9B038] mt-7 hover:border-[#d89c2f]"
                        ></Button>
                      </div>
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>

            <h1 className="text-center text-[#F9B038] underline mb-3">
              Oil Filter
            </h1>

            <Form.List name="Oil" initialValue={[{}]}>
              {(fields, { add, remove }) => (
                <>
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      {fields.map(({ key, name, ...restField }) => (
                        <div
                          key={key}
                          className="grid grid-cols-12 gap-4 mb-3 items-center"
                        >
                          {/* Belt Name with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>Name</span>
                            }
                            {...restField}
                            name={[name, "beltName"]}
                            className="col-span-6"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Name"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Part Number with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>
                                Part Number
                              </span>
                            }
                            {...restField}
                            name={[name, "partNumber"]}
                            className="col-span-5"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Part Number"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Remove Button */}
                          {fields.length > 1 && (
                            <MinusCircleOutlined
                              onClick={() => remove(name)}
                              className="text-red-500 col-span-1 cursor-pointer"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Add Belt Button */}
                    <Form.Item>
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#00000000",
                            color: "#fff",
                            border: "1px solid #F9B038",
                            color: "#F9B038",
                            width: "32px",
                            borderRadius: "50%",
                          }}
                          type="dashed"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                          className="border-[#F9B038] text-[#F9B038] mt-7 hover:border-[#d89c2f]"
                        ></Button>
                      </div>
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>

            <h1 className="text-center text-[#F9B038] underline mb-3">
              Fuel Filter
            </h1>

            <Form.List name="Fuel" initialValue={[{}]}>
              {(fields, { add, remove }) => (
                <>
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      {fields.map(({ key, name, ...restField }) => (
                        <div
                          key={key}
                          className="grid grid-cols-12 gap-4 mb-3 items-center"
                        >
                          {/* Belt Name with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>Name</span>
                            }
                            {...restField}
                            name={[name, "beltName"]}
                            className="col-span-6"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Name"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Part Number with Label */}
                          <Form.Item
                            label={
                              <span style={{ color: "#F9B038" }}>
                                Part Number
                              </span>
                            }
                            {...restField}
                            name={[name, "partNumber"]}
                            className="col-span-5"
                            // rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              placeholder="Enter Part Number"
                              className="w-full bg-transparent border border-[#F9B038] text-[#F9B038] py-2"
                            />
                          </Form.Item>

                          {/* Remove Button */}
                          {fields.length > 1 && (
                            <MinusCircleOutlined
                              onClick={() => remove(name)}
                              className="text-red-500 col-span-1 cursor-pointer"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Add Belt Button */}
                    <Form.Item>
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#00000000",
                            color: "#fff",
                            border: "1px solid #F9B038",
                            color: "#F9B038",
                            width: "32px",
                            borderRadius: "50%",
                          }}
                          type="dashed"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                          className="border-[#F9B038] text-[#F9B038] mt-7 hover:border-[#d89c2f]"
                        ></Button>
                      </div>
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>

            <Form.Item className=" pt-9">
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

export default Information;
