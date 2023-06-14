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
import { selectLoggedInUser } from "./features/auth/authSlice";
import Logout from "./features/auth/Logout";
// admin routes
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import AdminProductDetails from "./features/admin/components/AdminProductDetails";
import UserProfilePage from "./pages/UserProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProductForm from "./features/admin/components/ProductForm";
import AdminProductDetailPage from "./pages/AdminProductFormPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
   
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user])
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
          <Route path="/order-success/:id" element={<OrderSccessPage/>}/>
         
          {/* user Routes */}
          <Route path="/orders" element={<Protected><UserOrdersPage/></Protected>}/>
          <Route path="/profile" element={<Protected><UserProfilePage/></Protected>}/>
          {/* admin Routes */}
          <Route path="/admin" element={<ProtectedAdmin><Home /></ProtectedAdmin>} />
          <Route path="/admin/products/:id" element={<ProtectedAdmin><AdminProductDetailPage /></ProtectedAdmin>} />
          <Route path="/admin/product-form/:id" element={<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>} />


          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
