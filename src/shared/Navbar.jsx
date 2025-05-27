import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/hero.png";
import profile from "../assets/Home/ss.jpg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const dropdownItemsCompany = [
    {
      label: (
        <Link to="/company/about-us" rel="noopener noreferrer">
          About Us
        </Link>
      ),
      key: "about-us",
    },
    {
      label: (
        <Link to="/company/tech-pertners" rel="noopener noreferrer">
          Tech Partners
        </Link>
      ),
      key: "techPartners",
    },
  ];

  const dropdownItemsServices = [
    {
      label: (
        <Link to="/services/Structure-Cabling" rel="noopener noreferrer">
          Structure Cabling (Copper And Fiber)
        </Link>
      ),
      key: "structured",
    },
    {
      label: (
        <Link to="/services/Break-FixServices" rel="noopener noreferrer">
          Break/Fix Services
        </Link>
      ),
      key: "BreakFixServices",
    },
  ];

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
    // {
    //   key: "company",
    //   label: (
    //     <Dropdown menu={{ items: dropdownItemsCompany }} trigger={["click"]}>
    //       <Link onClick={(e) => e.preventDefault()}>
    //         <Space>
    //           Company
    //           <DownOutlined />
    //         </Space>
    //       </Link>
    //     </Dropdown>
    //   ),
    // },
    // {
    //   key: "services",
    //   label: (
    //     <Dropdown menu={{ items: dropdownItemsServices }} trigger={["click"]}>
    //       <Link onClick={(e) => e.preventDefault()}>
    //         <Space>
    //           Services
    //           <DownOutlined />
    //         </Space>
    //       </Link>
    //     </Dropdown>
    //   ),
    // },
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
      label: <Link to="/reports">Favorite Reports</Link>,
    },
    {
      key: "information",
      label: <Link to="/information">Chassis Information</Link>,
    },
  ];


  return (
    <div className="container m-auto ">
      {/* Desktop Navbar */}
      <nav className="flex justify-between items-center gap-28 py-4">
        <div>
          <img className="w-[80px]" src={Logo} alt="Logo" />
        </div>
        <ul className="hidden md:flex lg:space-x-16 space-x-6 ">
          {items.map((item) => (
            <li key={item.key} className="list-none mt-3">
              {item.label}
            </li>
          ))}
          <div className="flex gap-5 items-center">

            <div className="flex gap-4">
              <Link to={'/auth/login'}><button className="border border-[#F9B038] py-1 px-4 rounded">Login</button></Link>
              <Link to={'/auth/signUp'}><button className="bg-[#F9B038] py-1 px-4 rounded">Sign Up</button></Link>
            </div>


            <div>
              <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
                <Link onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={profile} alt="profile" />
                    <div>
                      <h1>Foisal</h1>
                      <p>foisal@gmail.com</p>
                    </div>
                  </Space>
                </Link>
              </Dropdown>
            </div>


          </div>
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <Drawer title="" placement="right" onClose={onClose} open={drawerOpen}>
        <ul className="flex flex-col space-y-4">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};
