import { useSelector } from "react-redux";
import { RootState } from "../types";

export default function page() {
    const language = useSelector((state: RootState) => state.translations.language);

    return (
        <div style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>page</div>
    )
}
