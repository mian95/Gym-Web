import React from 'react'
import { IoPlay } from "react-icons/io5";
import { SlideRight } from '../utilities/animation.js';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <section>
                <div className='container grid grid-cols-1 my-10 md:grid-cols-2 min-h-[500px] relative'>
                    {/* brand info */}
                    <div className='flex flex-col justify-center py-10 px-5 md:py-5 md:px-5'>
                        <div className='text-center md:text-left space-y-5'>
                            <motion.h1
                                variants={SlideRight(1)} // Fix the typo here
                                initial="hidden"
                                animate="visible"
                                className='text-black text-4xl font-bold lg:text-5xl leading-relaxed xl:leading-normal font-playfair'>
                                My Gym will give you the best{" "}
                                <br />
                                <span className='text-primary'>Health{" "}</span>
                            </motion.h1>
                            <motion.p
                                variants={SlideRight(1.2)} // Fix the typo here
                                initial="hidden"
                                animate="visible"
                                className='text-gray-600 xl:max-w-[500px] font-playfair text-lg'>
                                It is a long journey of us to built the fact that we are the best in this field.
                            </motion.p>
                            {/* button section */}
                            <motion.div
                                variants={SlideRight(1.4)} // Fix the typo here
                                initial="hidden"
                                animate="visible"
                                className='flex gap-5 justify-center items-center'>
                                <button className='flex gap-1 items-center justify-center primary-btn'>Order Now</button>
                                <button className='flex gap-1 items-center justify-center border p-2.5 rounded-md'><IoPlay />Watch Now</button>
                            </motion.div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{delay:1.5, transition:1} }}
                            src={"https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/dumbell.png?raw=true"} alt="hi" className='w-[300px] sm:w-[500px] xl:w-[650px] drop-shadow' />
                    </div>
                </div>
                {/* <img src={"https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/3.png?raw=true"} alt="" /> */}
                {/* <img src={"https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/2.png?raw=true"} alt="" /> */}
                {/* <img src={"https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/bg.png?raw=true"} alt="" /> */}
            </section>
        </>
    )
}

export default Hero
