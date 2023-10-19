import Image from 'next/image'
import { NavBar } from '@/components'
import {Hero} from '@/components'
export default function Home() {
  return (
    <main className='w-full bg-[#141943] h-full flex flex-col items-center'>
      <NavBar/>
      <Hero/>
    </main>
  )
}
