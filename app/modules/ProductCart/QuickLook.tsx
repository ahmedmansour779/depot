"use client";

import { ProductsTypes } from '@/app/types';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart, IconX } from '@tabler/icons-react';
import AddToCart from '../AddToCart';

const ratingLength = [1, 2, 3, 4, 5]

export default function QuickLook({ product }: { product: ProductsTypes }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false} className='relative' size="auto" centered>
                <button onClick={close} className=' absolute top-4 right-4'><IconX /></button>
                <div className=' flex flex-row flex-wrap p-8'>
                    <div className='md:w-[50%] w-full h-[50vh] flex justify-center items-center overflow-hidden 2xl:p-[10rem] lg:p-[8rem] md:p-[4rem] sm:p-[4rem]'>
                        <img style={{ objectFit: "contain" }} className='w-full' src={product.image} />
                    </div>
                    <div className='md:w-[50%] w-full'>
                        <div className='text-black text-xl flex flex-col gap-2 '>
                            <h1 className=' font-bold' style={{ letterSpacing: "1px" }}>{product.title}</h1>
                            <p>${product.price}</p>
                        </div>
                        <div className="flex items-center space-x-1 mt-10">
                            {ratingLength.map((rate) => {
                                return (
                                    <svg key={rate} className={`w-4 h-4 ${rate <= product.rating.rate ? "text-yellow-300" : "text-gray-200"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                )
                            })}
                        </div>
                        <div className='text-hover pt-4'>{product.description}</div>
                        <AddToCart />
                        <button className='flex gap-2 mt-8 text-hover hover:text-hover'><IconHeart color='black' size={20} /> ADD TO WISHLIST</button>
                    </div>
                </div>
            </Modal>

            <button onClick={open} className="bg-black text-xs text-white py-1 px-3 h-full">QUICK LOOK</button>
        </>
    );
}