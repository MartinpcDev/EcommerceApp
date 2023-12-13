import { useContext, useState } from 'react'
import config from '../../config.json'
import { QuantityInput } from './QuantityInput'
import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'

export const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)
  const user = useContext(UserContext)
  const { id } = useParams()
  const { data: product, error } = useData(`/products/${id}`)
  return (
    <section className='align_center justify-center p-[32px_48px]'>
      {error && <em className='text-red-500'>{error}</em>}
      {/* {isloading && <Loader />} */}
      {product && (
        <>
          <div className='align_center'>
            <div className='flex flex-col flex-wrap gap-[14px] p-[8px] m-[16px]'>
              {
            product.images.map((image, index) => (
              <img
                className={'w-[80px] h-[80px] object-cover rounded-[5px] cursor-pointer transition-[all_0.2s_ease-in-out]' +
                (selectedImage === index ? ' scale-[1.12]' : '')}
                key={index}
                src={`${config.backendURL}/products/${image}`}
                alt={product.title}
                onClick={() => setSelectedImage(index)}
              />
            ))
          }
            </div>
            <img
              src={`${config.backendURL}/products/${product.images[selectedImage]}`}
              alt={product.title}
              className='w-[600px] h-[600px] object-cover rounded-[10px]'
            />
          </div>
          <div className='w-[35%] p-[16px_24px]'>
            <h1 className='mb-[16px] text-[32px]'>{product.title}</h1>
            <p className='mb-[16px] leading-[1.4]'>{product.description}</p>
            <p className='mb-[16px] text-[24px] font-[600]'>${product.price.toFixed(2)}</p>

            {user &&
              <>
                <h2 className='text-[20px] font-[700]'>Quantity:</h2>
                <div className='w-[160px] align_center text-[20px] font-[700] m-[5px_0_16px]'>
                  <QuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={product.stock}
                  />
                </div>
                <button
                  className='button_search w-[160px] p-[8px_18px]'
                  onClick={() => addToCart(product, quantity)}
                >Add to Cart
                </button>
              </>}
          </div>
        </>)}
    </section>
  )
}
