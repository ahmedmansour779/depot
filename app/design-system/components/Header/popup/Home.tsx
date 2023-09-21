"use client";

import { IconArrowNarrowRight } from '@tabler/icons-react';
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';


export default function Home() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const Details = () => {
        return (
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='flex flex-col gap-4 absolute w-fit bg-primary p-8 left-0 top-12'
            >
                <h1 className='flex gap-1 text-white'><IconArrowNarrowRight /> Home</h1>
                <div className='text-hover flex flex-col gap-1 w-40 flex-nowrap'>
                    <a href='#' className='hover:text-white w-fit'>Minimal Home</a>
                    <a href='#' className='hover:text-white w-fit'>Masonry Home</a>
                    <a href='#' className='hover:text-white w-fit'>Classic Home</a>
                    <a href='#' className='hover:text-white w-fit'>Passepartout Home</a>
                    <a href='#' className='hover:text-white w-fit'>Left Menu Home</a>
                    <a href='#' className='hover:text-white w-fit'>Boxed Home</a>
                    <a href='#' className='hover:text-white w-fit'>Full Screen Home</a>
                    <a href='#' className='hover:text-white w-fit'>Product Showcase</a>
                    <a href='#' className='hover:text-white w-fit'>Slider Showcase</a>
                    <a href='#' className='hover:text-white w-fit'>Simple Home</a>
                    <a href='#' className='hover:text-white w-fit'>Split Showcase</a>
                    <a href='#' className='hover:text-white w-fit'>Landing Page</a>
                </div>
            </motion.div>
        )
    }


    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className={`hover:text-hover text-xs text-hover`}>
                        HOME
                    </div>
                }
                position="bottom left"
                on={['hover', 'focus']}
            >
                <Details />
            </Popup>

        </>
    )
}
