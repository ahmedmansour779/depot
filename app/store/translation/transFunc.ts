import { RootState, keyObj } from "@/app/types";
import { useSelector } from "react-redux";

export const useTrans = (word: keyObj) => {
  const language2 = useSelector((state: RootState) => state.translations.translations);
  return language2[word]
}



