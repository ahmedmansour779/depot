"use client";
import { ProductsTypes, RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneProductWishList from "./OneProductWishList";

export default function ProductsWishList() {
    const [data, setData] = useState<ProductsTypes[]>([])
    const { id, wishListNumbers } = useSelector((state: RootState) => state.user)
    const { msgWishList } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `https://depot-data.onrender.com/users/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setData(data.wishList)
            } catch (error) {
                console.log("set data by catch");
            }
        }
        getData()
    }, [wishListNumbers, id])
    return (
        <div className="container mx-auto py-24">
            <div
                style={{
                    direction: lang == "ar" ? "rtl" : "ltr"
                }}
                className="flex flex-col gap-8">
                {
                    data.length > 0 ?
                        data.map((product, index) => {
                            return (
                                <OneProductWishList product={product} key={index} />
                            )
                        }) :
                        <div className="text-center text-hover">
                            {msgWishList}
                        </div>
                }
            </div>
        </div>
    )
}
