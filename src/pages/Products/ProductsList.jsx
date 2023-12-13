import { ProductCard } from './ProductCard'
import { useData } from '../../hooks/useData'
import { ProductCardSkeleton } from './ProductCardSkeleton'
import { useSearchParams } from 'react-router-dom'
// import { Pagination } from '../../components/Pagination'
import { useEffect, useState } from 'react'

export const ProductsList = () => {
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState('')
  const [sortedProducts, setSortedProducts] = useState([])
  const [search] = useSearchParams()
  const category = search.get('category')
  const searchQuery = search.get('search')

  const { data, error, isloading } = useData('/products', {
    params: {
      search: searchQuery,
      category,
      perPage: 10,
      page
    }
  }, [searchQuery, category, page])

  useEffect(() => {
    setPage(1)
  }, [searchQuery, category])

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  // const handlePageChange = (page) => {
  //   const currentParams = Object.fromEntries([...search])
  //   setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 })
  // }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        !isloading &&
        data &&
        page < data.totalPages
      ) {
        console.log('Reached to Bottom')
        setPage(prev => prev + 1)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [data, isloading])

  useEffect(() => {
    if (data && data.products) {
      const products = [...data.products]
      if (sortBy === 'price desc') {
        setSortedProducts(products.sort((a, b) => b.price - a.price))
      } else if (sortBy === 'price asc') {
        setSortedProducts(products.sort((a, b) => a.price - b.price))
      } else if (sortBy === 'rate desc') {
        setSortedProducts(products.sort((a, b) => b.reviews.rate - a.reviews.rate))
      } else if (sortBy === 'rate asc') {
        setSortedProducts(products.sort((a, b) => a.reviews.rate - b.reviews.rate))
      } else {
        setSortedProducts(products)
      }
    }
  }, [sortBy, data])

  return (
    <section className='p-[10px] pl-[30px]'>
      <header className='align_center justify-between'>
        <h2 className='text-[26px]'>Products</h2>
        <select
          name='sort'
          id=''
          className='text-[18px] font-[500] h-[35px] p-[0_5px] border-none outline-none rounded-[5px]'
          onChange={e => setSortBy(e.target.value)}
        >
          <option value=''>Relevance</option>
          <option value='price desc'>Price HIGH to LOW</option>
          <option value='price asc'>Price LOW to HIGH</option>
          <option value='rate desc'>Rate HIGH to LOW</option>
          <option value='rate asc'>Rate LOW to HIGH</option>
        </select>
      </header>
      <div className='flex flex-wrap justify-evenly'>
        {error && <em className='text-red-500'>{error}</em>}
        {data?.products && (
          sortedProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
            />)))}
        {isloading && skeleton.map((n) => (<ProductCardSkeleton key={n} />))}
      </div>
      {/* {data && (
        <Pagination
          totalPost={data.totalProducts}
          postsPerPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />)} */}
    </section>
  )
}
