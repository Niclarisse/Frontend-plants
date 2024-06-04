import React from 'react'

const Button = ({name,color,bgColor,border, hover,width,onClick}) => {
  return (
    <button className={`text-${color} bg-${bgColor} w-full px-3 py-2 text-center cursor-pointer rounded-md w-${width} border border-${border}`} onClick={onClick}>
      {name}
        </button>
  )
}

export default Button