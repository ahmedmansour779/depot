"use client";

import { RootState } from "@/app/types";
import { InputHTMLAttributes } from "react";
import { useSelector } from "react-redux";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  require?: boolean,
  name: string,
  className?: string,
  type?: string,
  typeAddress?: "billing" | "deferent"
};

export default function InputText(props: InputTextProps) {
  const {
    label,
    require,
    name,
    className,
    type,
    typeAddress,
  } = props;
  const { optional } = useSelector((state: RootState) => state.translations.translations)

  return (
    <div
      className={`flex flex-col gap-2 ${className}`}
    >
      <label
        htmlFor={typeAddress == "deferent" ? `${name}deferent` : `${name}Billing`}
        className="capitalize text-xs font-normal"
      >{label}{require ? "..*" : `(${optional})`}</label>
      <input
        required={require && true}
        type={type ? type : "text"}
        id={typeAddress == "deferent" ? `${name}deferent` : `${name}Billing`}
        {...props}
        className="px-4 py-2 text-hover w-full border-[1px] border-[#e1e1e1] border-solid bg-[#fff] focus:bg-[#fafafa]"
      />
    </div>
  );
}

