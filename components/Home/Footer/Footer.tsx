import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <div>
        <Image src="/images/logo.png" alt="log" width={180} height={180} className='mx-auto' />
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-3 sm:space-x-10 text-white font-bold cursor-pointer'>
        {navLinks.map((nav) => (
          <Link key={nav.id} href={nav.url} className='nav_link text-sm sm:text-base md:text-lg'>
            {nav.label}
          </Link>
        ))}
      </div>
      <p className='text-white text-opacity-60 mt-6 text-center'>&copy; {new Date().getFullYear()} All rights reserved</p>
    </div>
  )
}

export default Footer