import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login_signup/Login";
import SignupPage from "./pages/login_signup/SignUp";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckOut";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/Protected";
import NotFound from "./pages/404"
import OrderSccessPage from "./pages/OrderSccessPage";
import UserOrders from './features/user/components/UserOrders';
import UserOrdersPage from './pages/UserOrdersPage';
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { getUserAsync, selectLoggedInUser } from "./features/auth/authSlice";
import Logout from "./features/auth/Logout";
// admin routes
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import AdminProductDetails from "./features/admin/components/AdminProductDetails";
import UserProfilePage from "./pages/UserProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProductForm from "./features/admin/components/ProductForm";
import AdminProductDetailPage from "./pages/AdminProductFormPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminHome from "./pages/home/AdminHome";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import Stripe from "./pages/stripe";
import { fetchLoggedInUserOrderAsync } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  
    useEffect(()=>{
        console.log("hiii")
        dispatch(getUserAsync());
    },[dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          <Route path="/cart" element={<Protected> <CartPage /></Protected>} />
          <Route path="/checkout" element={<Protected><Checkout /></Protected>} />
          <Route path="/products/:id" element={<Protected><ProductDetailPage /></Protected>} />
          <Route path="/order-success/:id" element={<Protected><OrderSccessPage/></Protected>}/>
          <Route path="/stripe-checkout" element={<Protected><Stripe/></Protected>}/>
         
          {/* user Routes */}
          <Route path="/orders" element={<Protected><UserOrdersPage/></Protected>}/>
          <Route path="/profile" element={<Protected><UserProfilePage/></Protected>}/>
          {/* admin Routes */}
          <Route path="/admin" element={<ProtectedAdmin><AdminHome /></ProtectedAdmin>} />
          <Route path="/admin/products/:id" element={<ProtectedAdmin><AdminProductDetailPage /></ProtectedAdmin>} />
          <Route path="/admin/product-form" element={<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>} />
          <Route path="/admin/product-form/edit/:id" element={<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>} />
          <Route  path= '/admin/orders'  element={<ProtectedAdmin><AdminOrdersPage/></ProtectedAdmin>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
