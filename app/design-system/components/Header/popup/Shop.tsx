"use client";

import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';

export default function Shop() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const Details = () => {
        return (
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='grid grid-cols-4 gap-4 absolute w-[120vh] bg-primary p-8 -left-24 top-12 text-hover text-sm w-[80vw]'
            >
                <div className="flex flex-col gap-4">
                    <h3 className="text-white">SHOP TYPES</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Left Sidebar</a>
                        <a href="#" className="hover:text-white">With Filter</a>
                        <a href="#" className="hover:text-white">Masonry – Grid</a>
                        <a href="#" className="hover:text-white">Masonry – Wide</a>
                        <a href="#" className="hover:text-white">Shop Carousel</a>
                        <a href="#" className="hover:text-white">Shop Boxed</a>
                        <a href="#" className="hover:text-white">Single Category</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white">PRODUCT TYPES</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Standard Product</a>
                        <a href="#" className="hover:text-white">Grouped Product</a>
                        <a href="#" className="hover:text-white">Variable Product</a>
                        <a href="#" className="hover:text-white">Downloadable Product</a>
                        <a href="#" className="hover:text-white">Virtual Product</a>
                        <a href="#" className="hover:text-white">External Product</a>
                        <a href="#" className="hover:text-white">New! Product</a>
                        <a href="#" className="hover:text-white">On Sale Product</a>
                        <a href="#" className="hover:text-white">Out of stock Product</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white">FEATURED</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">User Dashboard</a>
                        <a href="#" className="hover:text-white">Order Tracking</a>
                        <a href="#" className="hover:text-white">My Account</a>
                        <a href="#" className="hover:text-white">Cart</a>
                        <a href="#" className="hover:text-white">Checkout</a>
                        <a href="#" className="hover:text-white">Addresses</a>
                        <a href="#" className="hover:text-white">Payment Methods</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white">LAYOUTS</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="hover:text-white">Two Columns Grid</a>
                        <a href="#" className="hover:text-white">Three Columns Grid</a>
                        <a href="#" className="hover:text-white">Four Columns Grid</a>
                        <a href="#" className="hover:text-white">Four Columns Wide</a>
                        <a href="#" className="hover:text-white">Five Columns Wide</a>
                        <a href="#" className="hover:text-white">Six Columns Wide</a>
                    </div>
                </div>
            </motion.div>
        )
    }


    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className="hover:text-hover text-xs text-black">
                        Shop
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
