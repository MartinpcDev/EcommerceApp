export const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    <a
      href={link}
      className='align_center m-[15px] text-inherit font-[500] no-underline cursor-pointer'
    >{title}
      <img
        src={emoji}
        alt='rocket'
        className='w-[25px] ml-[5px]'
      />
    </a>
  )
}
