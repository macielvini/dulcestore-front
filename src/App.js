import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/css/globalStyles";
import UserStyles from "./assets/css/userStyles";
import Home from "./pages/HomePage/Home";
import Cart from "./pages/CartPage/Cart";
import Checkout from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { AuthProvider } from "./context/authContext";
import SignIn from "./pages/SignInPage/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <UserStyles />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
