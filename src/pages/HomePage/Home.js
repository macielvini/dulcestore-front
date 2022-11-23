import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>Home</p>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/checkout"}>Checkout</Link>
      <Link to={"/product/:1"}>Product</Link>
    </>
  );
}
