"use client";

import { ProductsTypes, RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import AddToWishlistButton from "../wishList/AddToWishlistButton";
import QuickLook from "./QuickLook";
const ratingLength = [1, 2, 3, 4, 5]

export default function ProductCart({ product, isRating }: { product: ProductsTypes, isRating: boolean }) {
  const { addToCart } = useSelector((state: RootState) => state.translations.translations)

  return (
    <div className="flex flex-col gap-6 overflow-hidden h-[30rem] cart">
      <div className="relative w-fit h-[75%] m-auto flex justify-center items-center overflow-hidden">
        <Link href={`/products/${product.id}`} className="w-[50%]">
          <img width="100%" height="100%" src={product.image} alt={`${product.title}`} />
        </Link>
        <div className="absolute bottom-0 w-fit h-[2rem] mx-auto quick-look flex">
          <div className="h-full"><QuickLook product={product} /></div>
          <button className="bg-[#555] p-2 h-full">
            <AddToWishlistButton product={product} />
          </button>
        </div>
      </div>
      <div className="flex flex-col h-[25%] gap-0 py-4 items-center justify-between text-center">
        <h3 className="text-sm uppercase">
          {
            product.title.slice(0, 38) + "..."
          }
        </h3>
        {
          isRating &&
          <div className="flex items-center space-x-1">
            {ratingLength.map((rate) => {
              return (
                <svg key={rate} className={`w-4 h-4 ${rate <= rate ? "text-yellow-300" : "text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              )
            })}
          </div>
        }
        <p className="text-sm text-hover hidden-button">${product.price}</p>
        <button className="text-sm text-hover !hover:text-black show-button">{addToCart}</button>
      </div>
    </div>
  );
}
