import React from 'react'
import NavBar from '../../features/navbar/Navbar'
import ProductList from '../../features/productList/ProductList'
import { useDispatch } from 'react-redux'
import { fetchItemsByUserIdAsync } from '../../features/cart/cartSlice'



const Home = () => {
  const dispatch = useDispatch();
  dispatch(fetchItemsByUserIdAsync());
  return (
    <div>
            <NavBar>
                <ProductList/>
            </NavBar>
        </div>
  )
}

export default Home