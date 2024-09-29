import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Checkout() {
  const value = useContext(ThemeContext);
  return <div>Checkout</div>;
}