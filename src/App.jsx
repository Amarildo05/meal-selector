import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import { createContext, useEffect, useState } from "react";
import initialProducts from "./data/products";

export const ProductContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  // const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const isDarkMode = getCurrentTheme();
  const defaultTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
  const [theme, setTheme] = useState(defaultTheme);

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const defaultProductsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];

  const [productsInCart, setProductsInCart] = useState(defaultProductsInCart);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ProductContext.Provider
          value={{
            products,
            setProducts,
            selectedCategory,
            setSelectedCategory,
            productsInCart,
            setProductsInCart,
          }}
        >
          <RouterProvider router={router} />
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}