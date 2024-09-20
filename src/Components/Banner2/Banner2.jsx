import React from 'react'
import { SlideRight } from '../utilities/animation'
import { motion } from 'framer-motion'


const Banner2 = () => {
    return (
        <div className='container  py-10'>
            <div className='bg-[#f9f9f9] py-6 sm:py-12 md:py18 flex flex-col gap-8 justify-center items-center'>
                <div className='flex flex-col justify-center g-3 items-center'>
                    <motion.h1
                    variants={SlideRight(0.9)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-3xl font-bold'>
                        Get 20% discount at your first order. So, are you ready to buy
                    </motion.h1>
                    <p className='py-4'> 
                        We make sure you will get best quality product for your workout
                    </p>
                </div>
                <div className='flex gap-3'>
                    <button className="primary-btn">
                        Get in touch
                    </button>
                    <button className="primary-btn bg-white border border-primary text-primary">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner2
