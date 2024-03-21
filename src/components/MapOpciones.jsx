import React from 'react'
import jsonOpciones from "../data/opciones.json"
import AreaCopyButton from './AreaCopyButton'


const MapOpciones = () => {
    
    return (
        <>
        {
            jsonOpciones.map(item =>(
                <AreaCopyButton 
                    key={item.id}
                    id={item.id}
                    titulo={item.titulo}
                    content={item.content}
                />
            ))
        }
        </>
    )
}

export default MapOpciones