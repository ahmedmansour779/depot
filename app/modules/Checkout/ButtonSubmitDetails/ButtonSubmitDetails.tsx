"use client";

import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export type ButtonSubmitDetailsProps = {
  // props go here
};

export default function ButtonSubmitDetails(props: ButtonSubmitDetailsProps) {
  const {
    msgSubmitDetails,
    orderNow
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div className="flex flex-col gap-2 items-start">
      <p
        className="text-hover text-sm"
      >
        {msgSubmitDetails}
      </p>
      <button
        className={`uppercase text-white text-xs bg-black font-semibold py-3 px-6 hover:opacity-50 hover:cursor-pointer transition ease-in-out duration-300 ${lang == "en" && "tracking-wider"}`}
      >
        {orderNow}
      </button>
    </div>
  );
}
