import React from 'react';
import work4 from '../assets/work4.png';
import work2 from '../assets/work2.png';
import work1 from '../assets/work1.png';
import upcoming from '../assets/upcoming.jpg';
import garage from '../assets/download.png';
import AppImage from '../assets/app.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-300'>
            Projects
          </p>
          <p className='py-6'>Some of my academic and personal projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Causal Learing */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Causal learning and prediction using Bayesian networks and Machine learning for coronavirus pandemic
              </span>
              <div className='pt-8 text-center'>
                
                <a href='https://github.com/git-suryacs/Causal-network-and-machine-learning'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Deep Learning */}
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Identifying Criminal Suspects by Human Gestures Using Deep Learning
              </span>
              <div className='pt-8 text-center'>
                <a href='https://link.springer.com/chapter/10.1007/978-981-33-4501-0_67'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* IOT */}
          <div
            style={{ backgroundImage: `url(${garage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Built a IOT based smart garage system was developed with features like temperature monitor and security enhancement.
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*  App */}
          <div
            style={{ backgroundImage: `url(${AppImage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Built an attendance mobile application using android studio which was developed based on college requirement
              </span>
              <div className='pt-8 text-center'>
              <a href='https://github.com/git-suryacs/Attendance-mob-application'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work Item */}
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Telecom Chrun rate prediction using supervised learning machine learning methods
              </span>
              <div className='pt-8 text-center'>
              <a href='https://github.com/git-suryacs/Data-Analytics'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work Item */}
          <div
            style={{ backgroundImage: `url(${upcoming})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                Upcoming Projects
              </span>
              <div className='pt-8 text-center'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;