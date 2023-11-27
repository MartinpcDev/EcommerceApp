import { ProductsList } from './ProductsList'
import { ProductsSideBar } from './ProductsSideBar'

export const ProductsPage = () => {
  return (
    <section className='grid grid-cols-[1fr_4fr] p-[20px]'>
      <ProductsSideBar />
      <ProductsList />
    </section>
  )
}
