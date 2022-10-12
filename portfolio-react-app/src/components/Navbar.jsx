import React,{useState} from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaBars, FaTimes, FaGithub, FaLinkedin,FaTwitter} from 'react-icons/fa'
import Logo from '../assets/logo.png'
const Navbar = () => {
    const [nav,setnav] = useState(false)
    const handleClick = () => setnav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width:'45px',borderRadius:'100px'}}/>
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
            {!nav ? <FaBars/> :<FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text=4xl'>Home</li>
            <li className='py-6 text=4xl'>About</li>
            <li className='py-6 text=4xl'>Skills</li>
            <li className='py-6 text=4xl'>Work</li>
            <li className='py-6 text=4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="/">
                    LinkedIn <FaLinkedin size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="/">
                    Twitter <FaTwitter size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="/">
                    Github <FaGithub size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="/">
                    Resume < BsFillPersonLinesFill size={25}/>    
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar