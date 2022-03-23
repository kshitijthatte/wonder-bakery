import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./authContext";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },
          });
          const wishlist = response.data.wishlist;
          setWishlist(wishlist);
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setWishlist([]);
    }
  }, [isAuthenticated, token]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
