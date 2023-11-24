import rocket from '../assets/Rocket.svg'
import star from '../assets/Star.svg'
import IDbutton from '../assets/IDimage.svg'
import memo from '../assets/memo.svg'
import order from '../assets/order.svg'
import lock from '../assets/lock.svg'
import { LinkWithIcon } from './LinkWithIcon'

export const NavBar = () => {
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
            className='h-full py-0 px-[10px] text-[20px] font-[500] border-none rounded-md bg-[#6457f9] text-[#fff] cursor-pointer'
            type='submit'
          >Search
          </button>
        </form>
      </div>
      <div className='align_center text-[20px]'>
        <LinkWithIcon title='Home' link='/' emoji={rocket} />
        <LinkWithIcon title='Products' link='/products' emoji={star} />
        <LinkWithIcon title='Login' link='/login' emoji={IDbutton} />
        <LinkWithIcon title='SignUp' link='/signup' emoji={memo} />
        <LinkWithIcon title='My Orders' link='/myorders' emoji={order} />
        <LinkWithIcon title='logout' link='/logout' emoji={lock} />
        <a className='align_center' href='/cart'>Cart <p className='align_center justify-center w-[20px] h-[20px] rounded-[100%] bg-[#6457f9] text-[#fff] text-[15px] ml-[15px]'>0</p></a>
      </div>
    </nav>
  )
}
