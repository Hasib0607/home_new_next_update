import { numberParser } from './numberParser';

export const filterByPrice = (products, min, max, sort = 'desc') => {
  return products
    .filter((product) => {
      const parsedPrice = numberParser(product.price);
      return parsedPrice >= min && parsedPrice <= max;
    })
    .sort((a, b) => {
      const priceA = numberParser(a.price);
      const priceB = numberParser(b.price);
      switch (sort) {
        case 'desc':
          return priceB - priceA;
        case 'asc':
          return priceA - priceB;
        default:
          return priceB - priceA;
      }
    });
};
