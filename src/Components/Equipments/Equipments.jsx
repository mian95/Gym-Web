import { delay } from 'framer-motion'
import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from 'framer-motion';
import { SlideLeft } from '../utilities/animation';

const EquipData = [{
    id: 1,
    title: "Yuga Equip",
    decsc: "hi it is me i am happy to see you i hope will be fine and enjoy the things",
    icon: <GrYoga />,
    delay: 0.3,
},
{
    id: 2,
    title: "Fitness",
    decsc: "hi it is me i am happy to see you i hope will be fine and enjoy the things",
    icon: <FaDumbbell />,
    delay: 0.3,
},
{
    id: 3,
    title: "Muscles",
    decsc: "hi it is me i am happy to see you i hope will be fine and enjoy the things",
    icon: <GiGymBag />,
    delay: 0.3,
}
];

const Equipments = () => {
    return (
        <div>
            <div className='container  p-6 mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 font-playfair'>
                    <div className='space-y-3 p-3 sm:p-4 md:p-6'>
                        <h1 className='text-2xl md:text-3xl font-bold'>
                            What we offer to you
                        </h1>
                        <p className='text-gray-500 '>
                            We have a lot of things to offer to you. We have a lot of things to offer to you
                        </p>
                    </div>
                    {
                        EquipData.map((item) => {
                            return (
                                <motion.div
                                variants={SlideLeft(item.delay)}
                                initial="hidden"
                                whileInView="visible"
                                 key={item.id} className='space-y-3 p-3 sm:p-4 md:p-6  bg-[#fbfbfb] hover:bg-white flex flex-col gap-1 justify-center items-center rounded-md
                                hover:shadow-[0_0_22px_0_rgba(0,0,0,0.25)]'>
                                    <div className='text-3xl'>   {item.icon}</div>
                                    <div className='uppercase font-semibold text-xl'>   {item.title}</div>
                                    <div>   {item.decsc}</div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipments
