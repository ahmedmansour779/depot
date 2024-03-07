"use client";

import { RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SubTotal() {
  const { subTotal } = useSelector((state: RootState) => state.translations.translations)
  const { id, cartEvent } = useSelector((state: RootState) => state.user)
  const [allPrice, setAllPrice] = useState<number>(0)
  const lang = useSelector((state: RootState) => state.translations.language)

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        const priceArray: number[] = []
        data.cart.map((item: { price: number; quantity: any }) => {
          item.quantity ?
            priceArray.push(item.quantity * item.price) :
            priceArray.push(item.price)
        })
        const sum = priceArray.reduce((total, currentValue) => total + currentValue, 0);
        setAllPrice(+sum.toFixed(2));
      } catch {
        console.log("error");
      }
    }
    getData()
  }, [cartEvent])

  return (
    <div className="flex justify-between w-full uppercase text-sm">
      <h1 className={`font-medium ${lang == "en" && "tracking-wider"}`}>
        {subTotal}
      </h1>
      <p className="w-32 text-gray-500 font-light">{allPrice}$</p>
    </div>
  );
}
