import { HeroSection } from './HeroSection'
import iphone from '../../assets/iphone.webp'
import mac from '../../assets/macsetup.png'
import { FeaturedProducts } from './FeaturedProducts'

export const HomePage = () => {
  return (
    <>
      <HeroSection
        title='But iPhone 14 Pro'
        subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever'
        link='Buy Now'
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title='Build the ultimate Setup'
        subtitle='You can add Studio Display and color-matched Magic accesories to your bag after configure your Mac mini'
        link='Buy Now'
        image={mac}
      />
    </>
  )
}
