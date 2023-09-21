"use client";

import { Modal, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUser } from "@tabler/icons-react";
import Login from '../Login';
import Register from '../Register';

export default function AccountModel() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} centered>
                <Tabs color="rgba(181, 181, 181, 0.32)" variant="outline" radius="xs" defaultValue="login">
                    <Tabs.List grow>
                        <Tabs.Tab value="login">
                            LOGIN
                        </Tabs.Tab>
                        <Tabs.Tab value="register">
                            REGISTER
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="login" pt="xs">
                        <Login />
                    </Tabs.Panel>
                    <Tabs.Panel value="register" pt="xs">
                        <Register />
                    </Tabs.Panel>
                </Tabs>
            </Modal>

            <button onClick={open}>
                <div className="hover:text-hover flex justify-between gap-1 items-center">
                    <IconUser size={20} />
                    LOGIN
                </div>
            </button>
        </>
    )
}
