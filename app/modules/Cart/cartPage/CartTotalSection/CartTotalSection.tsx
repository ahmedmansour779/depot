"use client";

import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShippingType from "../../ShippingType";
import SubTotal from "../SubTotal";

export default function CartTotalSection() {
  const { cartTotals } = useSelector((state: RootState) => state.translations.translations)
  const { isLoggedIn } = useSelector((state: RootState) => state.user)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div
      className={`w-full bigTablet:w-96 bg-[#e1e1e1] py-4 px-4 h-fit bigTablet:mt-16 flex flex-col gap-4 ${lang == "ar" && "hidden"}`}>
      <h1
        className={`uppercase font-medium ${lang == "en" && "tracking-wider text-xl"} mb-4`}
      >
        {cartTotals}
      </h1>
      <SubTotal />
      <ShippingType />
      <div>
        <p>

        </p>
        <p>

        </p>
      </div>
      <Link href="/checkout">

      </Link>
    </div>
  );
}
