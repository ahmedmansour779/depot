"use client";

import { RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartEmpty from "../CartEmpty";
import ProductCartPage from "../ProductCartPage";

export default function ProductsListCartPage() {
  const [data, setData] = useState([]);
  const { id, cartEvent } = useSelector((state: RootState) => state.user)

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
  }, [id, cartEvent])

  return (
    <div className="flex flex-col gap-4">
      {
        data ?
          data.map((item, index) => {
            return (
              <ProductCartPage product={item} key={index} />
            )
          }) : <CartEmpty />
      }
    </div>
  );
}
