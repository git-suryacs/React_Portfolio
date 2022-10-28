import React,{useState} from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaBars, FaTimes, FaGithub, FaLinkedin,FaTwitter} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav,setnav] = useState(false)
    const handleClick = () => setnav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img className='imagetag' src={Logo} alt="Logo" style={{width:'45px',borderRadius:'100px'}}/>
        </div>


        {/* Menu */}

        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={400}>
          Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={400}>
          About
        </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={400}>
          Skills
        </Link>
            </li>
            <li><Link to="work" smooth={true} duration={400}>
          Projects
        </Link></li>
            <li>
            <Link to="contact" smooth={true} duration={400}>
          Contact
        </Link>
            </li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> :<FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text=4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={400}>
          Home
        </Link>
            </li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="about" smooth={true} duration={400}>
          About
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={400}>
          Skills
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="work" smooth={true} duration={400}>
          Work
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={400}>
          Contact
        </Link></li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://www.linkedin.com/in/cssurya/">
                    LinkedIn <FaLinkedin size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://twitter.com/code_line_">
                    Twitter <FaTwitter size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://github.com/git-suryacs">
                    Github <FaGithub size={25}/>    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://drive.google.com/file/d/1pBQb9mSQbkT6tkJ0ElRp4EKDJCiDQyZQ/view?usp=sharing">
                    Resume < BsFillPersonLinesFill size={25}/>    
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar