"use client";

import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export default function TextWhatWeDo() {
    const { whatCanWeDo, answerWhatCanWeDo } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)
    return (
        <div
            className="text-center py-24 flex flex-col gap-6"
            style={{
                fontFamily: lang == "ar" ? "Cairo, sans-serif" : "inherit"
            }}>
            <h1 className={`font-semibold ${lang == "en" && "tracking-widest"} text-xl`}>
                {whatCanWeDo}
            </h1>
            <p className="text-hover leading-6">
                {answerWhatCanWeDo}
            </p>
        </div>
    )
}
