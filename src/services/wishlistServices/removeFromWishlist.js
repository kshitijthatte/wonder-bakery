import axios from "axios";

const removeFromWishlist = async (token, productID, setWishlist) => {
  const response = await axios.delete(`/api/user/wishlist/${productID}`, {
    headers: {
      authorization: token,
    },
  });
  const wishlist = response.data.wishlist;
  setWishlist(wishlist);
};
export { removeFromWishlist };
