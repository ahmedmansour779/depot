import { RootState } from "@/app/types";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ButtonsPopup() {
  const { viewCart, checkout } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div className="w-full flex flex-col items-stretch gap-2">
      <Link href="/cart" className={`uppercase text-[0.6rem] flex justify-center items-center py-2 text-white bg-transparent border-2 border-[#505050] hover:border-white border-solid tracking-widest  transition ease-in-out duration-300 ${lang == "en" && "tracking-widest"}`}>
        {viewCart}
      </Link>
      <Link href="checkout" className={`uppercase text-[0.6rem] flex justify-center items-center py-2 text-white ${lang == "en" && "tracking-widest"} bg-[#2e2e2e] hover:bg-[#4b4b4b]  transition ease-in-out duration-300`}>
        {checkout}
      </Link>
    </div>
  );
}
