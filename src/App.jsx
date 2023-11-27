import { NavBar } from './components/NavBar'
import { SingleProductPage } from './components/SingleProductPage'

import { HomePage } from './pages/Home/HomePage'
import { ProductsPage } from './pages/Products/ProductsPage'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto'>
      <NavBar />
      <main className=''>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        <SingleProductPage />
      </main>
    </div>
  )
}
