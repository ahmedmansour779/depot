import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function CartEmpty() {
  const { msgEmptyCart, msgEmptyCartDescription, returnToShop } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div
      className="flex flex-col gap-8 text-center items-center py-20"
      style={{
        direction: lang == "ar" ? "rtl" : "ltr"
      }}
    >
      <h1 className={`font-semibold text-xl ${lang == "en" && "tracking-widest"} hover:cursor-default`}>
        {msgEmptyCart}
      </h1>
      <p className="text-hover leading-6 text-sm hover:cursor-default">
        {msgEmptyCartDescription}
      </p>
      <Link href="/">
        <button className={`bg-black py-4 px-12 text-white w-fit uppercase text-xs font-semibold ${lang == "en" && "tracking-widest"} hover:cursor-pointer hover:opacity-50 transition ease-in-out duration-300`}>
          {returnToShop}
        </button>
      </Link>
    </div>
  );
}
