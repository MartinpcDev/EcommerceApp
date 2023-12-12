import { Table } from '../../components/Table'
import { useData } from '../../hooks/useData'

export const MyOrderPage = () => {
  const { data: orders, error } = useData('/order')
  const getProductString = (order) => {
    const productStringArr = order.products.map(p => `${p.product.title}(${p.quantity})`)
    return productStringArr.join(', ')
  }
  return (
    <section className='align_center justify-center w-[50%] m-[0_auto] p-[32px_48px]'>
      {/* {isloading && <Loader />} */}
      {error && <em className='text-red-500'>{error}</em>}
      {orders &&
        <Table headings={['Order', 'Products', 'Total', 'Status']}>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{getProductString(order)}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>}
    </section>
  )
}
