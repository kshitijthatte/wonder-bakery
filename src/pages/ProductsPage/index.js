import { useReducer } from "react";
import "./styles.css";
import FiltersSection from "./FiltersSection";
import ProductCard from "./ProductCard";
import { filterReducer } from "../../reducers/filterReducer";
import {
  getCategoryFilteredProducts,
  getPriceFilteredProducts,
  getRatingFilteredProducts,
  getSortedProducts,
} from "../../utils/filterFunctions";
import { useProducts } from "../../contexts/productsContext";

const ProductsPage = () => {
  const { products, categories } = useProducts();

  const [filtersState, filtersDispatch] = useReducer(filterReducer, {
    sortBy: "POPULARITY",
    price: "500",
    categories: {
      Cakes: false,
      Cookies: false,
      Doughnuts: false,
      Breads: false,
    },
    rating: "1",
  });
  const { sortBy, price, categories: categoriesState, rating } = filtersState;
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
      <FiltersSection
        categories={categories}
        filtersState={filtersState}
        filtersDispatch={filtersDispatch}
      />
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
