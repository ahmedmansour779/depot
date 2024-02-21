"use client";

import { logOut } from '@/app/store/slice/authSlice';
import { logIn, register } from '@/app/store/slice/formSlice';
import { RootState } from '@/app/types';
import { Modal, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import Register from '../Register';

export default function AccountModel() {
    const data = useSelector((state: RootState) => state.user);
    const showForm = useSelector((state: RootState) => state.showForm.show);
    const { language, translations } = useSelector((state: RootState) => state.translations);
    const dispatch = useDispatch()

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} centered style={{ direction: language == "ar" ? "rtl" : "ltr" }}>
                <Tabs value={showForm} color="rgba(181, 181, 181, 0.32)" variant="outline" radius="xs" defaultValue="register">
                    <Tabs.List grow>
                        <Tabs.Tab value="login" onClick={() => dispatch(logIn())}>
                            {translations.login}
                        </Tabs.Tab>
                        <Tabs.Tab value="register" onClick={() => dispatch(register())}>
                            {translations.register}
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="login" pt="xs">
                        <Login close={close} />
                    </Tabs.Panel>
                    <Tabs.Panel value="register" pt="xs">
                        <Register />
                    </Tabs.Panel>
                </Tabs>
            </Modal>
            <button>
                <div className="hover:text-hover">
                    {data.isLoggedIn && <div onClick={() => dispatch(logOut())}>{translations.logOut}</div>}
                    {data.isLoggedIn == false && <div className="hover:text-hover flex justify-between gap-1 items-center" onClick={open}>{translations.login}</div>}
                </div>
            </button>
        </>
    )
}
