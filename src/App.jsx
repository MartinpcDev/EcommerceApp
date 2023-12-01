import { NavBar } from './components/NavBar'
import { SignupPage } from './pages/Authentication/SignUpPage'

// import { LoginPage } from './pages/Authentication/LoginPage'
// import { MyOrderPage } from './pages/MyOrder/MyOrderPage'
// import { SingleProductPage } from './components/SingleProductPage'
// import { HomePage } from './pages/Home/HomePage'
// import { ProductsPage } from './pages/Products/ProductsPage'
// import { CartPage } from './pages/Cart/CartPage'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto font-montserrat'>
      <NavBar />
      <main className=''>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        {/* <LoginPage /> */}
        <SignupPage />
      </main>
    </div>
  )
}
