
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from './context/CartContext'
import MapOpciones from './components/MapOpciones'
import MapEnlaces from './components/MapEnlaces'
import jsonOpciones from "./data/opciones.json"
import FotitoMessi from './components/FotitoMessi'
import jsonEnlaces from "./data/enlaces.json"
import SwitchButton from './components/SwitchButton'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <SwitchButton />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FotitoMessi />} />
            <Route exact path="/:categoria" element={<MapOpciones data={jsonOpciones} />} />
            <Route exact path="/ENLACES" element={<MapEnlaces dataEnlaces={jsonEnlaces} />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App
