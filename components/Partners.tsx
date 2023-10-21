import React from 'react'
import Image from 'next/image'  
import { PartnersLinks } from '@/constants'
import Link from 'next/link'

const Partners = () => {
  return (
    <div className='w-full justify-center items-center relative lg:px-[150px]  max-md:flex-col max-lg:mt-[300px] flex flex-row'>
        <div className='flex flex-wrap justify-center items-center gap-20'>
        {PartnersLinks.map((partner)=>(
            <Link key={partner.name} href={partner.link} >
                <Image src={partner.image} alt={partner.name} width={1000} height={1000} className='w-40'/>
            </Link>
        ))}
        </div>
        <Image src='mask.svg' alt='mask' width={1000} height={1000} className='w-full max-lg:-top-64 absolute'/>
        
      
    </div>
  )
}

export default Partners
