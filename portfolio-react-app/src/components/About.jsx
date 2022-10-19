import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className=' w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>Nice to have you here and please take a look around</p>
                  </div>
                  <div>
                    <p>I am passionate about building excellent software that improves
              the lives of those around me. Seeking to use proven technicall skills and manage projects via JIRA to meet business needs.</p>
                  </div>

                </div>
        </div>
    </div>
  )
}

export default About