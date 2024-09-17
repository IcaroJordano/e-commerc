import './App.css'
import { BottomCategorys } from './components/BottomCategorys'
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
      <BottomCategorys></BottomCategorys>
    </>
  )
}

export default App
