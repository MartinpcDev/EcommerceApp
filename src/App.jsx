import { NavBar } from './components/NavBar'
import { Routing } from './routing/Routing'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto font-montserrat'>
      <NavBar />
      <main className=''>
        <Routing />
      </main>
    </div>
  )
}
