"use client";

import { addToCartNumber } from "@/app/store/slice/authSlice";
import { RootState } from "@/app/types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonsShoppingCartPage() {
  const { removeAll, goBackShopping } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)
  const { id } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handelRemoveCartList = async () => {
    try {
      const url = `https://depot-data.onrender.com/users/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const newData = {
        ...data,
        cart: []
      }
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      dispatch(addToCartNumber())
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  return (
    <div className={`flex justify-evenly uppercase text-xs ${lang == "en" && "tracking-widest"} font-semibold`}>
      <Link href="/" className="hover:text-hover transition ease-in-out duration-300">
        {goBackShopping}
      </Link>
      <p className="text-hover hover:cursor-pointer" onClick={() => handelRemoveCartList()}>
        {removeAll}
      </p>
    </div>
  );
}
