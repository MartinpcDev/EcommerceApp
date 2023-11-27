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
      <div className='align_center'>a</div>
    </section>
  )
}
