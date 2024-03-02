"use client";

import "@/app/style/style.css";
import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export default function TitleImagePageWishList() {
    const { wishList } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <div
            className="wishList-title-image title-image  flex items-center justify-center h-[45vh]"
            style={{
                fontFamily: lang == "ar" ? "Cairo, sans-serif" : "inherit"
            }}
        >
            <h1 className={`text-white text-5xl font-medium  ${lang == "en" && "tracking-[0.5rem]"} uppercase`}>{wishList}</h1>
        </div>
    )
}
