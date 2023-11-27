export const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <a
      href={link}
      className={sidebar ? 'align_center m-[20px] text-inherit font-[500] no-underline cursor-pointer sidebar_link' : 'align_center'}
    >{title}
      <img
        src={emoji}
        alt='rocket'
        className='w-[25px] ml-[5px]'
      />
    </a>
  )
}
