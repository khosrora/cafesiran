import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CategoriesList({ categories, categoriesBg, handleItemMenu }) {

    return (
        <Swiper
            spaceBetween={50}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 1
                },
                470: {
                    slidesPerView: 3,
                    spaceBetween: 1
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 1
                },
                1000: {
                    slidesPerView: 5,
                    spaceBetween: 1
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 1
                }
            }}
        >
            <SwiperSlide>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(0)}>
                    <div className={`${categoriesBg === 0 ? "bg-[#FF7129] text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
                        <img className="w-12 h-12" src='/images/perspective_matte.png' alt="همه" />
                        <span className="text-xs mt-2">همه</span>
                    </div>
                </div>
            </SwiperSlide>
            {
                categories.map(i =>
                    <SwiperSlide key={i.id}>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(i.id)}>
                            <div className={`${i.id === categoriesBg ? "bg-[#FF7129] text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
                                <img className="w-12 h-12" src={i.image} alt={i.title} />
                                <span className="text-xs mt-2">{i.title}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default CategoriesList