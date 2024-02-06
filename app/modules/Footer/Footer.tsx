import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled } from "@tabler/icons-react"

export default function Footer() {
    let currentYear = new Date().getFullYear()

    return (
        <div className="mt-8">
            <div className="w-full flex flex-row justify-center border-y-[1px] border-solid b-[#cecece33] py-20">
                <div className="wrapper">
                    <div className="max-h-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-20">
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>CUSTOMER SERVICE</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">Help & Contact Us</a>
                                <a className="hover:text-primary" href="#">Returns & Refunds</a>
                                <a className="hover:text-primary" href="#">Online Stores</a>
                                <a className="hover:text-primary" href="#">Terms & Conditions</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>COMPANY</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">What We Do</a>
                                <a className="hover:text-primary" href="#">Available Services</a>
                                <a className="hover:text-primary" href="#">Latest Posts</a>
                                <a className="hover:text-primary" href="#">FAQs</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>SOCIAL MEDIA</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">Twitter</a>
                                <a className="hover:text-primary" href="#">Instagram</a>
                                <a className="hover:text-primary" href="#">Tumblr</a>
                                <a className="hover:text-primary" href="#">Pinterest</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start flex-col gap-8">
                            <h4>PROFILE</h4>
                            <div className="flex flex-wrap justify-start flex-col gap-2 text-hover text-sm">
                                <a className="hover:text-primary" href="#">My Account</a>
                                <a className="hover:text-primary" href="#">Checkout</a>
                                <a className="hover:text-primary" href="#">Order Tracking</a>
                                <a className="hover:text-primary" href="#">Help & Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper flex md:flex-row gap-4 flex-col justify-between text-xs py-4">
                <div className="text-hover">
                    © {currentYear} Qode Interactive, All Rights Reserved
                </div>
                <div className="flex gap-4">
                    Follow Us
                    <IconBrandTwitterFilled size={15} />
                    <IconBrandInstagram size={15} />
                    <IconBrandFacebookFilled size={15} />
                </div>
            </div>
        </div>
    )
}
