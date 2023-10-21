import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { MyButton } from '.'

const NavBar = () => {
  return (
    <div className='w-full lg:px-[150px] fixed bg-[#141943]/80 backdrop-blur-md z-40 px-8 py-5 flex items-center justify-between '>
      <div className='w-fit h-fit'>
        <Image src="/logo.svg" alt='logo' width={100} height={60}/>
      </div>

      <div className='flex items-center max-md:hidden justify-center gap-5'>
        <div className='flex gap-6'>
            {navLinks.map((navlink)=>(
                <Link href={navlink.path}><p className='text-white max-lg:text-sm font-medium'>{navlink.name}</p></Link>
            ))}
        </div>
        <MyButton title='Connect Wallet' type='button'/>
      </div>
      <button className='max-md:flex hidden items-center rounded-md justify-center w-10 h-10 bg-white/10'>
          <Image src='/menu.svg' alt='menu' width={20} height={20}/>
      </button>
      {/* <div className='absolute w-full h-screen '>

      </div> */}
    </div>
  )
}

export default NavBar
