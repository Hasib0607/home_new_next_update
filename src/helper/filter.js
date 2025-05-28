import { numberParser } from './numberParser';

export const filterByPrice = (products, min, max) => {
  return products.filter((product) => {
    const parsedPrice = numberParser(product.price);
    return parsedPrice >= min && parsedPrice <= max;
  });
};
