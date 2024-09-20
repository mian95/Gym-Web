import React, { useState } from 'react'
import { ProductData } from '../../MockData/Data'
import { motion } from 'framer-motion';

const Tab = () => {
    const [activeTab, setactiveTab] = useState("All");

    const tabs = ["All", "Muscles", "Fitness", "Yoga"];

    const filteredCard = activeTab === "All" ? ProductData : ProductData.filter((card) => {
     return   card.catagory === activeTab
    });
    return (
        <>
            {/* Tabs button section */}
            <div className="container my-8 sm:my-10">
                <div className="gap-5 flex">
                    {
                        tabs.map(tab => (
                            <button key={tab}
                                onClick={() => setactiveTab(tab)}
                                className={`px-3 py-2  rounded-sm ${activeTab === tab ?
                                    "bg-primary text-white" : "bg-gray-200 text-gray-800"
                                    }`}>
                                {tab}
                            </button>
                        ))
                    }
                </div>



                {/* Tabs cards section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-8">
                    {
                        filteredCard.map((card) => (
                            <motion.div
                                id={card.id}
                                key={card.id}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex rounded-md border shadow-sm space-y-2 flex-col p-3">
                                <img src={card.image} alt={card.image} className='rounded w-full object-cover'/>
                                <h3 className='text-lg font-semibold'>{card.title}</h3>
                                <p className='text-gray-600'>{card.catagory}</p>
                            </motion.div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Tab
