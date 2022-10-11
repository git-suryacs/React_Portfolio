import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
const Navbar = () => {
    const [nav,setnav] = useState(false)
    const handleClick = () => setnav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width:'50px'}}/>
        </div>


        {/* Menu */}

        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick}className='md:hidden z-10'>
            <FaBars/>
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items'}>
            <li className='py-6 text=4xl'>Home</li>
            <li className='py-6 text=4xl'>About</li>
            <li className='py-6 text=4xl'>Skills</li>
            <li className='py-6 text=4xl'>Work</li>
            <li className='py-6 text=4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar