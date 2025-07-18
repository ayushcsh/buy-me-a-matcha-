
'use client'
import React from 'react'



const username = ({ params }) => {
  return (
    <>

      <div className=' h-[60vh]  w-full mt-[30px] relative'>
        <img className=' object-cover w-full h-full  my-auto' src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/attack-on-titan-finale.jpg?q=70&fit=crop&w=1140&h=&dpr=1' />
        <div className='absolute bottom-0 left-[46%] translate-y-[50%]'>
          <img className='w-[130px] h-[130px] rounded-full' src="https://images6.alphacoders.com/132/1328670.jpeg" alt="" />
        </div>
      </div>

      <div className=' flex mt-[70px] flex-col justify-center items-center'>
        <div className='flex  '>
          <h1 className='font-bold text-[23px]'>{`@${params.username}`}</h1>
        </div>
        <div className='flex '>
          <p className='text-gray-800'>buy me a Matcha</p>
        </div>
        <div className='flex list-none gap-3 '>
          <li className='text-gray-800'>6000 members</li>
          <li className='text-gray-800'>82 post</li>
          <li className='text-gray-800'> $156000 release</li>
        </div>
      </div>

      <div className=' thisis flex justify-center items-center w-[80%] h-[30vh] mx-auto mt-[120px] gap-5 mb-[120px]'>
        <div className='flex  flex-col  w-1/2 bg-white rounded-[30px] h-[55vh]'>
          <h1 className='font-bold text-[25px] mt-[20px] flex justify-center items-center text-[#85A662]'>supporter</h1>
          <div className='flex flex-col list-none mt-[15px] ml-[40px] gap-1 overflow-y-scroll'>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full ' src="/icons8-avatar.gif" alt="" />
            <span>Rahul Sharma - Gold Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Ananya Verma – Silver Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Mohit Singh – Bronze Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Sneha Patel – Gold Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Aditya Rao – Silver Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Priya Das – Bronze Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Vikram Joshi – Platinum Supporter</span>- I support you bro ❤️</li>
          <li className='flex gap-1'>
            <img className='w-[30px] h-[30px] rounded-full' src="/icons8-avatar.gif" alt="" />
            <span>Ishita Mehra – Gold Supporter</span>- I support you bro ❤️</li>
          </div>
        </div>
        <div className='flex flex-col w-1/2  bg-white rounded-[30px]  h-[55vh] '>
          <div className='flex flex-col mt-[15px]  gap-1'> 
          <h1 className='font-bold text-[25px]  flex justify-center items-center text-[#85A662]'>Buy {params.username} a Matcha</h1>
          <div className = 'flex flex-col gap-2 mt-[15px] ml-[40px] gap-3  '>
          <input type="text" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-3 w-[33vw]' placeholder='enter your name' />
          <input type="text" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-3 w-[33vw]' placeholder='enter message' />
          <input type="text" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-3 w-[33vw]' placeholder='enter amount' />
          <div>
            <button className='bg-[#85A662] text-white p-2 rounded-[10px] w-[33vw]'>Pay</button>
          </div>
          <div className = 'flex gap-2 '>
            <button className='bg-[#85A662] text-white p-2 rounded-[10px]'>Pay $10</button>
            <button className='bg-[#85A662] text-white p-2 rounded-[10px]'>Pay $20</button>
            <button className='bg-[#85A662] text-white p-2 rounded-[10px]'>Pay $50</button>
            <button className='bg-[#85A662] text-white p-2 rounded-[10px]'>Pay $100</button>
          </div>
          </div>
          
          </div>
        </div>

      </div>

    </>

  )
}

export default username
