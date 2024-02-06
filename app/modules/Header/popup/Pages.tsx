"use client";

import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';


export default function Pages() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const Details = () => {
        return (
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='flex flex-col gap-1 absolute w-[11rem] bg-primary p-8 -left-[3rem] top-12 text-hover text-sm'
            >
                <a href='#' className='hover:text-white'>About Us</a>
                <a href='#' className='hover:text-white'>What We Do</a>
                <a href='#' className='hover:text-white'>Our Team</a>
                <a href='#' className='hover:text-white'>Meet The Crew</a>
                <a href='#' className='hover:text-white'>Team Member</a>
                <a href='#' className='hover:text-white'>Our Services</a>
                <a href='#' className='hover:text-white'>Pricing Plans</a>
                <a href='#' className='hover:text-white'>Payment</a>
                <a href='#' className='hover:text-white'>Testimonials</a>
                <a href='#' className='hover:text-white'>Gift Cards</a>
                <a href='#' className='hover:text-white'>Terms & Conditions</a>
                <a href='#' className='hover:text-white'>Contact Us</a>
                <a href='#' className='hover:text-white'>Leave Us A Note</a>
                <a href='#' className='hover:text-white'>FAQ</a>
                <a href='#' className='hover:text-white'>Coming Soo</a>
            </motion.div>
        )
    }


    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className={`hover:text-hover text-xs`}>
                        PAGES
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
