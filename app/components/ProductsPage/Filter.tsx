"use client";

import { IconCaretDownFilled } from "@tabler/icons-react";
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import FiltersDetails from "./FiltersDetails";

export default function Filter() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Popup
                trigger={
                    <div style={{ cursor: "pointer" }} ref={target} onClick={() => setShow(!show)} className="flex flex-row gap-2 text-xs">
                        FILTER <IconCaretDownFilled size={15} />
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
