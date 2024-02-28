"use client";

import { dataBrandsOne, dataBrandsTwo } from '@/app/data/whatWeDo';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BrandsWhatWeDo() {
    return (
        <div className='py-12'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className='!overflow-hidden mb-8'
            >
                {
                    dataBrandsOne.map((brand, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className='p-8 !flex justify-center items-center'
                            >
                                <Image
                                    src={brand}
                                    alt={`brand-${index + 1}`}
                                    width={200}
                                    height={200}
                                    className='opacity-50 hover:opacity-100 transition ease-in-out duration-300'
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className='!overflow-hidden'
            >
                {
                    dataBrandsTwo.map((brand, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className='p-8 !flex justify-center items-center'
                            >
                                <Image
                                    src={brand}
                                    alt={`brand-${index + 1}`}
                                    width={200}
                                    height={200}
                                    className='opacity-50 hover:opacity-100 transition ease-in-out duration-300'
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
