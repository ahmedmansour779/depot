"use client";

import "@/app/style/style.css";
import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export type TitleSearchPageProps = {
  params: string
};
export default function TitleSearchPage(props: TitleSearchPageProps) {
  const lang = useSelector((state: RootState) => state.translations.language)
  const searchValue = props.params

  return (
    <div
      style={{
        fontFamily: lang == "ar" ? "Cairo, sans-serif" : "inherit"
      }}
      className="wishList-title-image title-image flex items-center justify-center h-[45vh]">
      <h1 className={`text-white text-4xl font-medium  ${lang == "en" && "tracking-[0.5rem]"} uppercase`}>
        SEARCH RESULTS FOR: {searchValue}
      </h1>
    </div>
  );
}
