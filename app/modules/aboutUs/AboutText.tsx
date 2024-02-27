"use client";

import image from "@/app/shared/aboutUs/about-img.jpg";
import { RootState } from "@/app/types";
import Image from "next/image";
import { useSelector } from "react-redux";
import TapsValue from "./TapsValue";

export default function AboutText() {
    const { aboutUs, } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <div className="container mx-auto">
            <div
                className="flex flex-row md:flex-nowrap flex-wrap md:gap-0 gap-8 w-full"
                style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
                <div className={`md:w-1/2 w-full ${lang == "ar" && "md:ml-8"}`}>
                    <Image src={image} alt="about-img" />
                </div>
                <div className={`md:w-1/2 w-full ${lang == "en" && "md:ml-8"}`}>
                    <TapsValue />
                </div>
            </div>
        </div>
    )
}
