import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-gray-800 to-gray-950  rounded-t-2xl m-0 p-0 w-full'>
            <div className="container">
                {/* top */}
                <div className='grid grid-cols-1  md:grid-cols-3 border-t-2 border-gray-300/10 text-white py-2 sm:py-8 sm:px-3'>
                    <div className='py-4 sm:py-8 md:py-10 lg:py-12'>
                        <div className='flex flex-row items-center text-lg md:text-2xl gap-1'>
                            <FaDumbbell className='text-white' />
                            <h1>Expo
                                <span className='text-secondary '>  
                                    Gym
                                </span>
                            </h1>
                        </div>
                        <p className='py-1.5 font-thin'>
                            A vital aspect of maintaining overall health and well-being. Taking care of oneself involves a combination of physical, mental, and emotional self-care practices that promote a sense of balance and harmony in life.
                        </p>
                        <div className='flex gap-2 sm:gap-3 sm:justify-center sm:items-center mt-3 sm:mt-5 '>
                            <a href="#">
                                <FaFacebook className='text-3xl hover:text-primary' />
                            </a>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary' />
                            </a>
                        </div>
                    </div>

                <hr className='h-1 opacity-25 sm:hidden' />

                    {/* footer--link */}
                    <div className='flex flex-col text-gray-300 py-2 sm:py-8  cursor-pointer'>
                        <h1 className='text-center text-md font-semibold text-white   hover:text-primary  md:text-xl lg:text-2xl'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col py-3  text-gray-300 sm:items-center  justify-evenly'>
                            <a href="#" className=' hover:text-white'>Home</a>
                            <a href="#" className=' hover:text-white'>About</a>
                            <a href="#" className=' hover:text-white'>Services</a>
                            <a href="#" className=' hover:text-white'>Contact</a>
                            <a href="#" className=' hover:text-white'>Login</a>
                        </ul>
                    </div>
                <hr className='h-1 opacity-25 sm:hidden' />

                    <div className='flex flex-col text-gray-300 py-2 sm:py-8 cursor-pointer'>
                        <h1 className='text-center text-md font-semibold text-white hover:text-primary  md:text-xl lg:text-2xl'>
                            Company
                        </h1>
                        <ul className='flex flex-col py-3  text-gray-300 sm:items-center justify-evenly'>
                            <a href="#" className=' hover:text-white'>Term & Conditions</a>
                            <a href="#" className=' hover:text-white'>Contact Us</a>
                            <a href="#" className=' hover:text-white'>Privacy Policy</a>
                        </ul>
                    </div>
                </div>
                {/* buttom */}

                <hr className='h-1 opacity-25' />

                <div className='flex justify-center items-center  py-5 sm:p-8 text-gray-300'>
                    <p>&copy;Copyright 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
