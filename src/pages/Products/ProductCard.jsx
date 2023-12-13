import { NavLink } from 'react-router-dom'
import config from '../../config.json'
import star from '../../assets/starwhite.svg'
import basket from '../../assets/basket.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const user = useContext(UserContext)
  return (
    <article className='flex flex-col justify-between w-[275px] h-[375px] p-[25px] m-[20px] rounded-[12px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-[#fff]'>
      <div className='align_center justify-center h-[150px] border-b-[1px_solid_#fcfcfc] pb-4'>
        <NavLink to={`/product/${product?._id}`}>
          <img
            className='h-[150px]'
            src={`${config.backendURL}/products/${product?.images[0]}`} alt='product image'
          />
        </NavLink>
      </div>
      <div className='py-[20px]'>
        <h3 className='text-[21px] font-[700]'>${product?.price}</h3>
        <p className='text-[18px] mt-[4px]'>{product?.title}</p>
      </div>
      <footer className='align_center justify-between'>
        <div className='align_center'>
          <p className='align_center h-[30px] p-[4px_8px] font-[600] rounded-[5px] bg-[#fca311] text-[#fff]'>
            <img className='w-[20px] mr-[5px]' src={star} alt='star' /> {product?.reviews.rate}
          </p>
          <p className='text-[16px] ml-[10px] text-gray-400 p-[0_10px] border-l-[2px_solid_#dcdcdc]'>{product?.reviews.counts}</p>
        </div>
        {product?.stock > 0 && user && (
          <button
            className='align_center justify-center w-[40px] h-[40px] border-none bg-blue-800 cursor-pointer rounded-full'
            onClick={() => addToCart(product, 1)}
          >
            <img className='w-[28px] h-[28px]' src={basket} alt='' />
          </button>)}
      </footer>
    </article>
  )
}
