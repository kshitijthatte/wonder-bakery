import "./styles.css";
import FiltersSection from "./FiltersSection";
import ProductCard from "./ProductCard";
import {
  getCategoryFilteredProducts,
  getPriceFilteredProducts,
  getRatingFilteredProducts,
  getSortedProducts,
} from "../../utils/filterFunctions";
import { useProducts } from "../../contexts/productsContext";
import { useFilters } from "../../contexts/filtersContext";

const ProductsPage = () => {
  const { products } = useProducts();
  const { filters } = useFilters();
  const { sortBy, price, categories: categoriesState, rating } = filters;
  
  const categoryfilteredProducts = getCategoryFilteredProducts(
    products,
    categoriesState
  );
  const pricefilteredProducts = getPriceFilteredProducts(
    categoryfilteredProducts,
    Number(price)
  );

  const ratingFilteredProducts = getRatingFilteredProducts(
    pricefilteredProducts,
    rating
  );
  const sortedProducts = getSortedProducts(ratingFilteredProducts, sortBy);

  return (
    <main className="nav-fixed-adjust products-container">
      <FiltersSection />
      <section className="products">
        <div className="grid grid-col-4">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-md">No Matches Found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
