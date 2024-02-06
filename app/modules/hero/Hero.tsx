"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../style/style.css';

// import required modules
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { heroData } from '../../data/hero';


export default function Hero() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
        },
    };

    return (
        <div className="h-[80vh]">
            <Swiper
                pagination={pagination}
                className="mySwiper"
                direction="vertical"
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
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
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
            >
                {
                    heroData.map((item) => {
                        return (
                            <SwiperSlide className='overflow-hidden bg-[#f3f3f3]' key={item.id}>
                                <div className={`flex flex-row-reverse ${item.id !== 2 && "items-center"} justify-around gap-4 flex-wrap w-full h-full`}>
                                    {item.id === 1 &&
                                        <div className="md:w-[49%] w-[100%] md:h-auto h-[65%] flex items-center justify-center p-10 hero-image">
                                            <Image src={item.image} alt={item.title} className='w-[100%] h-[100%]' />
                                        </div>
                                    }
                                    {
                                        item.id === 2 &&
                                        <div className='w-[49%] flex flex-row flex-nowrap hero-image-reverse'>
                                            <Image src={item.image} alt={item.title} className='md:h-[50%] h-[100%]' style={{ width: "50%" }} />
                                            <Image src={item.image2} alt={item.title} className='md:h-[50%] h-[100%]' style={{ width: "50%", height: "50%" }} />
                                        </div>
                                    }
                                    {item.id === 3 &&
                                        <div className="w-[49%] flex justify-center items-end pb-8 hero-image">
                                            <Image src={item.image} alt={item.title} className='w-[80%] h-[auto]' />
                                        </div>
                                    }
                                    <div className="md:w-[49%] w-full flex flex-col items-start justify-end gap-8 md:pb-[11rem] pd-[3rem] px-10 hero-text">
                                        <h1 className='font-bold md:text-2xl text-lg' style={{ letterSpacing: "2px" }}>{item.title}</h1>
                                        <p className='md:text-sm text-xs text-hover ' >{item.body}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
