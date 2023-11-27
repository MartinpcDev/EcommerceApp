import { LinkWithIcon } from '../../components/LinkWithIcon'
import rocket from '../../assets/Rocket.svg'

export const ProductsSideBar = () => {
  return (
    <aside className='p-[10px_20px] rounded-[5px] bg-[#fff]'>
      <h2 className='text-[26px] mb-[10px]'>Category</h2>
      <div>
        <LinkWithIcon
          title='Electronics'
          link='products?category=electronics'
          emoji={rocket}
          sidebar
        />
      </div>
    </aside>
  )
}
