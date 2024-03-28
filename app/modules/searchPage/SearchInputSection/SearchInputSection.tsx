"use client";

import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export type SearchInputSectionProps = {
  // props go here
};
export default function SearchInputSection(props: SearchInputSectionProps) {
  const {
    searchResult,
    typeHere,
    msgSearchPage
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)

  return (
    <div
      className="py-8 container mx-auto flex flex-col gap-8"
    >
      <h1
        className={`text-3xl uppercase font-medium ${lang == "en" && "tracking-widest"}`}
      >{searchResult}:
      </h1>
      <p
        className="text-sm text-hover"
      >
        {msgSearchPage}
      </p>
    </div>
  );
}
