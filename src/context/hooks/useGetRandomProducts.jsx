import { useMemo } from "react";

export const useGetRandomProducts = (products = [], count = 4) => {
  const randomProducts = useMemo(() => {
    if (!Array.isArray(products) || products.length === 0) return [];

    // eslint-disable-next-line react-hooks/purity
    const shuffled = [...products].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, count);
  }, [products, count]);

  return randomProducts;
};
