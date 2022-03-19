import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import FiltersSection from "./FiltersSection";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategoies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const data = response.data.products;
        setProducts(data);
        setCategoies(
          data.reduce(
            (acc, curr) =>
              acc.includes(curr.categoryName)
                ? acc
                : [...acc, curr.categoryName],
            []
          )
        );
      } catch (error) {
        console.error("ERROR", error);
      }
    })();
  }, []);

  return (
    <main className="nav-fixed-adjust products-container">
      <FiltersSection categories={categories} />
      <section className="products">
        <div className="grid grid-col-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
