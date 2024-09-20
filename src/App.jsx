import './App.css'
import { BottomCategorys } from './components/BottomCategorys'
import { Categorys } from './components/Categorys'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import Produto from './components/Produto'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Categorys></Categorys>
      {/* <Products></Products> */}
      <Produto></Produto>
      <BottomCategorys></BottomCategorys>
      <Footer></Footer>
    </>
  )
}

export default App
