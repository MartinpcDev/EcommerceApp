import { Table } from '../../components/Table'

export const MyOrderPage = () => {
  return (
    <section className='align_center justify-center w-[50%] m-[0_auto] p-[32px_48px]'>
      <Table headings={['Order', 'Products', 'Total', 'Status']}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone, Power Bank</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}
