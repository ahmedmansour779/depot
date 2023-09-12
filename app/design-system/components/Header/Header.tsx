
import { IconHeart, IconSearch, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../../shared/logo.png";
import Sidebar from "../Sidebar";

export default function Header() {


    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between w-full py-4 items-center">
                    <div className="flex justify-between gap-10">
                        <div className="hover:text-hover text-xs">HOME</div>
                        <div className="hover:text-hover text-xs">SHOP</div>
                        <div className="hover:text-hover text-xs">PAGES</div>
                        <div className="hover:text-hover text-xs">ELEMENTS</div>
                    </div>
                    <div>
                        <Image src={logo} height={20} alt="logo" />
                    </div>
                    <div className="flex justify-between gap-5 text-xs items-center">
                        <div className="flex justify-between gap-1 text-xs">
                            <div className="hover:text-hover" >
                                CART
                            </div>
                            <div className="text-hover">
                                ($0)
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 hover:text-hover w-full py-10 items-center">
                            <IconHeart size={20} />
                            <div className="text-hover">
                                (2)
                            </div>
                        </div>
                        <div className="hover:text-hover flex justify-between gap-1 items-center">
                            <IconUser size={20} />
                            LOGIN
                        </div>
                        <div className="hover:text-hover">
                            <IconSearch size={20} />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>

    )
}
