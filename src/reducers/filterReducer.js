export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "PRICE_CHANGE":
      return { ...state, price: action.payload };

    case "CATEGORY_CHANGE":
      return { ...state, categories: action.payload };

    case "RATING_CHANGE":
      return { ...state, rating: action.payload };

    case "CLEAR_FILTERS":
      return {
        sortBy: "POPULARITY",
        price: "500",
        categories: {
          Cakes: false,
          Cookies: false,
          Doughnuts: false,
          Breads: false,
        },
        rating: "1",
      };

    default:
      throw new Error();
  }
};
