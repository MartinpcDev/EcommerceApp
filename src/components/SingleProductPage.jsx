import { useState } from 'react'

const product = {
  id: 1,
  title: 'Product title',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit praesentium similique quisquam officia repudiandae rem nulla commodi quasi soluta minima distinctio illo, error in.',
  price: 9.99,
  images: [
    'https://via.placeholder.com/500x500?text=Product+Image+1',
    'https://via.placeholder.com/500x500?text=Product+Image+2',
    'https://via.placeholder.com/500x500?text=Product+Image+3',
    'https://via.placeholder.com/500x500?text=Product+Image+4'
  ],
  stock: 10
}

export const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <section className='align_center justify-center p-[32px_48px]'>
      <div className='align_center'>
        <div className='flex flex-col flex-wrap gap-[14px] p-[8px] m-[16px]'>
          {
            product.images.map((image, index) => (
              <img
                className={'w-[80px] h-[80px] object-cover rounded-[5px] cursor-pointer transition-[all_0.2s_ease-in-out]' +
                (selectedImage === index ? ' scale-[1.12]' : '')}
                key={index}
                src={image}
                alt={product.title}
                onClick={() => setSelectedImage(index)}
              />
            ))
          }
        </div>
        <img src={product.images[selectedImage]} alt={product.title} className='w-[600px] h-[600px] object-cover rounded-[10px]' />
      </div>
      <div className='w-[35%] p-[16px_24px]'>
        <h1 className='mb-[16px] text-[32px]'>{product.title}</h1>
        <p className='mb-[16px] leading-[1.4]'>{product.description}</p>
        <p className='mb-[16px] text-[24px] font-[600]'>${product.price.toFixed(2)}</p>
        <h2 className='text-[20px] font-[700]'>Quantity:</h2>
        <div className='w-[160px] align_center text-[20px] font-[700] m-[5px_0_16px]'>
          <button className='flex items-center justify-center w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer disabled:opacity-30 disabled:cursor-default' disabled> - </button>
          <p className='flex items-center justify-center text-center m-[0_40px]'>1</p>
          <button className='w-[35px] h-[35px] text-[25px] bg-[#ff8848] text-[#fff] border-none rounded-[100%] cursor-pointer flex items-center justify-center'> + </button>
        </div>
        <button className='button_search w-[160px] p-[8px_18px]'>Add to Cart</button>
      </div>
    </section>
  )
}
