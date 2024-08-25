"use client"

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { useLogoutUserMutation } from '@/lib/services/auth';

const MobileSidebar = () => {
  const [logoutUser] = useLogoutUserMutation()
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await logoutUser()
      if (response.data && response.data.status === "success") {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [nav, setNav] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleNavToggle = () => {
    if (nav) {
      setIsExiting(true);
      setTimeout(() => {
        setNav(false);
        setIsExiting(false);
      }, 400);
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [nav]);

  return (
    <>
      <div
        onClick={handleNavToggle}
        className="cursor-pointer pr-4 -mt-4 z-10 text-gray-500 md:hidden relative top-10 left-5"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {(nav || isExiting) && (
        <div className={`${isExiting ? 'nav-menu-exit' : 'nav-menu'
          } fixed top-0 left-0 bg-gradient-to-r from-[#344C64] to-[#344c64e8] w-full h-full`}
        >

          <nav className="text-white h-screen py-[70px] px-7 text-lg font-semibold flex flex-col gap-6 z-5 w-72" >

            <Link href="/" className='flex items-center gap-2 hover:text-indigo-300 transition duration-300 ease-in-out' onClick={handleNavToggle}>
              <img src="/home.svg" className='w-8 h-8' />
              Home
            </Link>

            <Link href="/user/profile"
              className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
              onClick={handleNavToggle}
            >
              <img src="/profile.svg" className='w-8 h-8' />
              Profile
            </Link>

            <Link href="/user/event"
              className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
              onClick={handleNavToggle}
            >
              <img src="/event.svg" className='w-8 h-8' />
              Events
            </Link>

            <Link href="/user/resource"
              className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
              onClick={handleNavToggle}
            >
              <img src="/resource.svg" className='w-8 h-8' />
              Resources
            </Link>

            <Link href="/user/change-password"
              className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
              onClick={handleNavToggle}
            >
              <img src="/changepwd.svg" className='w-8 h-8' />
              Change Password
            </Link>

            <button onClick={handleLogout} className="hover:text-indigo-400 transition duration-300 ease-in-out bg-gray-600 rounded-full py-3">
              Logout
            </button>

          </nav>

        </div>

      )}
    </>
  )
}

export default MobileSidebar
