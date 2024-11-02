import React from 'react'
import Logo from '../assets/Logo-qr.png'
import { Link } from 'react-router-dom'
import { Github, FolderGit } from 'lucide-react'

function Navbar() {
  return (
    <>
      <div className="fixed top-0 z-10 w-screen h-20 flex justify-center items-center">
        <div className="absolute left-0 top-0 h-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer">
          <Link to={'/'} className='h-full w-full'>
          <img src={Logo} alt="Logo" className='h-[70px] w-[170px] py-2' />
          </Link>
        </div>

        <div className="h-full w-screen bg-[#FF5722] flex justify-end items-center">
          <div className='h-full w-1/2 sm:w-1/3 md:w-1/4 flex justify-around items-center gap-3 px-6 font-semibold text-[#EEEEEE]'>
            <a href="https://github.com/Shubham-1068" target='_blank' className='md:block hidden'>GitHub</a>
            <a href="https://github.com/Shubham-1068" target='_blank' className='md:hidden'><Github /></a>
            
            <a href="https://github.com/Shubham-1068/QSee-QR" target='_blank' className='md:block hidden'>About</a>
            <a href="https://github.com/Shubham-1068/QSee-QR" target='_blank' className='md:hidden'><FolderGit/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
