import { setLanguage } from "@/app/store/translation/translationSlice";
import { RootState } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";

export default function TranslationSideBar() {
  const lang = useSelector((state: RootState) => state.translations.language)
  const { language } = useSelector((state: RootState) => state.translations.translations)
  const dispatch = useDispatch()

  const arabic = () => {
    dispatch(setLanguage("ar"))
  }

  const english = () => {
    dispatch(setLanguage("en"))
  }

  return (
    <p className="hover:cursor-pointer" onClick={lang == "ar" ? english : arabic}>
      {language}
    </p>
  );
}
