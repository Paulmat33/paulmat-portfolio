"use client"
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, {  useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'


type Props = {
  openNav: () => void
};




const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])
  return (
    <div className={`fixed h-[15vh] z-10
     w-full ${navbg ? 'bg-[#240b39]' : 'fixed'} transition-all duration-200`}>
      <div className="flex items-center justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className='hidden lg:flex items-center space-x-8'>

            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p
                  className="nav_link"
                >
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>
          <div className='flex items-center space-x-4'>
            <button className='px-4 py-2 sm:px-6 md:px-8 md:py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>Hire Me</button>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Nav