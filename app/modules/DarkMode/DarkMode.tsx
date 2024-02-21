import { darkMode, lightMode } from "@/app/store/darkMode/themeSlice";
import { RootState } from "@/app/types";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

export default function DarkMode() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch();

  return (
    <div className="cursor-pointer hover:text-hover" >
      {
        mode == "light" ?
          <IconMoonFilled onClick={() => dispatch(darkMode())} /> :
          <IconSunFilled onClick={() => dispatch(lightMode())} />
      }
    </div>
  );
}
