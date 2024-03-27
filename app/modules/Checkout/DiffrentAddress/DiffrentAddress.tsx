"use client";

import { RootState } from "@/app/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import FormBillingDetails from "../FormBillingDetails";

export type DiffrentAddressProps = {
  // props go here
};
export default function DiffrentAddress(props: DiffrentAddressProps) {
  const lang = useSelector((state: RootState) => state.translations.language)
  const {
    msgDiffrentAddress,
    optional,
    orderNotes
  } = useSelector((state: RootState) => state.translations.translations)
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="bigTablet:flex-1 bigTablet:w-1/2 w-full py-6 flex flex-col gap-8">
      <div className={`flex gap-2 font-light text-sm ${lang == "en" && "tracking-wide"}`}>
        <input
          onChange={() => setShow(!show)}
          type="checkbox"
          name="diffrentAddress"
          id="diffrentAddress" />
        <label htmlFor="diffrentAddress">
          {msgDiffrentAddress}
        </label>
      </div>
      {
        show && <FormBillingDetails diffrent="deferent" />
      }
      <div
        className="flex flex-col gap-2"
      >
        <label
          htmlFor="orderNotes"
          className="capitalize text-xs font-normal"
        >
          {orderNotes} ({optional})
        </label>
        <textarea
          name="orderNotes"
          id="orderNotes"
          className="px-4 py-2 text-hover w-full border-[1px] border-[#e1e1e1] border-solid bg-[#fff] focus:bg-[#fafafa]"
        />
      </div>
    </div>
  );
}
