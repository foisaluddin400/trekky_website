import React from 'react'
import hero from '../../assets/Home/hero.png'
const Hero = () => {
  return (
    <div className='lg:grid grid-cols-2 container m-auto gap-11 lg:mt-9'>
      <img className='w-full object-cover' src={hero} alt="" />
      <div className='flex items-center px-2'>
       <div>
         <h1 className='md:text-6xl text-3xl mt-5 lg:mt-0 font-bold text-[#484848]'>Welcome Eddie!</h1>
        <p className='max-w-2xl pt-4'>Welcome to My RV Vault. Get started by tracking your latest expenses, managing repairs, or reviewing your checklists. We've got everything you need to maintain your RV life in one place!"</p>
       </div>
      </div>
    </div>
  )
}

export default Hero