import user from '../../assets/User.svg'
import { Table } from '../../components/Table'
import { QuantityInput } from '../SingleProductPage/QuantityInput'
import remove from '../../assets/trash.svg'

export const CartPage = () => {
  return (
    <section className='align_center flex-col justify-center w-[60%] m-[0_auto] p-[32px_48px]'>
      <div className='align_center gap-[16px] mb-[32px]'>
        <img className='w-[80px] h-[80px] object-cover rounded-[100%]' src={user} alt='user_profile' />
        <div>
          <p className='text-[21px] font-[600]'>Harley</p>
          <p>haley@gmail.com</p>
        </div>
      </div>
      <Table headings={['Item', 'Price', 'Quantity', 'Total', 'Remove']}>
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>$999</td>
            <td className='align_center justify-center h-[50px]'><QuantityInput /></td>
            <td>$999</td>
            <td className='align_center justify-center pt-2'><img src={remove} alt='remove icon' className='w-[35px] h-[35px] cursor-pointer' /></td>
          </tr>
        </tbody>
      </Table>
      <table className='self-end w-[400px] border-collapse text-[16px] mt-[16px] bg-[#fff]'>
        <tbody>
          <tr>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Subtotal</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>$999</td>
          </tr>
          <tr>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Shipping Charge</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>$5</td>
          </tr>
          <tr className='text-[20px] font-[700]'>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Total</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>$1004</td>
          </tr>
        </tbody>
      </table>
      <button className='button_search self-end h-[38px_!important] m-[16px_0] p-[0_16px_!important]'>Checkout</button>
    </section>
  )
}
