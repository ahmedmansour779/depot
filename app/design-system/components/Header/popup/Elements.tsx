"use client";

import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';

export default function Elements() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const Details = () => {
        return (
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='grid grid-cols-4 gap-4 absolute bg-primary p-8 -left-[15rem] top-12 w-[80vw]  text-hover text-sm'
            >
                <div className="flex flex-col gap-4">
                    <h1 className="text-white">SHOP SHORTCODES</h1>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Product List</a>
                        <a href="#" className="hover:text-white">Product List – Carousel</a>
                        <a href="#" className="hover:text-white">Product List – Simple</a>
                        <a href="#" className="hover:text-white">On Sale Products</a>
                        <a href="#" className="hover:text-white">Top Rated Products</a>
                        <a href="#" className="hover:text-white">Best Selling Products</a>
                        <a href="#" className="hover:text-white">Products by Attribute</a>
                        <a href="#" className="hover:text-white">Single Category List</a>
                        <a href="#" className="hover:text-white">Order Tracking</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white">CLASSIC</h1>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Accordions & Toggles</a>
                        <a href="#" className="hover:text-white">Tabs</a>
                        <a href="#" className="hover:text-white">Buttons</a>
                        <a href="#" className="hover:text-white">Call To Action</a>
                        <a href="#" className="hover:text-white">Separators</a>
                        <a href="#" className="hover:text-white">Contact Form</a>
                        <a href="#" className="hover:text-white">Icon With Text</a>
                        <a href="#" className="hover:text-white">Message Boxes</a>
                        <a href="#" className="hover:text-white">Typography</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white">INFOGRAPHIC</h1>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Pricing Tables</a>
                        <a href="#" className="hover:text-white">Progress Bar</a>
                        <a href="#" className="hover:text-white">Process</a>
                        <a href="#" className="hover:text-white">Google Map</a>
                        <a href="#" className="hover:text-white">Counters</a>
                        <a href="#" className="hover:text-white">Countdown</a>
                        <a href="#" className="hover:text-white">Pie Chart</a>
                        <a href="#" className="hover:text-white">Video Button</a>
                        <a href="#" className="hover:text-white">Image Gallery</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white">PRESENTATION</h1>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Depot Banner</a>
                        <a href="#" className="hover:text-white">Portfolio List</a>
                        <a href="#" className="hover:text-white">Blog List</a>
                        <a href="#" className="hover:text-white">Item Showcase</a>
                        <a href="#" className="hover:text-white">Clients</a>
                        <a href="#" className="hover:text-white">Testimonials Slider</a>
                        <a href="#" className="hover:text-white">Team List</a>
                        <a href="#" className="hover:text-white">Team Slider</a>
                        <a href="#" className="hover:text-white">Team Member</a>
                    </div>
                </div>
            </motion.div>
        )
    }


    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className={`hover:text-hover text-xs`}>
                        ELEMENTS
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
