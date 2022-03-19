import "./styles.css";
import FiltersSection from "./FiltersSection";
import ProductCard from "./ProductCard";

const products = Array.from({ length: 10 }, (_, index) => index + 1);

const ProductsPage = () => {
  return (
    <main className="nav-fixed-adjust products-container">
      <FiltersSection />
      <section className="products">
        <div className="text-md">Cakes</div>
        <div className="grid grid-col-4">
          {products.map(product => (
            <ProductCard />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
