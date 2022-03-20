import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./styles.css";
import FiltersSection from "./FiltersSection";
import ProductCard from "./ProductCard";
import { filterReducer } from "../../reducers/filterReducer";
import {
  getCategoryFilteredProducts,
  getPriceFilteredProducts,
  getRatingFilteredProducts,
  getSortedProducts,
} from "../../helpers/filterFunctions";

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
