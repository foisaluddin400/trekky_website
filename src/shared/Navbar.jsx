import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/hero.png";
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
    {
      label: (
        <Link to="/profilePage/ongoing-tickets" rel="noopener noreferrer">
          Ongoing Tickets
        </Link>
      ),
      key: "ongoing",
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
      key: "information",
      label: <Link to="/information">Chassis Information</Link>,
    },
    {
      key: "contactUs",
      label: <Link to="/contactUs">Contact Us</Link>,
    },
     {
      key: "reports",
      label: <Link to="/reports">Reports</Link>,
    },
    {
      key: "submitTicket",
      label: <Link to="/submit-a-ticket">Submit A Ticket</Link>,
    },
    {
      key: "profile",
      label: (
        <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              <FaRegUserCircle />
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className=" ">
      {/* Desktop Navbar */}
      <nav className="flex items-center lg:justify-center justify-between gap-28 px-6 py-3">
        <img className="w-[80px]" src={Logo} alt="Logo" />
        <ul className="hidden md:flex lg:space-x-16 space-x-6">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
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
