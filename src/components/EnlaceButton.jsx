import React from 'react'

const EnlaceButton = ({titulo,direccion}) => {
    return (
        <>
        <a href={direccion}  target='_blank' rel='noopener noreferrer' className='enlaceButton'>
            <button className='copybutton'>{titulo}</button>
        </a>
        </>
    )
}

export default EnlaceButton