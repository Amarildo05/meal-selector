import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import ProductList from "../components/ProductList/ProductList";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Categories />
      <ProductList />
    </div>
  );
}