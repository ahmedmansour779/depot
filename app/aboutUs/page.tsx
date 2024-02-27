import Footer from "../modules/Footer";
import AboutSwiperSection from "../modules/aboutUs/AboutSwiperSection";
import AboutText from "../modules/aboutUs/AboutText";
import AboutTitle from "../modules/aboutUs/AboutTitle";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <AboutTitle />
        <AboutText />
        <AboutSwiperSection />
      </div>
      <Footer />
    </>
  );
}
