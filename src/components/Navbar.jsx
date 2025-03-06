import React from 'react'
import NavbarButton from './NavbarButton'
import jsonDataNav from "../data/titulosNav.json"

const Navbar = () => {
    return (
        <>
        <div className='buttonsNav'>
            <NavbarButton titulo="BUSCADOR" categoria="buscador" />
            {
                jsonDataNav.map(item => (
                    <div key={item.id}>
                        <NavbarButton titulo={item.titulo} categoria={item.categoria} />
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Navbar