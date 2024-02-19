"use client";

import "@/app/globals.css";
import { useTrans } from "@/app/store/translation/transFunc";
import { RootState } from "@/app/types";
import { IconHeart, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import logo from "../../shared/logo.png";
import AccountModal from "../AccountModal";
import Sidebar from "../Sidebar";
import Translation from "../Translation";
import Menu from "./Menu";

export default function Header() {

    const user = useSelector((state: RootState) => state.user)
    const language = useSelector((state: RootState) => state.translations.language);

    return (
        <div className="wrapper" style={{
            direction: language === 'ar' ? 'rtl' : 'ltr', fontFamily: language === "ar" ? "Cairo, sans-serif" : "inherit", letterSpacing: language === "ar" ? "0px" : "2px"
        }}>
            <div className="flex justify-between w-full py-14 items-center">
                <div className="header flex justify-between gap-10">
                    <Link href="/" className={`hover:text-hover text-xs`}>
                        {useTrans("home")}
                    </Link>
                    <Link href="/products" className={`hover:text-hover text-xs`}>
                        {useTrans("products")}
                    </Link>
                    <Link href="/washList" className={`hover:text-hover text-xs`}>
                        {useTrans("washList")}
                    </Link>
                    {
                        user.isAdmin && <Link href="/ControlBoard" className={`hover:text-hover text-xs`}>{useTrans
                            ("controlBoard")}</Link>
                    }
                    {
                        !user.isAdmin && user.isLoggedIn && <Link href="/profile" className={`hover:text-hover text-xs`}>{useTrans("profile")}</Link>
                    }
                </div>
                <div>
                    <Link href="/">
                        <Image src={logo} height={20} alt="logo" />
                    </Link>
                </div>
                <div className="flex justify-between gap-5 text-xs items-center header-right">
                    <div className="flex justify-between gap-1 text-xs">
                        <div className="hover:text-hover" >
                            {useTrans("cart")}
                        </div>
                        <div className="text-hover">
                            ($0)
                        </div>
                    </div>
                    <div className="flex justify-between hover:text-hover w-full items-center">
                        <IconHeart size={20} />
                        <div className="text-hover">
                            (2)
                        </div>
                    </div>
                    <div>
                        <AccountModal />
                    </div>
                    <div className="hover:text-hover">
                        <IconSearch size={20} />
                    </div>
                    <Translation />
                    <Sidebar />
                </div>
                <Menu />
            </div>
        </div>
    )
}
