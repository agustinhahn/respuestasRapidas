import React from 'react'
import NavbarButton from './NavbarButton'
import jsonDataNav from "../data/titulosNav.json"

const Navbar = () => {
    return (
        <>
        <div className='buttonsNav'>
        {
            jsonDataNav.map(item => (
                <div key={item.id}>
                    <NavbarButton titulo={item.titulo} />
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Navbar