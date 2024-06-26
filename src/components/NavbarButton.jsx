import React from 'react'
import {Link} from 'react-router-dom'
const NavbarButton = ({titulo, categoria}) => {
    return (
        <>
        <Link to={(`/${categoria}`)}>
            <button className='buttonNav'>{titulo}</button>
        </Link>
        </>
    )
}

export default NavbarButton