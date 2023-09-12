"use client";
import { useState } from "react";

import { ImagesData } from "@/app/data/images";
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconMenu2, IconX } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

export default function Sidebar() {
    const [open, setOpen] = useState<boolean>(false)

    const openNavbar = () => {
        setOpen(true)
    }
    const closeNavbar = () => {
        setOpen(false)
    }

    return (
        <div>
            <button className="hover:text-hover" onClick={openNavbar}>
                <IconMenu2 />
            </button>
            <nav className={`${open ? "show" : "hidden"} sidebar1 bg-primary`}>
                <div className=" absolute top-10 right-10 ">
                    <button className="text-white hover:text-hover" onClick={closeNavbar}>
                        <IconX />
                    </button>
                </div>

                <div className="flex mt-28 mx-auto text-center flex-col justify-center flex-wrap w-4/6">
                    <h6 className="text-seconder">WELCOME</h6>
                    <span className="text-hover my-8 text-lg">Advertising is the way great brands get to be great brands.</span>
                </div>
                <div className="w-8/12 mx-auto grid grid-cols-4 place-items-stretch gap-2">
                    {
                        ImagesData.map((result: { id: number, image: StaticImageData, title: string }) => {
                            return (
                                <div key={result.id} className="h-18 overflow-hidden">
                                    <Image src={result.image} style={{ width: "100%", height: "5rem" }} alt={result.title} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute flex text-center flex-col justify-center flex-wrap bottom-0 mx-auto bg-primary w-full py-4">
                    <h6 className="text-hover tracking-widest">WE ARE AWESOME FOLLOW US</h6>
                    <div className="flex flex-row py-4 mx-auto gap-4">
                        <IconBrandTwitterFilled style={{ color: "#fff" }} />
                        <IconBrandInstagram color="#fff" />
                        <IconBrandFacebookFilled style={{ color: "#fff" }} />
                    </div>
                </div>
            </nav>
        </div>
    )
}
