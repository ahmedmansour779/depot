import ProductsPage from "./components/ProductsPage";
import Footer from "./design-system/components/Footer";
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
