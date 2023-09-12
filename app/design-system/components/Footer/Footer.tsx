
export default function Footer() {
    return (
        <div className="container mx-auto">
            <div className="max-h-full grid grid-cols-4 gap-16">
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
    )
}
