import axios from "axios";

const updateQtyInCart = async (token, action, productID) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${productID}`,
      {
        action: {
          type: action,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data.cart;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
export { updateQtyInCart };
