"use client";

import { RootState } from "@/app/types";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TranslationSideBar from "../TranslationSideBar";

export default function Menu() {
    const [openSidebar, setSidebar] = useState<boolean>(false)
    const {
        home,
        menu,
        cart,
        login,
        search,
        pages,
        aboutUs,
        washList
    } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    const openNavbar = () => {
        setSidebar(true)
    }
    const closeNavbar = () => {
        setSidebar(false)
    }

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);


    return (
        <div className="menu" style={{ display: "none", direction: lang == "ar" ? "rtl" : "ltr" }}>
            <button className="hover:text-hover flex flex-row-reverse items-center justify-center gap-1 font-bold uppercase" style={{ letterSpacing: "2px" }} onClick={openNavbar}>
                <IconMenu2 size={20} /> {menu}
            </button>
            <nav className={`${openSidebar ? "show" : "hidden-sidebar"} w-[45vw] sidebar1 bg-primary z-50`}>
                <div className="absolute top-10 right-10 ">
                    <button className="text-white hover:text-hover" onClick={closeNavbar}>
                        <IconX />
                    </button>
                </div>
                <div className="text-white mx-20 mt-28">
                    <div className="flex flex-col gap-4 uppercase font-medium">
                        <Link href="/">{home}</Link>
                        <Link href="/cart">{cart}</Link>
                        <Link href="/auth">{login}</Link>
                        <Link href="/search">{search}</Link>
                        <TranslationSideBar />
                    </div>
                    <Accordion placeholder="test" open={open === 1}>
                        <AccordionHeader placeholder="test" className="text-white" onClick={() => handleOpen(1)}>{pages}</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <Link href="/about-us">{aboutUs}</Link>
                                <Link href="/whatWeDo">{aboutUs}</Link>
                                <Link href="/washList">{washList}</Link>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </nav >
        </div >
    )
}
