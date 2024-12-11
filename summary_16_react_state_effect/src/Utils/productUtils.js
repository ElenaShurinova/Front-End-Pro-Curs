export function filterProducts(products, filters) {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      if (filters.name && !product.title.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }
      if (filters.priceFrom && product.price < parseFloat(filters.priceFrom)) {
        return false;
      }
      if (filters.priceTo && product.price > parseFloat(filters.priceTo)) {
        return false;
      }
      return true;
    });
  }