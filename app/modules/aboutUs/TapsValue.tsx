"use client";

import { RootState } from "@/app/types";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TapsValue() {
    const { msgTapAboutUs, aboutUs, services, history, msgTapHistory, msgTapService } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)
    const [selected, setSelected] = useState<"aboutUs" | "services" | "history">("aboutUs")

    return (
        <Tabs color="rgba(0, 0, 0, 1)" variant="pills" defaultValue="aboutUs" className="flex flex-col gap-12">
            <Tabs.List className="flex gap-4 flex-wrap sm:flex-nowrap">
                <Tabs.Tab
                    onClick={() => setSelected("aboutUs")} style={{ color: selected == "aboutUs" ? "#fff" : "#000", background: selected == "aboutUs" ? "#000" : "#fff" }} value="aboutUs" className={`uppercase text-xs border-solid border-[#e8e8e8] border-[1px] px-8 py-4 font-medium ${lang == "en" && "tracking-[2px]"}  hover:!text-white hover:!bg-black transition ease-in-out duration-300 md:w-auto sm:w-[fill-available] w-full`}>
                    {aboutUs}
                </Tabs.Tab>
                <Tabs.Tab onClick={() => setSelected("services")} style={{ color: selected == "services" ? "#fff" : "#000", background: selected == "services" ? "#000" : "#fff" }} value="services" className={`uppercase text-xs border-solid border-[#e8e8e8] border-[1px] px-8 py-4 font-medium ${lang == "en" && "tracking-[2px]"}  hover:!text-white hover:!bg-black transition ease-in-out duration-300 md:w-auto sm:w-[fill-available] w-full`}>
                    {services}
                </Tabs.Tab>
                <Tabs.Tab onClick={() => setSelected("history")} style={{ color: selected == "history" ? "#fff" : "#000", background: selected == "history" ? "#000" : "#fff" }} value="history" className={`uppercase text-xs border-solid border-[#e8e8e8] border-[1px] px-8 py-4 font-medium ${lang == "en" && "tracking-[2px]"}  hover:!text-white hover:!bg-black transition ease-in-out duration-300 md:w-auto sm:w-[fill-available] w-full`}>
                    {history}
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="aboutUs" className={`text-sm leading-7 text-[#929292] ${lang == "en" && "tracking-[2px]"}`}>
                {msgTapAboutUs}
            </Tabs.Panel>

            <Tabs.Panel value="services" className={`text-sm leading-7 text-[#929292] ${lang == "en" && "tracking-[2px]"}`}>
                {msgTapService}
            </Tabs.Panel>

            <Tabs.Panel value="history" className={`text-sm leading-7 text-[#929292] ${lang == "en" && "tracking-[2px]"}`}>
                {msgTapHistory}
            </Tabs.Panel>
        </Tabs>
    )
}
