const getRatingFilteredProducts = (products, newRating) =>
  products.filter(({ rating }) => Number(rating) >= Number(newRating));

export { getRatingFilteredProducts };
