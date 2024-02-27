"use client";

import "@/app/style/style.css";
import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export default function AboutTitle() {
    const { aboutUs } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <div
            className="about-title-image flex items-center justify-center h-[45vh]">
            <h1 className={`text-white text-5xl font-medium  ${lang == "en" && "tracking-[0.5rem]"} uppercase`}>{aboutUs}</h1>
        </div>
    )
}
