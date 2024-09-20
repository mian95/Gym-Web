import React from 'react'
import { ReviewData } from '../../MockData/Data'
import Slider from 'react-slick';
import { data } from 'autoprefixer';


const Reviews = () => {

    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className='py-10 mb-8'>
            <div className="container">
                {/* header sectoin */}
                <div className='text-left mb-8 max-w-[400px] space-y-2 mr-auto'>
                    <h1 className='text-3xl font-bold'>Ratings and Reviews of Customers</h1>
                </div>
                {/* reviews card */}
                <Slider {...settings}>
                    {ReviewData.map((data) => (
                        <div key={data.id} className="my-6">
                            <div className="flex bg-primary/10 flex-col gap-3 p-4 rounded-sm mx-3 shadow-md ">
                                {/* upper */}
                                <div className='flex flex-row  justify-start items-center gap-5'>
                                    <img src={data.img} alt="" className='rounded-full w-12 h-12' />
                                    <div>
                                        <h2 className='text-2xl font-playfair font-semibold'>{data.name}</h2>
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                                {/* bottom */}
                                <div>
                                    <p className='p-4 space-y-3 text-sm text-gray-700'>{data.text}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                            </div>

                        </div>
                    )
                    )}
                </Slider>
            </div>

        </div>
    )
}

export default Reviews