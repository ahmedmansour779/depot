"use client";

import { IconHeart, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../shared/logo.png";
import Register from "../Register";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import Elements from "./popup/Elements";
import Home from "./popup/Home";
import Pages from "./popup/Pages";
import Shop from "./popup/Shop";

export default function Header() {

    return (
        <>
            <div className="wrapper">
                <div className="flex justify-between w-full py-14 items-center">
                    <div style={{ letterSpacing: "2px" }} className="header flex justify-between gap-10">
                        <Link href="/">
                            <Home />
                        </Link>
                        <Link href="/">
                            <Shop />
                        </Link>
                        <Link href="/">
                            <Pages />
                        </Link>
                        <Link href="/">
                            <Elements />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image src={logo} height={20} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex justify-between gap-5 text-xs items-center header-right">
                        <div className="flex justify-between gap-1 text-xs">
                            <div className="hover:text-hover" >
                                CART
                            </div>
                            <div className="text-hover">
                                ($0)
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 hover:text-hover w-full items-center">
                            <IconHeart size={20} />
                            <div className="text-hover">
                                (2)
                            </div>
                        </div>
                        <div>
                            <Register />
                        </div>
                        <div className="hover:text-hover">
                            <IconSearch size={20} />
                        </div>
                        <Sidebar />
                    </div>
                    <Menu />
                </div>
            </div>
        </>

    )
}
