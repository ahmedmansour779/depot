import Footer from "../modules/Footer";
import BrandsWhatWeDo from "../modules/whatWeDo/BrandsWhatWeDo";
import CartsWhatWeDo from "../modules/whatWeDo/CartsWhatWeDo";
import TextWhatWeDo from "../modules/whatWeDo/TextWhatWeDo";

export default function page() {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-12">
                <TextWhatWeDo />
                <CartsWhatWeDo />
                <BrandsWhatWeDo />
            </div>
            <Footer />
        </>
    )
}
