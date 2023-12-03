import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProductCardSkeleton = () => {
  return (
    <Skeleton className='w-[275px] h-[375px] p-[25px] m-[20px] rounded-[12px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-[#fff]' />
  )
}
