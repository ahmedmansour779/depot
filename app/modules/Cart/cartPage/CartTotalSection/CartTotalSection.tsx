"use client";

import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import SubTotal from "../SubTotal";

export default function CartTotalSection() {
  const { cartTotals } = useSelector((state: RootState) => state.translations.translations)
  const { isLoggedIn } = useSelector((state: RootState) => state.user)

  return (
    <div className={`w-full bigTablet:w-40 ${isLoggedIn == false && "hidden"} `}>
      <h1
        className=""
      >
        {cartTotals}
      </h1>
      <SubTotal />
      <div>

      </div>
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
