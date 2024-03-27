"use client";

import ShippingType from "@/app/components/form/ShippingType";
import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export default function ShippingTypeSection() {
  const {
    shipping,
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)


  return (
    <div className="flex justify-between w-full text-sm capitalize">
      <h1 className={`font-medium ${lang == "en" && "tracking-wider"} uppercase`}>{shipping}</h1>
      <ShippingType />
    </div>
  );
}
