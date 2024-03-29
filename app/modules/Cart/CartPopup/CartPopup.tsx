"use client";

import { RootState } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import CartPopupProducts from "../CartPopupProducts";

export default function CartPopup() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { id, cartEvent } = useSelector((state: RootState) => state.user)
  const { cart } = useSelector((state: RootState) => state.translations.translations)
  const [allPrice, setAllPrice] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.cart)
        const arrayPrice: any[] = []
        data.cart.map((item: any) => {
          item.quantity ?
            arrayPrice.push(item.price * item.quantity) :
            arrayPrice.push(item.price)
          return null;
        })
        const sum = arrayPrice.reduce((acc, curr) => acc + curr, 0);
        sum > 0 ? setAllPrice(sum.toFixed(2)) : setAllPrice(0)
      } catch (error) {
        setAllPrice(0);
      }
    }
    getData()
  }, [id, cartEvent])
  return (
    <>
      <Popup
        trigger={
          <div
            className="flex justify-between items-center text-xs hover:cursor-pointer"
            ref={target}
            onClick={() => setShow(!show)}>
            <div className="hover:text-hover transition ease-in-out duration-300" >
              {cart}
            </div>
            <div className="text-hover text-xs">
              ({allPrice}$)
            </div>
          </div>
        }
        position="bottom left"
        on={['hover', 'focus']}
      >
        {
          products ?
            <CartPopupProducts allPrice={allPrice} products={products} /> : null
        }
      </Popup>
    </>
  );
}
