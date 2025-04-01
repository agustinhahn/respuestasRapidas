import React, { useState, useEffect } from 'react';
import data from '../data/testing.json';  // Importa el JSON directamente
import "./buscador.css";

const Buscador = () => {
  const [filtro, setFiltro] = useState("");
  const [resultados, setResultados] = useState([]);

  // Función para obtener el label correspondiente según el origen
  const getLabel = (origen) => {
    switch (origen) {
      case "http://200.0.213.9:91/graphs":
        return "CCR2 viejo";
      case "http://161.0.72.6:91/graphs":
        return "CCR2 nuevo";
      case "http://172.16.5.13:81/graphs":
        return "CCR3";
      case "http://161.0.75.129:91/graphs":
        return "CCR4";
      case "http://161.0.75.33:81/graphs":
        return "CCR5";
      case "http://172.16.0.17:91/graphs":
        return "LAUGE";
      case "http://10.0.46.1:91/graphs":
        return "ARROYO";
      default:
        return "Desconocido"; // Si el origen no coincide, muestra 'Desconocido'
    }
  };

  // Filtrar resultados en base a lo que se escribe
  useEffect(() => {
    if (filtro.trim() === "") {
      setResultados([]); // No mostrar nada si el input está vacío
    } else {
      const coincidencias = data
        .filter(user => user.cliente.toLowerCase().includes(filtro.toLowerCase()))
        .sort((a, b) => a.cliente.localeCompare(b.cliente)) // Ordenar alfabéticamente
        .slice(0, 8); // Limitar a 8 resultados

      setResultados(coincidencias);
    }
  }, [filtro]);

  return (
    <div className='buscadorContainer'>
      <h2 className='tituloBuscador'>TODOS LOS MIKROTIK</h2>
      <input
        type="text"
        placeholder='A QUIEN BUSCAS MASTER? 🧐'
        className='inputBuscador'
        value={filtro}
        onChange={(e) => setFiltro(e.target.value.replace(/^\s+/, ''))}  // Eliminar solo los espacios antes de la palabra
      />

      {/* Mostrar resultados */}
      {resultados.length > 0 && (
        <ul className='listaResultados'>
          {resultados.map((user, index) => (
            <li key={index} className='resultadoItem'>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                {user.cliente} | {getLabel(user.origen)} | {user.pagina}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador;
