export const QuantityInput = () => {
  return (
    <>
      <button className='flex items-center justify-center w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer disabled:opacity-30 disabled:cursor-default pb-1' disabled> - </button>
      <p className='flex items-center justify-center text-center m-[0_40px]'>1</p>
      <button className='w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer flex items-center justify-center pb-1'> + </button>
    </>
  )
}
