"use client";

import { RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonsShoppingCartPage from "../ButtonsShoppingCartPage";
import CartEmpty from "../CartEmpty";
import ProductsListCartPage from "../ProductsListCartPage";

export default function ShoppingCartSection() {
  const { shoppingCart } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)
  const { cartEvent, id, isLoggedIn } = useSelector((state: RootState) => state.user)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data.cart)
      } catch (error) {
        console.log("set data by catch");
      }
    }
    getData()
  }, [cartEvent, id])

  return (
    <div
      style={{
        direction: lang == "ar" ? "rtl" : "ltr",
        fontFamily: lang == "ar" ? "Cairo, sans-serif" : "inherit"
      }}
      className="py-20 flex flex-col gap-20 w-[inherit]">
      {
        isLoggedIn ?
          data ?
            data.length == 0 ?
              <CartEmpty /> :
              <>
                <h1 className={`text-2xl font-medium uppercase ${lang == "en" && "tracking-[2px]"} `}>{shoppingCart}</h1>
                <ProductsListCartPage />
                <ButtonsShoppingCartPage />
              </> : null :
          <CartEmpty />
      }
    </div>
  );
}
