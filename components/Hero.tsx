import React from 'react'
import { MyButton } from '.'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='w-full items-start lg:px-[150px] py-56 px-10 max-md:flex-col flex flex-row'>
      <div className='md:w-1/2 w-full flex relative flex-col max-md:items-center gap-10'>
        <p className='text-white clash text-6xl'>
            Discover collect & sell <span>Extraordinary</span> NFTs 
        </p>
        <p className='text-white font-light text-lg'>
        The leading NFT Marketplace on Ethereum Home to the next generation of digital creators.Discover the best NFT collections.
        </p>
        <Image src="/glow.svg" width={1000} height={1000} alt='glow' className='absolute -top-40 '/>
        <div className='flex gap-5'>
            <MyButton title='Explore'/>
            <MyButton type='bordered' title='Create'/>
        </div>
      </div>
      <div className='md:w-1/2 w-full relative flex flex-col max-md:items-center '>
        <Image src='/heroimage.svg' alt='cover' width={1000} height={1000} className='w-full absolute -top-44'/>
      </div>
    </div>
  )
}

export default Hero
