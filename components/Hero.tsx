import React from 'react'
import { MyButton } from '.'

const Hero = () => {
  return (
    <div id='hero' className='w-full lg:px-[150px] py-56 px-10 max-md:flex-col flex flex-row'>
      <div className='md:w-1/2 w-full flex flex-col max-md:items-center gap-10'>
        <p className='text-white clash text-6xl'>
            Discover collect & sell <span>Extraordinary</span> NFTs 
        </p>
        <p>
        The leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.
        </p>
        <div className='flex gap-5'>
            <MyButton title='Explore'/>
            <MyButton type='bordered' title='Create'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
