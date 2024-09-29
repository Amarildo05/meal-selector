import {
  MoonOutlined,
  ShoppingCartOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Badge, Input, Modal, Switch } from "antd";

import "./header.css";
import { useContext, useState } from "react";
import { ProductContext, ThemeContext } from "../../App";
import initialProducts from "../../data/products";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function onChange(checked) {
    if (checked) {
      themeContext.setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      themeContext.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  function filterProductListOnChange(e) {
    const value = e.target.value;

    if (value === "") {
      return productContext.setProducts(initialProducts);
    }

    const filteredProducts = productContext.products.filter((item) => {
      if (item.product.name.toLowerCase().includes(value.toLowerCase()))
        return true;

      return false;
    });

    productContext.setProducts(filteredProducts);
  }

  const numberOfProductsInCart = productContext.productsInCart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const totalPrice = productContext.productsInCart.reduce(
    (acc, currentProd) => acc + currentProd.quantity * currentProd.price,
    0
  );

  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: themeContext.theme === "light" ? "#D3D3D3" : "#404040",
        color: themeContext.theme === "light" ? "#333" : "#E0E0E0",
        borderBottom:
          themeContext.theme === "light"
            ? "1px solid whitesmoke"
            : "2px solid #5e5e5e",
      }}
    >
      <img
        src={
          themeContext.theme === "light"
            ? "./fork-spoon-light.svg"
            : "./fork-spoon-dark.svg"
        }
      />
      <Input
        onChange={filterProductListOnChange}
        className="custom-input"
        style={{
          width: 300,
          padding: 12,
          backgroundColor:
            themeContext.theme === "light" ? "#FFFFFF" : "#dbdbdb",
          border:
            themeContext.theme === "light"
              ? "1px solid #E0E0E0"
              : "1px solid #333",
        }}
        placeholder="Search for a product"
        allowClear
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <Switch
          style={{
            background: themeContext.theme === "dark" ? "#4A90E2" : "#889499",
            marginLeft: "5px",
          }}
          checkedChildren={
            <SunOutlined style={{ color: "#FFFFFF", fontWeight: "bold" }} />
          }
          unCheckedChildren={
            <MoonOutlined style={{ color: "#FFFFFF", fontWeight: "bold" }} />
          }
          defaultChecked={themeContext.theme === "light"}
          onChange={onChange}
        />

        <Badge color="hwb(205 6% 9%)" count={numberOfProductsInCart}>
          <ShoppingCartOutlined
            onClick={() => setIsModalOpen(true)}
            style={{
              fontSize: 30,
              color: themeContext.theme === "dark" ? "white" : "black",
            }}
          />
        </Badge>

        <Modal
          title="Shopping Cart"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[]}
        >
          {productContext.productsInCart.map((prod) => {
            return (
              <li key={prod.id}>
                {prod.name} x {prod.quantity} {" ----- "}
                {prod.quantity * prod.price}L
              </li>
            );
          })}
          <br />
          <hr />
          Total: {totalPrice}L
        </Modal>
      </div>
    </header>
  );
}