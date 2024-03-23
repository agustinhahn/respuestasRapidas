import React from 'react'
import EnlaceButton from './EnlaceButton'

const MapEnlaces = ({dataEnlaces}) => {

    return (
        <>
        {
            dataEnlaces.map(item =>(
                <EnlaceButton 
                    key={item.id}
                    id={item.id}
                    titulo={item.titulo}
                    direccion={item.direccion}
                />
            ))
        }
        </>
    )
}

export default MapEnlaces