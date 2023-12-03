import { NavLink } from 'react-router-dom'
import star from '../../assets/starwhite.svg'
import basket from '../../assets/trash.svg'

export const ProductCard = ({ id, image, price, title, rating, ratingCounts, stock }) => {
  return (
    <article className='flex flex-col justify-between w-[275px] h-[375px] p-[25px] m-[20px] rounded-[12px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-[#fff]'>
      <div className='align_center justify-center h-[150px] border-b-[1px_solid_#fcfcfc] pb-4'>
        <NavLink to={`/product/${id}`}>
          <img
            className='h-[150px]'
            src={`http://localhost:5000/products/${image}`} alt='product image'
          />
        </NavLink>
      </div>
      <div className='py-[20px]'>
        <h3 className='text-[21px] font-[700]'>${price}</h3>
        <p className='text-[18px] mt-[4px]'>{title}</p>
      </div>
      <footer className='align_center justify-between'>
        <div className='align_center'>
          <p className='align_center h-[30px] p-[4px_8px] font-[600] rounded-[5px] bg-[#fca311] text-[#fff]'>
            <img className='w-[20px] mr-[5px]' src={star} alt='star' /> {rating}
          </p>
          <p className='text-[16px] ml-[10px] text-gray-400 p-[0_10px] border-l-[2px_solid_#dcdcdc]'>{ratingCounts}</p>
        </div>
        {stock > 0 && (
          <button className='w-[40px] h-[40px] border-none bg-transparent cursor-pointer'>
            <img className='w-full h-full' src={basket} alt='' />
          </button>)}
      </footer>
    </article>
  )
}
