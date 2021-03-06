import axios from "axios";

const addToWishlist = async (token, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data.wishlist;
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
export { addToWishlist };
