
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <div className='text-center'>
        <nav className='flex gap-10 justify-center items-center py-3'>
          <Link className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/">Home</Link>
          <Link className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/about">About</Link>
          <Link className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/contact">Contact</Link>
          <Link className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/users">Users</Link>
        </nav>
        <h1 className='text-center text-5xl font-bold mt-10'>React Rotes</h1>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
