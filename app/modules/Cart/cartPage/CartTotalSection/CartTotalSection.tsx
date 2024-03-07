"use client";

import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShippingType from "../../ShippingType";
import FormUpdateAddress from "../FormUpdateAddress";
import SubTotal from "../SubTotal";
import TotalSectionInCartTotalSection from "../TotalSectionInCartTotalSection";

export default function CartTotalSection() {
  const { cartTotals, proceedToCheckout } = useSelector((state: RootState) => state.translations.translations)
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
      <hr />
      <TotalSectionInCartTotalSection />
      <Link
        href="/checkout"
        className="bg-black text-white font-semibold text-xs py-4 w-full flex justify-center items-center uppercase hover:opacity-50 transition ease-in-out duration-300" >
        {proceedToCheckout}
      </Link>
    </div>
  );
}
