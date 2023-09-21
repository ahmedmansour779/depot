import Footer from "./design-system/components/Footer";
import ProductsPage from "./design-system/components/Products page";
import Hero from "./hero/Hero";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <hr />
        <ProductsPage />
      </div>
      <Footer />
    </>
  )
}
