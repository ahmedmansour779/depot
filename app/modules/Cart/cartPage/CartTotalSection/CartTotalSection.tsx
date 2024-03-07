"use client";

import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShippingType from "../../ShippingType";
import FormUpdateAddress from "../FormUpdateAddress";
import SubTotal from "../SubTotal";

export default function CartTotalSection() {
  const { cartTotals } = useSelector((state: RootState) => state.translations.translations)
  const { isLoggedIn } = useSelector((state: RootState) => state.user)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div
      className={`w-full bigTablet:w-96 bg-[#fafafa] py-4 px-4 h-fit bigTablet:mt-16 flex flex-col gap-4 ${isLoggedIn == false && "hidden"}`}>
      <h1
        className={`uppercase font-medium ${lang == "en" && "tracking-wider text-xl"} mb-4`}
      >
        {cartTotals}
      </h1>
      <SubTotal />
      <ShippingType />
      <FormUpdateAddress />
      <Link href="/checkout">

      </Link>
    </div>
  );
}
