import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext(null);

const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }) => {
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
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductsProvider, useProducts };
