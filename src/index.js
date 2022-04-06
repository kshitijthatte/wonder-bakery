import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeServer } from "./server";
import Mockman from "mockman-js";
import { AuthProvider } from "./contexts/authContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import { CartProvider } from "./contexts/cartContext";
import { ProductsProvider } from "./contexts/productsContext";
import { FiltersProvider } from "./contexts/filtersContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProvider>
              <ProductsProvider>
                <FiltersProvider>
                  <WishlistProvider>
                    <CartProvider>
                      <App />
                    </CartProvider>
                  </WishlistProvider>
                </FiltersProvider>
              </ProductsProvider>
            </AuthProvider>
          }
        />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
