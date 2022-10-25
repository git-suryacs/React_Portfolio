import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className=' w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-left text-1xl'>
                    <div className='py-2'><p className='text-center border-b-2 border-pink-200 inline'>Education</p></div>
                    <p className='text-left'>MSc - Computer Science - Queen Mary, University of London. (2021 - 2022)</p>
                    <p className='text-left py-6'>B.E - Computer Science and Engineering - Sri Krishna College of Technology, India. CGPA - 8.45/10.00 (2016-2020)</p>
                    <div className='py-2'><p className='text-center border-b-2 border-pink-200 inline'>UK Experience</p></div>
                    <p className='py-2 font-bold'>Web developer intern - OpportunityM (July 2022 - Oct 2022)</p>
                    <p>Worked on a range of technology stacks such as HTML, CSS, React, and Django. Implemented Stripe Client-side integration for customer payments. Hosted react application to AWS and routed to a custom domain address.</p>
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