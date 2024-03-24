import React from 'react'

const EnlaceButton = ({ titulo, direccion }) => {
    return (
        <>
            <div className='enlaceButton'>
                <a href={direccion} target='_blank' rel='noopener noreferrer'>
                    <button className='copybutton'>{titulo}</button>
                </a>
            </div>
        </>
    )
}

export default EnlaceButton