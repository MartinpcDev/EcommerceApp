export const QuantityInput = ({ quantity, setQuantity, stock }) => {
  return (
    <>
      <button
        className='flex items-center justify-center w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer disabled:opacity-30 disabled:cursor-default pb-1'
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
      > -
      </button>
      <p className='flex items-center justify-center text-center m-[0_40px]'>{quantity}</p>
      <button
        className='w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer flex items-center justify-center pb-1 disabled:cursor-default disabled:opacity-30'
        disabled={quantity >= stock}
        onClick={() => setQuantity(quantity + 1)}
      > +
      </button>
    </>
  )
}
