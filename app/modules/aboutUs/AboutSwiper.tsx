"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { RootState } from '@/app/types';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function AboutSwiper() {
    const {
        textSayingOne,
        textSayingOneCustomer,
        textSayingOneCustomerJop,
        textSayingTwo,
        textSayingTwoCustomer,
        textSayingTwoCustomerJop,
        textSayingThree,
        textSayingThreeCustomer,
        textSayingThreeCustomerJop,
        whatTheyReSaying
    } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <>
            <h3
                className={`text-xl ${lang == "en" && "tracking-[2px]"} mb-10 font-medium`}>
                {whatTheyReSaying}
            </h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className='!overflow-hidden'
            >
                <SwiperSlide>
                    <div
                        className='w-full md:w-2/3 flex flex-col gap-12'>
                        <p className='text-[#929292] font-light text-base leading-7'>
                            {textSayingOne}
                        </p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-base uppercase'>
                                {textSayingOneCustomer}
                            </p>
                            <p className='font-light text-xs uppercase'>
                                {textSayingOneCustomerJop}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full md:w-2/3 flex flex-col gap-12'>
                        <p className='text-[#929292] font-light text-base leading-7'>
                            {textSayingTwo}
                        </p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-base uppercase'>
                                {textSayingTwoCustomer}
                            </p>
                            <p className='font-light text-xs uppercase'>
                                {textSayingTwoCustomerJop}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full md:w-2/3 flex flex-col gap-12'>
                        <p className='text-[#929292] font-light text-base leading-7'>
                            {textSayingThree}
                        </p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-base uppercase'>
                                {textSayingThreeCustomer}
                            </p>
                            <p className='font-light text-xs uppercase'>
                                {textSayingThreeCustomerJop}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
