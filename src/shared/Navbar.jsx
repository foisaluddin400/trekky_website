import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/hero.png";
import profile from "../assets/Home/ss.jpg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useGetProfileQuery } from "../Pages/redux/api/userApi";
import { imageUrl } from "../Pages/redux/api/baseApi";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const dropdownItemsProfile = [
    {
      label: (
        <Link to="/profilePage" rel="noopener noreferrer">
          Profile
        </Link>
      ),
      key: "profilepage",
    },

  ];

  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },

    {
      key: "newExpense",
      label: <Link to="/newExpense">New Expense</Link>,
    },
    {
      key: "newRepair",
      label: <Link to="/newRepair">New Repair</Link>,
    },
    {
      key: "reports",
      label: <Link to="/favouriteReports">Favorite Reports</Link>,
    },
    {
      key: "information",
      label: <Link to="/chassisInfo">Chassis Information</Link>,
    },
  ];

  const {data:profileData} = useGetProfileQuery();
  console.log(profileData)
  return (
    <div className="container m-auto ">
      {/* Desktop Navbar */}
      <nav className="lg:flex lg:justify-between items-center  py-4 px-3 lg:px-0">

        <ul className="hidden lg:flex lg:space-x-9 space-x-6 ">
          {items.map((item) => (
            <li key={item.key} className="list-none mt-3 text-[#F9B038]">
              {item.label}
            </li>
          ))}

        </ul>
        <div className="flex justify-between gap-5 items-center">
          <div className=" ">
            <div className="flex gap-5 items-center ">

              <div className="flex gap-4">
                <Link to={'/auth/login'} state={{ showModal: true }}><button className="border border-[#F9B038] text-[#F9B038] py-1 px-4 rounded">Login</button></Link>
                <Link to={'/auth/signUp'}><button className="bg-[#F9B038] py-1 px-4 rounded">Sign Up</button></Link>
              </div>


              <div className="hidden lg:flex text-[#F9B038]">
                <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
                  <Link onClick={(e) => e.preventDefault()}>
                    <Space>
                      <img className="w-[40px] h-[40px] rounded-full object-cover" src={`${profileData?.user?.profilePic}`} alt="profile" />
                      <div>
                        <h1>{profileData?.user?.name}</h1>
                        <p>{profileData?.user?.email}</p>
                      </div>
                    </Space>
                  </Link>
                </Dropdown>
              </div>


            </div>
          </div>
          <button
            className="lg:hidden text-2xl text-[#F9B038]"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer style={{ backgroundColor: '#27E2F5' }} title="" placement="right" onClose={onClose} open={drawerOpen}>
        <ul className="flex flex-col space-y-4">
          {items.map((item) => (
            <li key={item.key} className="list-none text-[#F9B038]">
              {item.label}
            </li>
          ))}
        </ul>
           <div className="bg-[#F9B038] mt-5 rounded px-2 py-2 ">
                <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
                  <Link onClick={(e) => e.preventDefault()}>
                    <Space>
                      <img className="w-[40px] h-[40px] rounded-full object-cover" src={profileData?.user?.profilePic} alt="profile" />
                      <div>
                        <h1>Foisal</h1>
                        <p>foisal@gmail.com</p>
                      </div>
                    </Space>
                  </Link>
                </Dropdown>
              </div>
      </Drawer>
    </div>
  );
};
