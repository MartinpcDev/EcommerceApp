import { NavBar } from './components/NavBar'
import { HomePage } from './pages/Home/HomePage'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto'>
      <NavBar />
      <HomePage />
      <main className=''>All routing</main>
    </div>
  )
}
