
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import './App.css'

function App() {

  const navigation = useNavigation();


  return (
    <>
      <div className='text-center'>
        <nav className='flex gap-10 justify-center items-center py-3'>
          
          <NavLink className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg ' to="/">Home</NavLink>
          <NavLink className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/about">About</NavLink>
          <NavLink className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/contact">Contact</NavLink>
          <NavLink className='hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg' to="/users">Users</NavLink>
        </nav>
        <h1 className='text-center text-5xl font-bold mt-10'>React Rotes</h1>
        {
          navigation.state === "loading" ? <span className="loading loading-bars loading-md"></span> : <Outlet></Outlet>
        }
      </div>
    </>
  )
}

export default App
