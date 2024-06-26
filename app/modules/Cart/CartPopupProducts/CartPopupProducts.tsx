"use client";

import DeleteBtnCartProduct from "@/app/components/form/DeleteBtnCartProduct";
import { ProductsTypes, RootState } from "@/app/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonsPopup from "../ButtonsPopup";

type propsType = {
  products: ProductsTypes[];
  allPrice: number;
}

export default function CartPopupProducts(props: propsType) {
  const lang = useSelector((state: RootState) => state.translations.language)
  const { msgNoProductsInCart, total } = useSelector((state: RootState) => state.translations.translations)
  const [loading, setLoading] = useState(false)

  const ProductsList = () => {
    return (
      <div className={`flex flex-col gap-4 w-full max-h-62 overflow-y-scroll ${loading ? "opacity-50" : "opacity-100"}`}>
        {
          props.products.map((product, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="flex gap-2 justify-between w-full"
                >
                  <div className="flex gap-2">
                    <div className="w-10 hover:cursor-default">
                      <img
                        className="w-10"
                        src={product.image}
                        alt={product.title} />
                    </div>
                    <div className="flex flex-col gap-1 item-start justify-start">
                      <span className="text-white hover:cursor-pointer">
                        <Link href={`/products/${product.id}`}>
                          {product.title.slice(0, 10) + "..."}
                        </Link>
                      </span>
                      <span className="text-hover hover:cursor-default w-full" >
                        <>
                          {
                            product.quantity ?
                              `${product.quantity} x ${product.price}$` :
                              `1 x ${product.price}$`
                          }
                        </>
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <DeleteBtnCartProduct id={product.id} setLoading={setLoading} loading={loading} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  const TotalPrice = () => {
    return (
      <div className="flex justify-between items-center text-white" style={{ direction: lang == "ar" ? "rtl" : "ltr" }} >
        <div className={`font-normal text-white uppercase ${lang == "en" && "tracking-[4px]"} `}>
          {total}:
        </div>
        <div className="text-xs">
          {props.allPrice}$
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='flex flex-col justify-between gap-4 absolute w-[14rem] bg-primary p-4 -left-[3rem] top-12 text-hover text-sm capitalize'
      >
        {
          props.products.length > 0 ?
            <>
              <ProductsList />
              <TotalPrice />
              <ButtonsPopup />
            </> :
            <p
              className="text-hover text-sm"
            >
              {msgNoProductsInCart}
            </p>
        }
      </motion.div>
    </>
  );
}
