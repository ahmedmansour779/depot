"use client";

import { logOut } from '@/app/store/slice/authSlice';
import { logIn, register } from '@/app/store/slice/formSlice';
import { RootState } from '@/app/types';
import { Tabs } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import Register from '../Register';

export default function AccountModel() {
    const data = useSelector((state: RootState) => state.user);
    const showForm = useSelector((state: RootState) => state.showForm.show);
    const { language, translations } = useSelector((state: RootState) => state.translations);
    const dispatch = useDispatch()

    // const [opened, { open, close }] = useDisclosure(false);

    const [popup, setPopup] = useState(false)


    return (
        <>
            <div style={{ display: popup == true ? "flex" : "none" }} className="fixed w-[100vw] h-[100vh] left-0 top-0 justify-center items-center bg-[#000000a6] z-[1000] ">
                <div className='p-4 bg-white w-[25vw]'>
                    <div className='flex justify-end mb-2'>
                        <IconX className='hover:cursor-pointer' onClick={() => setPopup(false)} />
                    </div>
                    <Tabs value={showForm} color="rgba(181, 181, 181, 0.32)" variant="outline" radius="xs" defaultValue="register">
                        <Tabs.List grow className='w-full flex items-center mb-4'>
                            <Tabs.Tab value="login" style={{ background: showForm == "login" ? "#f8f8f8" : "#fff" }} className='text-black w-1/2 p-4 flex items-center justify-center' onClick={() => dispatch(logIn())}>
                                {translations.login}
                            </Tabs.Tab>
                            <Tabs.Tab value="register" style={{ background: showForm == "register" ? "#f8f8f8" : "#fff" }} className='text-black w-1/2 p-4 flex items-center justify-center' onClick={() => dispatch(register())}>
                                {translations.register}
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="login" pt="xs">
                            <Login close={setPopup} />
                        </Tabs.Panel>
                        <Tabs.Panel value="register" pt="xs">
                            <Register />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
            <button>
                <div className="hover:text-hover">
                    {data.isLoggedIn && <div onClick={() => dispatch(logOut())}>{translations.logOut}</div>}
                    {data.isLoggedIn == false && <div className="hover:text-hover flex justify-between gap-1 items-center" onClick={() => setPopup(true)}>{translations.login}</div>}
                </div>
            </button>
        </>
    )
}
