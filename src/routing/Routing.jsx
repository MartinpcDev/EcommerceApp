import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../pages/Home/HomePage'
import { ProductsPage } from '../pages/Products/ProductsPage'
import { SingleProductPage } from '../pages/SingleProductPage/SingleProductPage'
import { SignupPage } from '../pages/Authentication/SignupPage'
import { LoginPage } from '../pages/Authentication/LoginPage'
import { MyOrderPage } from '../pages/MyOrder/MyOrderPage'
import { CartPage } from '../pages/Cart/CartPage'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/1' element={<SingleProductPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/myorders' element={<MyOrderPage />} />
    </Routes>
  )
}
