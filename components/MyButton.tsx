import React from 'react'
import { MyButtonProps } from '@/types'
import { Container } from 'postcss'

const MyButton = ({title,type,btnType,containerStyles}:MyButtonProps) => {
  return (
    <button className={`p-3 px-5 rounded-full text-white ${type == "bordered" ? "bg-transparent border-white border":"bg-[#2F80ED]"} font-medium ${containerStyles}`} type={btnType}>
      {title}
    </button>
  )
}

export default MyButton
