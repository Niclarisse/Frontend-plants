import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = () => {
  const navigate=useNavigate();
  return (
    <button className='bg-gradient-to-r from-[#025222] to-black hover:from-black hover:to-[#025222] text-white rounded-2xl py-4  text-2 font-medium text-xl px-6' onClick={()=>navigate("/plants")}>Discover Now</button>
  )
}

export default CustomButton