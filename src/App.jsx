import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto'>
      <NavBar />
      <main className=''>All routing</main>
    </div>
  )
}
