"use client";

import { RootState } from "@/app/types";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";

export type SearchPopupProps = {
  // props go here
};
export default function SearchPopup(props: SearchPopupProps) {
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const lang = useSelector((state: RootState) => state.translations.language)
  const { enterKeyword } = useSelector((state: RootState) => state.translations.translations)
  const router = useRouter()

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue: any = {}
    formData.forEach((value, key) => {
      searchValue[key] = value
    })
    setShow(false)
    router.push(`/search/${searchValue.search}`);
  }

  const Details = () => {
    return (
      <>
        <motion.form
          onSubmit={(e) => handelSubmit(e)}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ direction: lang == "ar" ? "rtl" : "ltr" }}
          className='flex flex-row items-center justify-between gap-1 absolute w-60 bg-primary p-4 -right-7 top-8 text-hover capitalize'
        >
          <input
            type="text"
            placeholder={enterKeyword}
            name="search"
            className="bg-transparent w-11/12 text-white capitalize text-xs" />
          <IconArrowRight size={15} />
        </motion.form>
      </>
    )
  }

  return (
    <>
      <Popup
        trigger={
          <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className="hover:text-hover transition ease-in-out duration-300">
            <IconSearch size={20} />
          </div>
        }
        position="bottom left"
        on={['click']}
      >
        <Details />
      </Popup>

    </>
  );
}
