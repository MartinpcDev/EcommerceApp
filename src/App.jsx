import { NavBar } from './components/NavBar'
import { HomePage } from './pages/Home/HomePage'
import { ProductsPage } from './pages/Products/ProductsPage'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto'>
      <NavBar />
      {/* <HomePage /> */}
      <ProductsPage />
      <main className=''>All routing</main>
    </div>
  )
}
