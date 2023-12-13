import rocket from '../assets/Rocket.svg'
import star from '../assets/Star.svg'
import IDbutton from '../assets/IDimage.svg'
import memo from '../assets/memo.svg'
import order from '../assets/order.svg'
import lock from '../assets/lock.svg'
import { LinkWithIcon } from './LinkWithIcon'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'
import { getSuggestionsAPI } from '../services/productServices'

export const NavBar = () => {
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedItem, setSelectedItem] = useState(-1)

  const user = useContext(UserContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() !== '') {
      navigate(`/products?search=${search.trim()}`)
    }
    setSuggestions([])
  }

  const handleKeyDown = (e) => {
    if (selectedItem < suggestions.length) {
      if (e.key === 'ArrowDown') {
        setSelectedItem((current) => current === suggestions.length - 1 ? 0 : current + 1)
      } else if (e.key === 'ArrowUp') {
        setSelectedItem((current) => current === 0 ? suggestions.length - 1 : current - 1)
      } else if (e.key === 'Enter' && selectedItem > -1) {
        const suggestion = suggestions[selectedItem]
        navigate(`/products?search=${suggestion.title}`)
        setSearch('')
        setSuggestions([])
      }
    } else {
      selectedItem(-1)
    }
  }

  useEffect(() => {
    const delaySuggestions = setTimeout(() => {
      if (search.trim() !== '') {
        getSuggestionsAPI(search)
          .then(res => setSuggestions(res.data))
          .catch(err => console.log(err))
      } else {
        setSuggestions([])
      }
    }, 300)
    return () => clearTimeout(delaySuggestions)
  }, [search])

  return (
    <nav className='align_center justify-between py-0 px-[40px]'>
      <div className='align_center'>
        <h1 className='mr-[20px] text-[32px]'>CartWish</h1>
        <form
          className='align_center w-[450px] h-[40px] border-[1px] border-solid border-[#cdcdcd] rounded-md p-1 relative'
          onSubmit={handleSubmit}
        >
          <input
            className='flex-[1] h-full py-0 px-[7px] text-[20px] font-[500] border-none outline-none'
            type='text'
            placeholder='Search Products'
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='h-full button_search'
            type='submit'
          >Search
          </button>
          {suggestions.length > 0 && (
            <ul className='absolute top-full left-0 w-full mt-[10px] border-solid border-[1px] border-[#cdcdcd] rounded-[5px] bg-[#fff] z-[9999]'>
              {suggestions.map((suggestion, index) => (
                <li className='flex' key={suggestion._id}>
                  <Link
                    className={'w-full p-[10px_20px] text-[18px] cursor-pointer hover:bg-[#e3e3e3]' + (selectedItem === index ? ' bg-[#e3e3e3]' : '')}
                    to={`/products?search=${suggestion.title}`}
                    onClick={() => {
                      setSearch('')
                      setSuggestions([])
                    }}
                  >{suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>)}
        </form>
      </div>
      <div className='align_center text-[20px] m-[15px] font-[500]'>
        <LinkWithIcon title='Home' link='/' emoji={rocket} />
        <LinkWithIcon title='Products' link='/products' emoji={star} />
        {!user &&
          <>
            <LinkWithIcon title='Login' link='/login' emoji={IDbutton} />
            <LinkWithIcon title='SignUp' link='/signup' emoji={memo} />
          </>}
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
