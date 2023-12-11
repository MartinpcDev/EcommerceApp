import rocket from '../assets/Rocket.svg'
import star from '../assets/Star.svg'
import IDbutton from '../assets/IDimage.svg'
import memo from '../assets/memo.svg'
import order from '../assets/order.svg'
import lock from '../assets/lock.svg'
import { LinkWithIcon } from './LinkWithIcon'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'

export const NavBar = () => {
  const user = useContext(UserContext)
  const { cart } = useContext(CartContext)
  return (
    <nav className='align_center justify-between py-0 px-[40px]'>
      <div className='align_center'>
        <h1 className='mr-[20px] text-[32px]'>CartWish</h1>
        <form className='align_center w-[450px] h-[40px] border-[1px] border-solid border-[#cdcdcd] rounded-md p-1'>
          <input
            className='flex-[1] h-full py-0 px-[7px] text-[20px] font-[500] border-none outline-none'
            type='text'
            placeholder='Search Products'
          />
          <button
            className='h-full button_search'
            type='submit'
          >Search
          </button>
        </form>
      </div>
      <div className='align_center text-[20px] m-[15px] font-[500]'>
        <LinkWithIcon title='Home' link='/' emoji={rocket} />
        <LinkWithIcon title='Products' link='/products' emoji={star} />
        {!user &&
          <>
            <LinkWithIcon title='Login' link='/login' emoji={IDbutton} />
          </>}
        <LinkWithIcon title='SignUp' link='/signup' emoji={memo} />
        {user &&
          <>
            <LinkWithIcon title='My Orders' link='/myorders' emoji={order} />
            <LinkWithIcon title='logout' link='/logout' emoji={lock} />
            <NavLink className='align_center' to='/cart'>Cart <p className='align_center justify-center w-[20px] h-[20px] rounded-[100%] bg-[#6457f9] text-[#fff] text-[15px] ml-[15px] active:font-[600]'>{cart.length}</p></NavLink>
          </>}
      </div>
    </nav>
  )
}
