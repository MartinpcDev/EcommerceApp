import { Table } from '../../components/Table'
import { QuantityInput } from '../SingleProductPage/QuantityInput'
import remove from '../../assets/trash.svg'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'

export const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0)
  const user = useContext(UserContext)
  const { cart, removeFromCart, updateCart } = useContext(CartContext)
  useEffect(() => {
    let total = 0
    cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    setSubTotal(total)
  }, [cart])
  return (
    <section className='align_center flex-col justify-center w-[60%] m-[0_auto] p-[32px_48px]'>
      <div className='align_center gap-[16px] mb-[32px]'>
        <img className='w-[80px] h-[80px] object-cover rounded-[100%]' src={`http://localhost:5000/profile/${user?.profilePic}`} alt='user_profile' />
        <div>
          <p className='text-[21px] font-[600]'>Nombre : {user?.name}</p>
          <p>Email : {user?.email}</p>
        </div>
      </div>
      <Table headings={['Item', 'Price', 'Quantity', 'Total', 'Remove']}>
        <tbody>
          {
            cart.map(({ product, quantity }) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td className='align_center justify-center h-[50px]'>
                  <QuantityInput
                    quantity={quantity}
                    stock={product.stock}
                    setQuantity={updateCart}
                    cartPage
                    productId={product._id}
                  />
                </td>
                <td>${quantity * product.price}</td>
                <td className='align_center justify-center pt-2'>
                  <img
                    src={remove}
                    alt='remove icon'
                    className='w-[35px] h-[35px] cursor-pointer'
                    onClick={() => removeFromCart(product._id)}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <table className='self-end w-[400px] border-collapse text-[16px] mt-[16px] bg-[#fff]'>
        <tbody>
          <tr>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Subtotal</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>${subTotal}</td>
          </tr>
          <tr>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Shipping Charge</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>$5</td>
          </tr>
          <tr className='text-[20px] font-[700]'>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>Total</td>
            <td className='p-[12px_20px] border-[3px] border-solid border-[#e5e5e5] last:text-end last:w-[120px]'>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>
      <button className='button_search self-end h-[38px_!important] m-[16px_0] p-[0_16px_!important]'>Checkout</button>
    </section>
  )
}
