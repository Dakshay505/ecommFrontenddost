import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login_signup/Login";
import SignupPage from "./pages/login_signup/SignUp";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckOut";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Protected> <Route path="/cart" element={<CartPage />} /></Protected>
          <Protected><Route path="/checkout" element={<Checkout />} /></Protected>
          <Protected><Route path="/products/:id" element={<ProductDetailPage />} /></Protected>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
