"use client";

import { dataCartsWhatWeDo } from "@/app/data/whatWeDo";
import { RootState } from "@/app/types";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function CartsWhatWeDo() {
    const {
        strategyAndTiming,
        msgStrategyAndTiming,
        socialIntegration,
        msgSocialIntegration,
        shoppingExperience,
        msgShoppingExperience
    } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "ar" ? "rtl" : "ltr"
            }}
            className="flex gap-8 bigTablet:flex-nowrap flex-wrap">
            {
                dataCartsWhatWeDo.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-8">
                            <Image
                                width={100}
                                height={100}
                                src={item.image}
                                alt={item.title}
                                className="w-full bigTablet:h-60" />
                            {
                                index == 0 ?
                                    <div className="flex flex-col gap-2">
                                        <h6
                                            className={`font-semibold ${lang == "en" && "tracking-wider"} text-sm`}
                                        >{strategyAndTiming}</h6>
                                        <p
                                            className="text-hover leading-5 font-normal"
                                        >{msgStrategyAndTiming}</p>
                                    </div> :
                                    index == 1 ?
                                        <div className="flex flex-col gap-2">
                                            <h6
                                                className={`font-semibold ${lang == "en" && "tracking-wider"} text-sm`}
                                            >{socialIntegration}</h6>
                                            <p
                                                className="text-hover leading-5 font-normal"
                                            >{msgSocialIntegration}</p>
                                        </div> :
                                        <div className="flex flex-col gap-2">
                                            <h6
                                                className={`font-semibold ${lang == "en" && "tracking-wider"} text-sm`}
                                            >{shoppingExperience}</h6>
                                            <p
                                                className="text-hover leading-5 font-normal"
                                            >{msgShoppingExperience}</p>
                                        </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
