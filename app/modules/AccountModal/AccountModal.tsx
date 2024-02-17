"use client";

import { logOut } from '@/app/store/slice/authSlice';
import { logIn, register } from '@/app/store/slice/formSlice';
import { hidden } from '@/app/store/slice/showPopupSlice';
import { RootState } from '@/app/types';
import { Modal, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUser } from "@tabler/icons-react";
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import Register from '../Register';

export default function AccountModel() {
    const data = useSelector((state: RootState) => state.user);
    const showForm = useSelector((state: RootState) => state.showForm.show);
    const showPopup = useSelector((state: RootState) => state.showPopup.show);
    const dispatch = useDispatch()
    const hiddenModel = dispatch(hidden())

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} centered>
                <Tabs value={showForm} color="rgba(181, 181, 181, 0.32)" variant="outline" radius="xs" defaultValue="register">
                    <Tabs.List grow>
                        <Tabs.Tab value="login" onClick={() => dispatch(logIn())}>
                            LOGIN
                        </Tabs.Tab>
                        <Tabs.Tab value="register" onClick={() => dispatch(register())}>
                            REGISTER
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
                    {data.isLoggedIn && <div onClick={() => dispatch(logOut())}>LOGOUT</div>}
                    {data.isLoggedIn == false && <div className="hover:text-hover flex justify-between gap-1 items-center" onClick={open}><IconUser size={20} /> LOGIN</div>}
                </div>
            </button>
        </>
    )
}
