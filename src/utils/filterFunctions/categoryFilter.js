const getCategoryFilteredProducts = (products, categories) => {
  if (Object.values(categories).every(category => !category)) {
    return products;
  }
  const filteredProducts = [];
  for (let category in categories) {
    if (categories[category]) {
      filteredProducts.push(
        ...products.filter(({ categoryName }) => categoryName === category)
      );
    }
  }
  return filteredProducts;
};

export { getCategoryFilteredProducts };
