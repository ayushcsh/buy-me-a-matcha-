import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const footer = () => {
  return (
    <footer>
      <div className='flex  w-[80vw] mx-auto mt-[100px] mb-[50px]'>
        <div>
          <p>© Buy Me a Matcha</p>
        </div>

        <div className='flex ml-[15vw]'>
          <ul className='flex gap-4 font-circular '>
            <li className='hover:text-[#85A662]'>About Us</li>
            <li className='hover:text-[#85A662]'>Contact Us</li>
            <li className='hover:text-[#85A662]'>Privacy Policy</li>
            <li className='hover:text-[#85A662]'>Terms & Conditions</li>
            <li className='hover:text-[#85A662]'>Cancellation/Refund Policies</li>
          </ul>

          <div className='flex  ml-[40px] gap-3 translate-y-[-5px]'>
            <IoLogoLinkedin size={30}/>
            <FaInstagram size={30}/>
            <FaGithub size={30}/>

          </div>
        </div>

      </div>

      <div>

      </div>
    </footer>
  )
}

export default footer
