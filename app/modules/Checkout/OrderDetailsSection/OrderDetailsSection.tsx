"use client";

import ShippingType from "@/app/components/form/ShippingType";
import { ProductsTypes, RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function OrderDetailsSection() {
  const { id } = useSelector((state: RootState) => state.user)
  const lang = useSelector((state: RootState) => state.translations.language)
  const {
    yourOrder,
    product,
    subTotal,
    shipping,
    total
  } = useSelector((state: RootState) => state.translations.translations)
  const [data, setData] = useState<ProductsTypes[] | []>([])
  const [subtotal, setSubtotal] = useState<number>(0)
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`
        const response = await fetch(url);
        const data = await response.json();
        setData(data.cart);
        const arrayPrice: any[] = []
        data.cart.map((item: any) => {
          item.quantity ?
            arrayPrice.push(item.price * item.quantity) :
            arrayPrice.push(item.price)
          return null;
        })
        const sum = arrayPrice.reduce((acc, curr) => acc + curr, 0);
        sum > 0 ? setSubtotal(sum.toFixed(2)) : setSubtotal(0)
      } catch (err) {
        console.log("error is", err);
      }
    }
    getData();
  }, [])
  return (
    <div className="flex flex-col gap-8 py-8 container mx-auto">
      <h1
        className={`text-2xl font-medium uppercase ${lang == "en" && "tracking-wide"}`}
      >{yourOrder}
      </h1>
      <div>
        <div>
          <div className="flex py-4 capitalize text-sm font-semibold text-hover">
            <p className="flex-1 w-1/2">
              {product}
            </p>
            <p className="flex-1 w-1/2">
              {subTotal}
            </p>
          </div>
          <hr />
        </div>
        <>
          {
            data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex py-4 capitalize text-sm font-light text-hover">
                    <p className="flex-1 w-1/2">
                      {item.title}<span className="font-semibold">{item.quantity ? " x" + item.quantity : " x1"}</span>
                    </p>
                    <p className="flex-1 w-1/2">
                      {
                        item.quantity ?
                          `$ ${item.quantity * item.price}` :
                          `$ ${item.price}`
                      }
                    </p>
                  </div>
                  <hr />
                </div>
              )
            })
          }
        </>
        <div>
          <div className="flex py-4 capitalize text-sm  text-hover">
            <p className="flex-1 w-1/2 font-semibold">
              {subTotal}
            </p>
            <p className="flex-1 w-1/2">
              ${subtotal}
            </p>
          </div>
          <hr />
        </div>
        <div>
          <div className="flex py-4 capitalize text-sm  text-hover">
            <p className="flex-1 w-1/2 font-semibold">
              {shipping}
            </p>
            <p className="flex-1 w-1/2">
              <ShippingType />
            </p>
          </div>
          <hr />
        </div>
        <div>
          <div className="flex py-4 capitalize text-sm font-semibold text-hover">
            <p className="flex-1 w-1/2">
              {total}
            </p>
            <p className="flex-1 w-1/2">
              ${subtotal}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
