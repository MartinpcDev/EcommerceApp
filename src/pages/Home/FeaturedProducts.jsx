import { ProductCard } from './ProductCard'

export const FeaturedProducts = () => {
  return (
    <section className='m-[65px]'>
      <h2 className='text-[48px] text-center mb-[65px]'>Featured Products:</h2>
      <div className='align_center justify-evenly mb-[65px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}
