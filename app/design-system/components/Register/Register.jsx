"use client";

import { IconUser } from "@tabler/icons-react";
import { useState } from "react";
import Popup from 'reactjs-popup';

export default function Register() {

    const [open, setOpen] = useState(true)

    const logIn = () => {
        setOpen(true)
    }
    const register = () => {
        setOpen(false)
    }

    return (
        <>
            <Popup
                trigger={<button className="button">
                    <div>
                        <div className="hover:text-hover flex justify-between gap-1 items-center">
                            <IconUser size={20} />
                            LOGIN
                        </div>
                    </div>
                </button>}
                modal
                nested
            >
                {close => (
                    <div>
                        <div onClick={close} className="modal bg-black opacity-50 fixed w-full h-full top-0 left-0 z-10">
                        </div>
                        <div className="bg-white text-black opacity-100 absolute w-fit h-fit -translate-x-1/2 -translate-y-1/2 z-50 px-8 pb-3 pt-4">
                            <div className="flex flex-row justify-around mb-12">
                                <button onClick={() => logIn()}>
                                    LOGIN
                                </button>
                                <button onClick={() => register()}>
                                    REGISTER
                                </button>
                            </div>
                            {open ?
                                <div>
                                    <div className="flex flex-col gap-4 w-60">
                                        <input type="text" placeholder="User Name" className="p-4 text-xs" />
                                        <input type="password" placeholder="Password" className="p-4 text-xs" />
                                    </div>
                                    <div className="flex flex-row gap-2 text-hover text-s mb-8">
                                        <input type="checkbox" />
                                        <label>Remember me</label>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <a href="#" className="text-xs text-hover hover:text-primary">Lost Your password?</a>
                                        <button className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
                                            LOGIN
                                        </button>
                                    </div>
                                </div> :
                                <div>
                                    <div className="flex flex-col gap-4 w-60">
                                        <input type="text" placeholder="User Name" className="p-4 text-xs" />
                                        <input type="email" placeholder="Email" className="p-4 text-xs" />
                                        <input type="password" placeholder="Password" className="p-4 text-xs" />
                                        <input type="password" placeholder="Repeat Password" className="p-4 text-xs" />
                                    </div>
                                    <p className="text-hover text-sm leading-relaxed my-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-black">privacy policy.</a></p>
                                    <button className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
                                        REGISTER
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}
