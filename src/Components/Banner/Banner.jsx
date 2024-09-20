import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../utilities/animation';


const Banner = ({ image, title, description, link }) => {
  return (
    <div className='container mt-10'>
      <div className="bg-[#f9f9f9] grid rounded-md grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 g-10">
        {/* banner image section */}
        <div>
          <motion.img src={image} alt=""
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='w-[250px] md:max-w-[300px] lg:min-w-[450px]' />
        </div>
        {/* banner text */}
        <div className='flex flex-col justify-center text-center md:text-start  space-x-3'>
          <motion.h1
            variants={SlideUp(0.5)} // Fix the typo here
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair capitalize'>{title}</motion.h1>
          <motion.p
            variants={SlideUp(0.9)} // Fix the typo here
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >{description}</motion.p>
          <motion.div
            variants={SlideUp(1)} // Fix the typo here
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start">
            <button className="primary-btn my-3">
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner

