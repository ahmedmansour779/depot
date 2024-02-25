import { RootState } from "@/app/types"
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled } from "@tabler/icons-react"
import { useSelector } from "react-redux"

export default function Footer() {
    let currentYear = new Date().getFullYear()
    const lang = useSelector((state: RootState) => state.translations.language)
    const { customerService, profile, helpContactUs, returnsRefunds, termCondition, compony, whatWeDo, availableService, latestPost, faqs, socialMedia, twitter, instagram, faceBook, gitHub, myAccount, checkout, orderTracking, helpSupport, msgFooter, followUsWord } = useSelector((state: RootState) => state.translations.translations)
    return (
        <div className="mt-8" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="w-full flex flex-row justify-center border-y-[1px] border-solid b-[#cecece33] py-20">
                <div className="wrapper">
                    <div className="max-h-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-20">
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>{customerService}</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">{helpContactUs}</a>
                                <a className="hover:text-primary" href="#">{returnsRefunds}</a>
                                <a className="hover:text-primary" href="#">{termCondition}</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>{compony}</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">{whatWeDo}</a>
                                <a className="hover:text-primary" href="#">{availableService}</a>
                                <a className="hover:text-primary" href="#">{latestPost}</a>
                                <a className="hover:text-primary" href="#">{faqs}</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>{socialMedia}</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" target="_blank" href="https://twitter.com/ahmedma66567002">{twitter}</a>
                                <a className="hover:text-primary" target="_blank" href="https://www.instagram.com/ahmedmansour2992002">{instagram}</a>
                                <a className="hover:text-primary" target="_blank" href="https://www.facebook.com/ahmed.mask.184">{faceBook}</a>
                                <a className="hover:text-primary" target="_blank" href="https://github.com/ahmedmansour779">{gitHub}</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>{profile}</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">{myAccount}</a>
                                <a className="hover:text-primary" href="#">{checkout}</a>
                                <a className="hover:text-primary" href="#">{orderTracking}</a>
                                <a className="hover:text-primary" href="#">{helpSupport}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper flex md:flex-row gap-4 flex-col justify-between text-xs py-4">
                <div className="text-hover">
                    © {currentYear} {msgFooter}
                </div>
                <div className="flex gap-4">
                    {followUsWord}
                    <IconBrandTwitterFilled size={15} />
                    <IconBrandInstagram size={15} />
                    <IconBrandFacebookFilled size={15} />
                </div>
            </div>
        </div>
    )
}
