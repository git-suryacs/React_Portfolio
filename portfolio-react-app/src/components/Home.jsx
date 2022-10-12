import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Surya Chandra Selvaraj</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a aspiring Full stack developer</h2>
        <p className='text-[#8892b0]'>I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focussed on building responsive web applications.
        </p>
        <div>
            <button>View Work <HiArrowNarrowRight/></button>
        </div>
        </div>
    </div>
  )
}

export default Home