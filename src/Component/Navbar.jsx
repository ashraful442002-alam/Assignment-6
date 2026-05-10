import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar flex flex-col md:flex-row justify-between items-center bg-base-100 p-4 border-b-2 border-gray-300 gap-4">

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                DigiTools
            </h1>

            <div>
                <ul className='flex flex-col md:flex-row items-center gap-4 font-semibold text-[#101727]'>
                    <li><a className='hover:text-blue-500 duration-200' href="/">Products</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/about">Features</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/services">Pricing</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/contact">Testimonials</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/login">FAQ</a></li>
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                <button className='text-xl hover:text-blue-500 duration-200'>
                    <FaCartArrowDown />
                </button>

                <button className='btn hover:bg-gray-200'>
                    Login
                </button>

                <button className='btn btn-primary hover:scale-105 duration-200'>
                    Getting Started
                </button>
            </div>

        </div>
    );
};

export default Navbar;