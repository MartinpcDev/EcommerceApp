import { ProductCard } from './ProductCard'

export const ProductsList = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}
