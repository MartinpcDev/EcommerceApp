export const Pagination = ({ totalPost, postsPerPage, onClick, currentPage }) => {
  const pages = []
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <>
      {pages.length > 1 &&
        <ul className='list-none flex justify-center flex-wrap m-[16px]'>
          {pages.map(page => (
            <li key={page}>
              <button
                className={'w-[40px] h-[40px] m-[0_10px] text-[16px] font-[600] border-[1px] border-solid border-[#e5e5e5] rounde-[6px] cursor-pointer transition-all duration-200 ease-in-out' + (parseInt(currentPage) === page ? ' bg-[#000] text-[#fff]' : ' bg-[#fff] text-[#000]')}
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>))}
        </ul>}
    </>
  )
}
