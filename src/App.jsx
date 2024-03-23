
import AreaCopyButton from './components/AreaCopyButton'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from './context/CartContext'
import MapOpciones from './components/MapOpciones'
import MapEnlaces from './components/MapEnlaces'
import jsonOpciones from "./data/opciones.json"
import FotitoMessi from './components/FotitoMessi'
import jsonEnlaces from "./data/enlaces.json"

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FotitoMessi />} />
            <Route exact path="/:categoria" element={<MapOpciones data={jsonOpciones} />} />
            <Route exact path="/ENLACES" element={<MapEnlaces dataEnlaces={jsonEnlaces} />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App
