import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { MyButton } from '.'

const NavBar = () => {
  return (
    <div className='w-full lg:px-[150px] fixed bg-white/0 backdrop:blur-md px-8 py-8 flex items-center justify-between '>
      <div className='w-fit h-fit'>
        <Image src="/logo.svg" alt='logo' width={100} height={60}/>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <div className='flex gap-6'>
            {navLinks.map((navlink)=>(
                <Link href={navlink.path}><p className='text-white font-medium'>{navlink.name}</p></Link>
            ))}
        </div>
        <MyButton title='Connect Wallet' type='button'/>
      </div>
    </div>
  )
}

export default NavBar
