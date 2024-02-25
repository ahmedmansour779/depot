"use client";

import "@/app/globals.css";
import { RootState } from "@/app/types";
import { IconHeart, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import logo from "../../shared/logo.png";
import AccountModal from "../AccountModal";
import DarkMode from "../DarkMode";
import Sidebar from "../Sidebar";
import Translation from "../Translation";
import Menu from "./Menu";
import Pages from "./popup/Pages";

export default function Header() {

    const user = useSelector((state: RootState) => state.user)
    const { language, translations } = useSelector((state: RootState) => state.translations);

    return (
        <div className="wrapper" style={{
            direction: language === 'ar' ? 'rtl' : 'ltr', fontFamily: language === "ar" ? "Cairo, sans-serif" : "inherit", letterSpacing: language === "ar" ? "0px" : "2px"
        }}>
            <div className="flex justify-between w-full py-14 items-center">
                <div className="header flex justify-between gap-10">
                    <Link href="/" className={`hover:text-hover text-xs`}>
                        {translations.home}
                    </Link>
                    <Pages />
                    {
                        user.isAdmin && <Link href="/ControlBoard" className={`hover:text-hover text-xs`}>{translations.controlBoard}</Link>
                    }
                    {
                        !user.isAdmin && user.isLoggedIn && <Link href="/profile" className={`hover:text-hover text-xs`}>{translations.profile}</Link>
                    }
                </div>
                <div>
                    <Link href="/">
                        <Image src={logo} height={20} alt="logo" />
                    </Link>
                </div>
                <div className="flex justify-between gap-4 text-xs items-center header-right">
                    <div className="flex justify-between gap-1 text-xs">
                        <div className="hover:text-hover" >
                            {translations.cart}
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
                    <DarkMode />
                    <Translation />
                    <Sidebar />
                </div>
                <Menu />
            </div>
        </div>
    )
}
