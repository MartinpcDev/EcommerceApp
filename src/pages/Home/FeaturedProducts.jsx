import { useData } from '../../hooks/useData'
import { ProductCard } from '../Products/ProductCard'
import { ProductCardSkeleton } from '../Products/ProductCardSkeleton'

export const FeaturedProducts = () => {
  const { data, error, isloading } = useData('/products/featured')
  const skeletons = [1, 2, 3]
  return (
    <section className='m-[65px]'>
      <h2 className='text-[48px] text-center mb-[65px]'>Featured Products:</h2>
      <div className='align_center justify-evenly mb-[65px]'>
        {error && <em className='text-red-500'>{error}</em>}
        {data && data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {isloading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
    </section>
  )
}
