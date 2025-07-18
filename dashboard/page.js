'use client'
import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='flex flex-col justify-center items-cneter w-[40vw] h-[110vh] mx-auto bg-white rounded-[50px] mt-[50px]'>
      <h1 className='font-circular text-[24px]  text-center mt-[0px] '> Welcome to your dashboard</h1>
      <div className='flex flex-col justify-center items-cneter mx-auto mt-[10px] gap-3'>
      <div className='flex flex-col justify-center items-cneter gap-3'>
        <label htmlFor="name">Name</label>
        <input type="text" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]' placeholder='Enter your name'/>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3'>
        <label htmlFor="email">Email</label>
        <input type="email" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]' placeholder='Enter your email'/>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3'>
        <label htmlFor="username">Username</label>
        <input type="text" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]' placeholder='Enter your username'/>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3'>
        <label htmlFor="Profile picture">Profile picture</label>
        <input type="file" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]' placeholder='Enter your password'/>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3'>
        <label htmlFor="Cover picture">Cover picture</label>
        <input type="file" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]' placeholder='Enter your password'/>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3 h-17'>
        <label htmlFor="Razorpayid">Razorpay ID</label>
        <textarea name="" id="" cols="1" rows="10" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]'></textarea>
      </div>
      <div className='flex flex-col justify-center items-cneter gap-3 h-17'>
        <label htmlFor="RazorpaySecret">Razorpay Secret</label>
        <textarea name="" id="" cols="1" rows="1" className='border border-[#f0f0f0] bg-[#f0f0f0] rounded-[10px] p-1 w-[33vw]'></textarea>
      </div>
      <button className='bg-[#85A662] text-white p-2 rounded-[10px] w-[33vw] mt-[20px]'>Submit</button>
      </div>
          </div>
    </>
  )
}

export default Dashboard
