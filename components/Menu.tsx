"use client"
import React from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'

const Menu = () => {
    const [menuBar, setMenuBar] = useState(false)
  return (
    <div className={`${menuBar ? 'fixed' : "hidden"} w-full h-screen items-center justify-center flex flex-col bg-[#141943]/70 z-50`}>
      <h4 className='text-white text-2xl'>Menu</h4>
      <div className=' flex flex-col text-white/60 gap-6 items-center mt-5'>
        {navLinks.map((navlink)=>(
            <Link href={navlink.path} key={navlink.name} className='hover:text-white text-white/60 font-light transition-all duration-200'>{navlink.name}</Link>       
        ))}
      </div>
    </div>
  )
}

export default Menu
