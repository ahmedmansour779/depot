import { RootState } from "@/app/types";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function OrderDone() {
    const [show, setShow] = useState(true)
    const lang = useSelector((state: RootState) => state.translations.language)
    const { oderSuccessful } = useSelector((state: RootState) => state.translations.translations)

    return (
        <div className={`${show ? "z-[999999] opacity-100" : "-z-50 opacity-0"} flex gap-2 fixed z-[999999] top-4 ${lang == "ar" ? "right-0 -translate-x-4" : "left-0 translate-x-4"} bg-black text-white p-4 transition ease-in-out duration-300 animation-notification`} >
            <span className='uppercase hover:cursor-default'>{oderSuccessful}</span>
            <IconX className='hover:text-hover hover:cursor-pointer transition ease-in-out duration-300' onClick={() => setShow(false)} />
        </div>
    );
}
