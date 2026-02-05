import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({showNav, closeNav}:Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div>
      <div onClick={closeNav} role="button" aria-label="Close navigation" className={`fixed inset-0 z-[9999] bg-black opacity-70 w-full h-screen tranform transition-all duration-500 ${navOpen}`}></div>
      <div className={`text-white fixed justify-center flex flex-col h-full w-[60%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[9999] ${navOpen} transform transition-all duration-500 delay-300`}> 

        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
            <p
              className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] "
            >
              {navlink.label}
            </p>
          </Link>
        ))}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer '/>
      </div>
    </div>
  )
}

export default MobileNav