import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { navbarManu } from '../../MockData/Data';

const Response = ({ open }) => {
    return <AnimatePresence mode='wait'>
        {open && (
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.2 }}
                className='absolute top-15 left-0 w-full
                    z-10'>

                <div className=' text-xl font-semibold text-white bg-primary m-3 rounded-3xl uppercase p-5 flex items-center justify-center'>
                    <ul className=' flex items-center flex-col justify-center gap-6'>
                        {navbarManu.map(item => {
                            return (
                                <li key={item.id} className='text-white'>
                                    <a href={item.link}>{item.title}</a>
                                </li>)
                        })}
                    </ul>
                </div>
            </motion.div>
        )
        }
    </AnimatePresence>
}

export default Response;
