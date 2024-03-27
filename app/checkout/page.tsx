import BillingDetailsSection from "../modules/Checkout/BillingDetailsSection";
import OrderDetailsSection from "../modules/Checkout/OrderDetailsSection";
import TitleCheckoutPage from "../modules/Checkout/TitleCheckoutPage";
import Footer from "../modules/Footer";

export default function page() {
    return (
        <>
            <TitleCheckoutPage />
            <OrderDetailsSection />
            <div className="container mx-auto pb-8">
                <BillingDetailsSection />
            </div>
            <Footer />
        </>
    )
}
