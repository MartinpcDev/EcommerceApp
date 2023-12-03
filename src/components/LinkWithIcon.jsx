import { NavLink } from 'react-router-dom'

export const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? 'align_center m-[15px] no-underline cursor-pointer sidebar_link' : 'align_center m-[15px] active:font-[600]'}
    >{title}
      <img
        src={emoji}
        alt='rocket'
        className='w-[25px] ml-[5px]'
      />
    </NavLink>
  )
}
