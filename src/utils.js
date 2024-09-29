import products from "./data/products";

export function getProductCategories() {
  const categories = products.map((item) => item.category);

  return ["All", ...new Set(categories)];
}
