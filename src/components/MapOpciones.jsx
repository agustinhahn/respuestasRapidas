import React, { useState } from 'react'
import AreaCopyButton from './AreaCopyButton'
import { useParams } from 'react-router-dom';


const MapOpciones = ({data}) => {

    const {categoria} = useParams()

    const filtroVentas = data.filter((cat)=> cat.categoria === "ventas")
    const filtroSoporte = data.filter((cat)=> cat.categoria === "soporte")
    const filtroInfo = data.filter((cat) => cat.categoria === "info")
    const filtroEnlaces = data.filter((cat) => cat.categoria === "enlaces")

    if(categoria === 'VENTAS') {
        data = filtroVentas
    }
    else if(categoria === "SOPORTE"){
        data = filtroSoporte
    }
    else if(categoria === "INFO"){
        data = filtroInfo
    }
    else if(categoria === "ENLACES"){
        data = filtroEnlaces
    }

    return (
        <>
        {
            data.map(item =>(
                <AreaCopyButton 
                    key={item.id}
                    id={item.id}
                    categoria={item.categoria}
                    titulo={item.titulo}
                    content={item.content}
                />
            ))
        }
        </>
    )
}

export default MapOpciones