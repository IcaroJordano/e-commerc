import './App.css'
import { Categorys } from './components/Categorys'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Categorys></Categorys>
    </>
  )
}

export default App
