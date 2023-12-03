import { ProductCard } from './ProductCard'
import { useData } from '../../hooks/useData'
import { ProductCardSkeleton } from './ProductCardSkeleton'
import { useSearchParams } from 'react-router-dom'

export const ProductsList = () => {
  const [search, setSearch] = useSearchParams()
  const category = search.get('category')
  const page = search.get('page')
  const { data, error, isloading } = useData('/products', {
    params: {
      category
    }
  }, [category, page])
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <section className='p-[10px] pl-[30px]'>
      <header className='align_center justify-between'>
        <h2 className='text-[26px]'>Products</h2>
        <select name='sort' id='' className='text-[18px] font-[500] h-[35px] p-[0_5px] border-none outline-none rounded-[5px]'>
          <option value=''>Relevance</option>
          <option value='price desc'>Price HIGH to LOW</option>
          <option value='price asc'>Price LOW to HIGH</option>
          <option value='rate desc'>Rate HIGH to LOW</option>
          <option value='rate asc'>Rate LOW to HIGH</option>
        </select>
      </header>
      <div className='flex flex-wrap justify-evenly'>
        {error && <em className='text-red-500'>{error}</em>}
        {isloading && skeleton.map((n) => (
          <ProductCardSkeleton key={n} />
        ))}
        {data?.products && (
          data.products.map(product => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
            />)))}
      </div>
    </section>
  )
}
