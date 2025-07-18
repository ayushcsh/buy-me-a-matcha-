import React from 'react'

const slides = ({label , tittle , tittle2, foot}) => {
  return (
    <div>
      <div className="slide  bg-white w-[65vw] h-[80vh] flex justify-center items-center  mx-auto rounded-[20px] mt-[40px]">
        <div className="items">
        <p className='font-circular text-[22px]  w-[5vw] mx-auto'>{label}</p>
        <h1 className='font-bold text-[64px] font-circular  w-[50vw] mx-auto text-center'>{tittle}</h1>
        <p className='font-circular text-[18px] text-[#85A662] w-[55vw] mx-auto text-center'>{foot}</p>
        </div>
      </div>
    </div>
  )
}

export default slides
