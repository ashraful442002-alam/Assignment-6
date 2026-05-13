import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({cart = [],setActiveTab}) => {


    const handleScrollProducts =()=>{
        const section = document.getElementById("products");
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = (e) => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
        email === "admin@gmail.com" &&
        password === "admin123"
    ) {

        alert("Login Successful");

        setShowLogin(false);

    } else {

        alert("Wrong Email or Password");

    }

}
    return (
        <div className="navbar flex flex-col md:flex-row justify-between items-center bg-base-100 p-4 border-b-2 border-gray-300 gap-4">

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                DigiTools
            </h1>

            <div>
                <ul className='flex flex-col md:flex-row items-center gap-4 font-semibold text-[#101727]'>
                    <li><a className='hover:text-blue-500 duration-200' onClick={handleScrollProducts} >Products</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/about">Features</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/services">Pricing</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/contact">Testimonials</a></li>
                    <li><a className='hover:text-blue-500 duration-200' href="/login">FAQ</a></li>
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                <button className='text-xl hover:text-blue-500 duration-200'>
                    <FaCartArrowDown />{cart.length}
                </button>

                <div className='relative'>


    <button
        onClick={() => setShowLogin(!showLogin)}
        className='btn hover:bg-gray-200'
    >
        Login
    </button>

    {
        showLogin && (

            <div className='absolute right-0 mt-4 w-80 bg-white shadow-2xl rounded-2xl p-6 z-50'>

                <h2 className='text-2xl font-bold mb-4 text-center'>
                    Login
                </h2>

                <form
                    onSubmit={handleLogin}
                    className='space-y-4'
                >

                    <input
                        type="email"
                        name='email'
                        defualtValue="admin@gmail.com"
                        placeholder='Email'
                        className='input input-bordered w-full'
                        required
                        
                    />
                    <p className='text-gray-400 font-light'>Email : admin@gmail.com</p>
                    

                    <input
                        type="password"
                        defaultValue="admin123"
                        name='password'
                        placeholder='Password'
                        className='input input-bordered w-full'
                        required
                    />
                    <p className='text-gray-400 font-light'>Password : admin123</p>

                    <button
                        type='submit'
                        className='btn btn-primary w-full'
                    >
                        Login
                    </button>

                </form>

            </div>

        )
    }

</div>

                <button className='btn btn-primary hover:scale-105 duration-200'>
                    Getting Started
                </button>
            </div>

        </div>
    );
};

export default Navbar;