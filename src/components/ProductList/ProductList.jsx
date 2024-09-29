import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";

import "./productList.css";
import { ProductContext, ThemeContext } from "../../App";
import { FloatButton } from "antd";

export default function ProductList() {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  return (
    <section
      className="productList"
      style={{
        background: themeContext?.theme === "dark" ? "gray" : "whitesmoke",
        minHeight: "100vh",
      }}
    >
      {productContext.products.map((item) => {
        return <ProductCard key={item.product.id} product={item.product} />;
      })}

      {productContext.products.length == 0 ? (
        <div>
          <p
            style={{
              color: themeContext?.theme === "dark" ? "white" : "black",
              width: "100%",
              margin: "15px auto",
              fontSize: "large",
              textAlign: "center",
            }}
          >
            We’re sorry, but no products were found for your search!
          </p>
          <img width="380px" height="auto" src={"./empty-cart.png"} />
        </div>
      ) : null}

      <FloatButton.BackTop />
    </section>
  );
}