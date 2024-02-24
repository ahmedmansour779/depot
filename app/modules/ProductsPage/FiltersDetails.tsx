"use client";

import { makePrice } from "@/app/store/slice/filterPriceSlice";
import { RootState } from "@/app/types";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";


export default function FiltersDetails() {
    const { priceRange, all } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)
    const value = useSelector((state: RootState) => state.filterPrice.value)
    const dispatch = useDispatch()

    const changePrice = (value: string) => {
        dispatch(makePrice(value))
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute w-56 bg-primary ${lang == "ar" ? "-left-12" : "right-0"} p-8`}
            style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="flex flex-col gap-8">
                <h6 className="text-white uppercase">{priceRange}</h6>
                <div className="flex flex-col gap-2 text-hover text-sm">
                    <p style={{ color: value == "all" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer uppercase" onClick={() => changePrice("all")}>{all}</p>
                    <p style={{ color: value == "0-10" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer" onClick={() => changePrice("0-10")}>$0 - $10</p>
                    <p style={{ color: value == "10-20" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer" onClick={() => changePrice("10-20")}>$10 - $20</p>
                    <p style={{ color: value == "20-30" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer" onClick={() => changePrice("20-30")}>$20 - $30</p>
                    <p style={{ color: value == "30-40" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer" onClick={() => changePrice("30-40")}>$30 - $40</p>
                    <p style={{ color: value == "+40" ? "#fff" : "inherit" }} className="hover:text-white hover:cursor-pointer" onClick={() => changePrice("+40")}>$40+</p>
                </div>
            </div>
        </motion.div>
    )
}
