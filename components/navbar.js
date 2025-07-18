'use client'
import React from 'react'
import { Pacifico } from 'next/font/google';
import Image from 'next/image';
import MatchaIcon from '@/app/icon/matcha';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';
import { useStyleRegistry } from 'styled-jsx';




const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});


const navbar = () => {
  const { data: session } = useSession();
  const [isopen , setisopen] = useState(false);
  return (
    <nav>
      <div className="navbar flex h-[55px] w-[95vw] align-center justify-center ">
        <div className="lefftnav flex  p-4  pt-[30px]  flex-1 pl-[60px]">
          <ul className="font-circular flex gap-10 text-[20px] ">
            <li>FAQ</li>
            <li>Wall of love</li>
            <li>Resources</li>
          </ul>
        </div>
        <Link href={"/"}>
          <div className='flex item-center justify-center'>

            <div className="logo translate-flex  pt-[10px]"><MatchaIcon /></div>
            <div className={`${pacifico.className} text-2xl text-black pt-[30px]  `}>
              Buy me a matcha
            </div>

          </div>
        </Link>
        {session ? (
          <>
            <div className="rightnav flex p-4  gap-4 pt-[30px] flex-1 justify-end  ">
              <div className="relative inline-block text-left">
                <div className='bg-[#FAF7F2]'>
                  <button onClick= {()=> setisopen(!isopen)} onBlur={()=> setTimeout(()=>setisopen(!isopen),500)} type="button" className=" mb-[4px] text-[15px] inline-flex w-full justify-center gap-x-1.5 rounded-[50px] bg-[#FAF7F2] px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-[#F2ECE4]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Welcome {session.user.email}
                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                
                <div className={`absolute ${isopen ? "" : "hidden"} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
                    <Link href={`/dashboard`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Dashboard</Link>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">your page</Link>
                    
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form>
                  </div>
                </div>
              </div>

              <button onClick={signOut} className='font-circular text-[20px] p-2 pl-[10px]  bg-[#85A662] h-[50px] w-[90px] rounded-[50px] translate-y-[-10px]'>logout</button>
            </div>
          </>
        ) : (
          <div className="rightnav flex p-4  gap-10 pt-[30px] flex-1 justify-end ">
            {/* <input className = " h-[50px] w-[212px] bg-white rounded-full  translate-y-[-10px]" type="text"  /> */}
            <Link href={"/login"}>
              <button className='font-circular text-[20px]'>login</button>
            </Link>
            <Link href={"/signup"}>
              <button className='font-circular text-[20px] p-2 pl-[10px]  bg-[#85A662] h-[50px] w-[90px] rounded-[50px] translate-y-[-10px]'>signup</button>
            </Link>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default navbar
