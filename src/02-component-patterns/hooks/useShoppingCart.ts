import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const producInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(producInCart.count + count, 0) > 0) {
        producInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: producInCart,
        };
      }
      // Borrar el producto del carrito si el count es 0
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
