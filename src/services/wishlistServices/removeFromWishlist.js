import axios from "axios";

const removeFromWishlist = async (token, productID) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productID}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data.wishlist;
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
export { removeFromWishlist };
