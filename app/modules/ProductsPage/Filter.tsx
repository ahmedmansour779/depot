"use client";

import { RootState } from "@/app/types";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import FiltersDetails from "./FiltersDetails";

export default function Filter() {
    const [show, setShow] = useState(true);
    const target = useRef(null);
    const { filter } = useSelector((state: RootState) => state.translations.translations)

    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className="flex flex-row gap-2 text-xs uppercase">
                        {filter} <IconCaretDownFilled size={15} />
                    </div>
                }
                position="bottom right"
                on={['hover', 'focus']}
            >
                <FiltersDetails />
            </Popup>
        </>
    )
}
