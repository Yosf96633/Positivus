import React from 'react'
import {hamburger, logo} from "../assest/image"
const Navbar = () => {
  return (
    <header className=' flex justify-between px-4 items-center'>
        <img className=' h-6' src={logo} alt="logo" />
        <nav className=' space-x-14 max-sm:hidden'>
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Use cases</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
        </nav>
        <button className='border-[1px]  max-sm:hidden border-black px-4 py-2 rounded-md'>Request a quote</button>
        <img className=' max-sm:block hidden size-6' src={hamburger} alt="menu" />
    </header>
  )
}

export default Navbar