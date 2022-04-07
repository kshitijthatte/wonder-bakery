import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./authContext";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          const cart = response.data.cart;
          setCart(cart);
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setCart([]);
    }
  }, [isAuthenticated, token]);

  const getTotalCartPrice = cart.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  return (
    <CartContext.Provider value={{ cart, getTotalCartPrice, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
