"use client";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

export default function Menu() {
    const [openSidebar, setSidebar] = useState<boolean>(false)

    const openNavbar = () => {
        setSidebar(true)
    }
    const closeNavbar = () => {
        setSidebar(false)
    }

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);


    return (
        <div className="menu" style={{ display: "none" }}>
            <button className="hover:text-hover flex flex-row-reverse items-center justify-center gap-1 font-bold" style={{ letterSpacing: "2px" }} onClick={openNavbar}>
                <IconMenu2 size={20} />MENU
            </button>
            <nav className={`${openSidebar ? "show" : "hidden-sidebar"} w-[45vw] sidebar1 bg-primary z-50`}>
                <div className="absolute top-10 right-10 ">
                    <button className="text-white hover:text-hover" onClick={closeNavbar}>
                        <IconX />
                    </button>
                </div>
                <div className="text-hover mx-20 mt-28">
                    <Accordion open={open === 1}>
                        <AccordionHeader className="text-white" onClick={() => handleOpen(1)}>HOME</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">Main Home</a>
                                <a href="#">Minimal Home</a>
                                <a href="#">Masonry Home</a>
                                <a href="#">Classic Home</a>
                                <a href="#">Passepartout Home</a>
                                <a href="#">Left Menu Home</a>
                                <a href="#">Boxed Home</a>
                                <a href="#">Full Screen Home</a>
                                <a href="#">Product Showcase</a>
                                <a href="#">Slider Showcase</a>
                                <a href="#">Simple Home</a>
                                <a href="#">Split Showcase</a>
                                <a href="#">Landing Page</a>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>PAGES</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">About Us</a>
                                <a href="#">What We Do</a>
                                <a href="#">Our Team</a>
                                <a href="#">Meet The Crew</a>
                                <a href="#">Team Member</a>
                                <a href="#">Our Services</a>
                                <a href="#">Pricing Plans</a>
                                <a href="#">Payment</a>
                                <a href="#">Testimonials</a>
                                <a href="#">Gift Cards</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Contact Us</a>
                                <a href="#">Leave Us A Note</a>
                                <a href="#">Coming Soon</a>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>SHOP</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">Shop Types</a>
                                <a href="#">Product Types</a>
                                <a href="#">Featured</a>
                                <a href="#">Layouts</a>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>PORTFOLIO</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">Standard</a>
                                <a href="#">Masonry Grid</a>
                                <a href="#">Masonry Wide</a>
                                <a href="#">Gallery Layouts</a>
                                <a href="#">Single Types</a>
                            </div>

                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                        <AccordionHeader onClick={() => handleOpen(5)}>BLOG</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">Masonry</a>
                                <a href="#">Standard</a>
                                <a href="#">Simple</a>
                                <a href="#">Post</a>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6}>
                        <AccordionHeader onClick={() => handleOpen(6)}>ELEMENTS</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-1.5">
                                <a href="#">Shop Shortcodes</a>
                                <a href="#">Classic</a>
                                <a href="#">Infographic</a>
                                <a href="#">Presentation</a>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </nav >
        </div >
    )
}
