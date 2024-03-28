"use client";

import { RootState } from "@/app/types";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export type InputSearchProps = {
  // props go here
};
export default function InputSearch(props: InputSearchProps) {
  const { typeHere, msgSearchPage } = useSelector((state: RootState) => state.translations.translations)
  const router = useRouter()

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue: any = {}
    formData.forEach((value, key) => {
      searchValue[key] = value
    })
    router.push(`/search/${searchValue.search}`);
  }

  return (
    <div
      className="flex flex-col gap-2"
    >
      <form
        className="flex justify-between items-center"
        onSubmit={(e) => handelSubmit(e)}
      >
        <input
          type="text"
          name="search"
          placeholder={typeHere}
          className="p-2 bg-transparent text-hover text-xs w-11/12"
        />
        <IconSearch
          color="gray"
          size={15}
          onClick={handelSubmit} />
      </form>
      <hr />
      <p
        className="text-xs text-hover"
      >
        {msgSearchPage}
      </p>
    </div>
  );
}
