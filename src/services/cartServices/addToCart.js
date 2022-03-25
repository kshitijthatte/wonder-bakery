import axios from "axios";

const addToCart = async (token, product) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data.cart;
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
export { addToCart };
