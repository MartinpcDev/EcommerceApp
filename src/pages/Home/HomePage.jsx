import { HeroSection } from './HeroSection'
import iphone from '../../assets/iphone.webp'

export const HomePage = () => {
  return (
    <HeroSection
      title='But iPhone 14 Pro'
      subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever'
      link='Buy Now'
      image={iphone}
    />
  )
}
