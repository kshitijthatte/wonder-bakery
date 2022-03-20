const getPriceFilteredProducts = (products, maxPrice) =>
  products.filter(({ price }) => price <= maxPrice);

export { getPriceFilteredProducts };
