import axios from "axios";

const removeFromCart = async (token, productID) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productID}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data.cart;
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
export { removeFromCart };
