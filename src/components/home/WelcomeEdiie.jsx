import React from 'react'
import logo1 from '../../assets/Home/logo1.png'
import logo2 from '../../assets/Home/logo2.png'
import logo3 from '../../assets/Home/logo3.png'
import logo4 from '../../assets/Home/logo4.png'
import main from '../../assets/Home/main.png'
import { Link } from 'react-router-dom'
import { Dropdown, Space } from 'antd'
const WelcomeEdiie = () => {
  
  return (
    <div className='container m-auto py-6 pt-11'>
      {/* <h1 className='text-6xl font-bold text-[#484848]'>Welcome Eddie!</h1>
      <p className='max-w-2xl pt-4'>Welcome to My RV Vault. Get started by tracking your latest expenses, managing repairs, or reviewing your checklists. We've got everything you need to maintain your RV life in one place!"</p> */}

      <div className='flex justify-center gap-4'>
       
      </div>
      {/* <div className='flex justify-center py-5'>
        <img src={main} alt="" />
      </div> */}

      <div className='pt-5'>
        {/* <h1 className='text-xl font-semibold'>Manage Your RV Effortlessly</h1>
        <p className=' pt-2'>Welcome to your all-in-one RV management hub! From tracking your maintenance schedules and repairs to reviewing campgrounds and adding your RV details, we've made it easy for you to stay organized. Whether you're updating your insurance information or preparing for your next trip, all the tools you need are right here. Start managing your RV experience like a pro!</p> */}

        <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 py-5 px-3 lg:px-0'>
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/addMembership'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Memberships</p></Link>
          </div>
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/insuranceInfo'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Insurance Info</p></Link>
          </div>
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/addMembership'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Recalls</p></Link>
          </div> */}
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/newMaintenance'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Maintenance</p></Link>
          </div>
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/upcomingMaintenance'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Upcoming Maintenance</p></Link>
          </div> */}
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/updateExistMaintenance'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Update Maintenance Order</p></Link>
          </div> */}
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/newRepair'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>New Repair</p></Link>
          </div> */}
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/UpdateRepairsOrder'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Update Repair Order</p></Link>
          </div> */}
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/checklist'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Checklists</p></Link>
          </div>
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/reports'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Reports</p></Link>
          </div>
          {/* <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/favouriteReports'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Favorite Reports</p></Link>
          </div> */}

          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/campgroundReview'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Campground Reviews</p></Link>
          </div>

          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/havcApplication'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>HVAC/Appliances/ Plumbing</p></Link>
          </div>

          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/addRv'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Add RV</p></Link>
          </div>
           <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/tire'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Tire</p></Link>
          </div>
          <div className='bg-[#F59B07] py-6 rounded-lg'>
            <Link to={'/rvSold'}><div className='flex justify-center'>
              <img src={logo1} alt="logo" />
            </div>
              <p className='text-lg font-semibold text-center pt-5'>Sold RV</p></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WelcomeEdiie