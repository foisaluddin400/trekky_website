import React from 'react'
import hero from '../../assets/Home/hero.png'
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
const Hero = () => {
  const dropdownItemsProfile = [
    {
      label: (
        <div>
          Enter current mileage
        </div>
      ),
      key: "profilepage",
    },
    {
      label: (
        <div>
          Update mileage
        </div>
      ),
      key: "profdilepage",
    },

  ];
  return (
    <div className='lg:grid grid-cols-2 container m-auto gap-11 lg:mt-9'>
      <img className='w-full object-cover' src={hero} alt="" />
      <div className='flex items-center px-3'>
        <div>
          <h1 className='md:text-6xl text-3xl mt-5 lg:mt-0 font-bold text-[#484848]'>Welcome Eddie!</h1>
          <p className='max-w-2xl pt-4'>Welcome to My RV Vault. Get started by tracking your latest expenses, managing repairs, or reviewing your checklists. We've got everything you need to maintain your RV life in one place!"</p>
          <div className='flex justify-start pt-8'>
            <div className=''>
            <div className='flex gap-3 bg-black p-3 items-center text-white'>
              <h1>2025 Cornerstone <br />
                VIN#554454UJVD </h1>
              <button className='bg-[#F9B038] px-5 py-3'>Select Other RV</button>
            </div>
            <div className='bg-black flex gap-3 items-center text-white mt-3 p-3'>
              <button className='bg-[#F9B038] px-11 py-3'>53,5343</button>
              <h1>Current Mileage</h1>
              <span><Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
                <Link onClick={(e) => e.preventDefault()}>
                  <Space>
                    :
                  </Space>
                </Link>
              </Dropdown></span>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero