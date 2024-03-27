"use client";

import { RootState } from "@/app/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';

export default function Pages() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const {
        aboutUs,
        pages,
        whatWeDo,
        cart,
        wishList } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)
    const loggedIn = useSelector((state: RootState) => state.user.isLoggedIn)


    const Details = () => {
        return (
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ direction: lang == "ar" ? "rtl" : "ltr" }}
                className='flex flex-col gap-1 absolute w-[11rem] bg-primary p-8 -left-[3rem] top-12 text-hover text-sm capitalize'
            >
                <Link href='/aboutUs' className='hover:text-white'>{aboutUs}</Link>
                <Link href='/whatWeDo' className='hover:text-white'>{whatWeDo}</Link>
                {
                    loggedIn &&
                    <>
                        <Link href='/wishList' className='hover:text-white'>{wishList}</Link>
                        <Link href='/cart' className='hover:text-white'>{cart}</Link>
                    </>
                }

            </motion.div>
        )
    }

    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className={`hover:text-hover text-xs uppercase`}>
                        {pages}
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
