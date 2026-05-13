import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import myImage from '/assets/banner.png';

const Banner = () => {
    return (
        

        <div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-10'>

            <div className='space-y-5 text-center md:text-left'>

                <h5 className='text-sm md:text-base text-blue-500 font-semibold'>
                    New AI-Powered Tools Available
                </h5>

                <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                    Supercharge Your <br />
                    
                        Digital Workflow
                    
                </h1>

                <p className='text-gray-600 max-w-md mx-auto md:mx-0'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-4'>

                    <button className='btn btn-primary px-6 rounded-xl'>
                        Explore Products
                    </button>

                    <button className='btn btn-outline flex items-center gap-2 rounded-xl'>
                        <CiPlay1 className='text-xl' />
                        Watch Demo
                    </button>

                </div>

            </div>

            <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                    src={myImage} 
                    alt="Banner" 
                    className='w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl'
                />
            </div>


            

        </div>
        <div className='w-full h-25 py-4 px-6  flex justify-around md:flex-row gap-4  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
                <div>
                    <h1 className='font-extrabold text-4xl text-white text-center'>50+</h1>
                    <p className='font-medium text-[24px] text-white'>Active user</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-4xl text-white text-center'>200+</h1>
                    <p className='font-medium text-[24px] text-white'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-4xl text-white text-center'>4.9</h1>
                    <p className='font-medium text-[24px] text-white'>Rating</p>
                </div>
            </div>
        </div>

        
    );
};

export default Banner;