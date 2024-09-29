import { useContext } from "react";
import { getProductCategories } from "../../utils";
import initialProducts from "../../data/products";
import "./categories.css";
import { ProductContext, ThemeContext } from "../../App";

export default function Categories() {
  const categories = getProductCategories();

  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  const { selectedCategory } = productContext;

  function handleSelectCategory(category) {
    productContext.setSelectedCategory(category);

    if (category === "All") return productContext.setProducts(initialProducts);

    const filteredProducts = initialProducts.filter((item) => {
      if (item.category === category) return true;

      return false;
    });
    productContext.setProducts(filteredProducts);
  }

  return (
    <div
      className="categories"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#404040" : "#D3D3D3",
        color: themeContext.theme === "dark" ? "white" : "black",
      }}
    >
      {categories.map((category) => {
        return (
          <span
            onClick={() => handleSelectCategory(category)}
            style={{
              color: selectedCategory === category 
                ? (themeContext.theme === "dark" ? "#4A90E2" : "#000000") 
                : (themeContext.theme === "dark" ? "gray" : "darkgray"),
            }}
            key={category}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}