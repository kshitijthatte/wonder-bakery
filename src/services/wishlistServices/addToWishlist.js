import axios from "axios";

const addToWishlist = async (token, product, setWishlist) => {
  const response = await axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );
  const wishlist = response.data.wishlist;
  setWishlist(wishlist);
};
export { addToWishlist };
