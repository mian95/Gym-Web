import React from 'react'
import { navbarManu } from '../../MockData/Data.js'
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa6";
import Response from './Response.jsx';


const NavBar = () => {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            <nav>
                <div className="container flex items-center justify-between p-4 ">
                    {/* Logo seection */}
                    <div className='text-xl flex items-center gap-2 p-2 uppercase'>
                        <FaDumbbell className='text-4xl' />
                        <p className='font-bold'>Expo</p>
                        <p className='font-semibold text-secondary'>Gym</p>
                    </div>
                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-5 p-5  text-gray-600 '>
                            {navbarManu.map(item => {
                                return (
                                    <li key={item.id} className='inline-block px-2 py-1
                                    hover:text-primary font-semibold text-lg duration-200'>
                                        <a href={item.link}>{item.title}</a>
                                    </li>)
                            })}
                        </ul>
                    </div>
                    {/* Icon section */}
                    <div className="flex gap-3 justify-between items-center">
                        <button className='text-2xl hover:bg-primary hover:text-white 
                        rounded-full  p-2 duration-200'>
                            <CiSearch />
                        </button>
                        <button className='text-2xl hover:bg-primary hover:text-white 
                        rounded-full p-2 duration-200'>
                            <FaOpencart />
                        </button>
                        <button className='text-2xl hover:bg-primary justify-center  items-center
                         hover:text-white text-primary rounded-md  font-semibold py-1.5 px-5 duration-200 border-[1px] border-primary hidden md:block'>
                            Login
                        </button>
                    </div>

                    {/* mobile menu section */}
                    <div className=' block md:hidden' onClick={() => setOpen(!open)
                    }>
                        <CiMenuFries className='text-2xl font-bold' />
                    </div>
                </div>
            </nav>

            {/* mobile sideBar section */}
            <Response open={open}/>
        </>
    )
}

export default NavBar
