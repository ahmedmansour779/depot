"use client";

import { addToCartNumber } from "@/app/store/slice/authSlice";
import { RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type shippingValueType = "freeShipping" | "localPickup" | "flatRate10"

export default function ShippingType() {
  const {
    shippingType1,
    shippingType2,
    shippingType3
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)
  const { id } = useSelector((state: RootState) => state.user)
  const [shippingType, setShippingType] = useState<shippingValueType>("freeShipping")
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`
        const response = await fetch(url)
        const data = await response.json()
        data.shippingType = shippingType;
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        dispatch(addToCartNumber())
      } catch (err) {
        console.log("error", err);
      }
    }
    getData()
  }, [shippingType])

  return (
    <form className="w-32 text-gray-500 font-light flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <input
          defaultChecked
          type="radio"
          name="shipValue"
          id="valueOne"
          onChange={() => setShippingType("freeShipping")} />
        <label htmlFor="valueOne">{shippingType1}</label>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="radio"
          name="shipValue"
          id="valueTwo"
          onChange={() => setShippingType("localPickup")} />
        <label
          htmlFor="valueTwo">{shippingType2}</label>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="radio"
          name="shipValue"
          id="valueThree"
          onChange={() => setShippingType("flatRate10")} />
        <label htmlFor="valueThree">{shippingType3}</label>
      </div>
    </form>
  );
}
