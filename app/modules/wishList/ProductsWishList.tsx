"use client";
import { ProductsTypes, RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneProductWishList from "./OneProductWishList";

export default function ProductsWishList() {
    const [data, setData] = useState<ProductsTypes[]>([])
    const { id, washListNumbers } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `https://depot-data.onrender.com/users/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setData(data.washList)
                console.log(data.washList)
                console.log("set data by try");
            } catch (error) {
                console.log("set data by catch");
            }
        }
        getData()
    }, [washListNumbers, id])

    console.log(data);

    return (
        <div className="container mx-auto py-24">
            <div className="flex flex-col gap-8">
                {
                    data.length > 0 ?
                        data.map((product, index) => {
                            return (
                                <OneProductWishList product={product} key={index} />
                            )
                        }) :
                        <div className="text-center text-hover">
                            No products added to the wishlist
                        </div>
                }
            </div>
        </div>
    )
}
