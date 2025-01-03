import React from 'react'

const Navbar = () => {
  return (
    <div className='min-h-[50px] w-full flex justify-between items-center p-5 px-10'>
       <h1 className='text-[#068466] font-semibold text-2xl'>Haven</h1>
       <div className=' flex gap-4 font-normal text-xl cursor-pointer'>
        <h2>How it Works</h2>
        <h2>Use Cases <i class="ri-arrow-down-s-line "></i></h2>
        <h2>Company <i class="ri-arrow-down-s-line "></i></h2>
       </div>
        <button className='px-3 py-1 text-lg bg-[#068466] rounded-lg text-white hover:bg-[#1C4044]'>Get-a-Demo</button>
    </div>
  )
}

export default Navbar
