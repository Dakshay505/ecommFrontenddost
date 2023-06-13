import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login_signup/Login";
import SignupPage from "./pages/login_signup/SignUp";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckOut";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
