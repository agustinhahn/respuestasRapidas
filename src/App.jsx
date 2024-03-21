
import AreaCopyButton from './components/AreaCopyButton'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from './context/CartContext'
import MapOpciones from './components/MapOpciones'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<MapOpciones />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App
