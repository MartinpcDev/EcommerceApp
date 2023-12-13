import { LinkWithIcon } from '../../components/LinkWithIcon'
import config from '../../config.json'
import { useData } from '../../hooks/useData.js'

export const ProductsSideBar = () => {
  const { data: categories, error } = useData('/category')

  return (
    <aside className='p-[10px_20px] rounded-[5px] bg-[#fff]'>
      <h2 className='text-[26px] mb-[10px]'>Category</h2>
      <div>
        {error && <em className='text-red-500'>{error}</em>}
        {categories && (categories.map(category => (
          <LinkWithIcon
            key={category._id}
            title={category.name}
            link={`/products?category=${category.name}`}
            emoji={`${config.backendURL}/category/${category.image}`}
            sidebar
          />
        )))}
      </div>
    </aside>
  )
}
