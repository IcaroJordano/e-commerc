import './App.css'
import { Categorys } from './components/Categorys'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Categorys></Categorys>
      <Products></Products>
    </>
  )
}

export default App
