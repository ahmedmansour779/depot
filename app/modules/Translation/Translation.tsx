import { setLanguage } from "@/app/store/translation/translationSlice";
import { RootState } from "@/app/types";
import { IconLanguage } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

export default function Translation() {
  const language = useSelector((state: RootState) => state.translations.language)
  const dispatch = useDispatch()

  const arabic = () => {
    dispatch(setLanguage("ar"))
  }

  const english = () => {
    dispatch(setLanguage("en"))
  }

  return (
    <div className="cursor-pointer hover:text-hover" onClick={language == "ar" ? english : arabic}>
      <IconLanguage />
    </div>
  );
}
