"use client";
import { useState } from "react";

import { sidebar } from "@/app/data/sidebar";
import { useTrans } from "@/app/store/translation/transFunc";
import { RootState } from "@/app/types";
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconMenu2, IconX } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { useSelector } from "react-redux";

export default function Sidebar() {
    const [open, setOpen] = useState<boolean>(false)
    const user = useSelector((state: RootState) => state.user)
    const openNavbar = () => {
        setOpen(true)
    }
    const closeNavbar = () => {
        setOpen(false)
    }

    return (
        <div className="transition-config">
            <button className="hover:text-hover" onClick={openNavbar}>
                <IconMenu2 />
            </button>
            <nav className={`${open ? "show" : "hidden-sidebar"} w-[45vw] sidebar1 bg-primary z-50`}>
                <div className=" absolute top-10 right-10 ">
                    <button className="text-white hover:text-hover" onClick={closeNavbar}>
                        <IconX />
                    </button>
                </div>

                <div className="flex mt-28 mx-auto text-center flex-col justify-center flex-wrap w-4/6">
                    <h6 className="text-seconder">{useTrans("welcome")} {user.isLoggedIn && user.name.toUpperCase()}</h6>
                    <span className="text-hover my-8 text-lg">{useTrans("msgSidePar")}</span>
                </div>
                <div className="w-8/12 mx-auto grid grid-cols-4 place-items-stretch gap-2">
                    {
                        sidebar.map((result: { id: number, image: StaticImageData, title: string }) => {
                            return (
                                <div key={result.id} className="h-18 overflow-hidden">
                                    <Image src={result.image} style={{ width: "100%", height: "5rem" }} alt={result.title} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute flex text-center flex-col justify-center flex-wrap bottom-0 mx-auto bg-primary w-full py-4">
                    <h6 className="text-hover tracking-widest">{useTrans("followUs")}</h6>
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
