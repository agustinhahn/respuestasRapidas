import React, { useState, useEffect } from 'react';
import data from '../data/testing.json';  // Importa el JSON directamente
import "./buscador.css";

const Buscador = () => {
  const [filtro, setFiltro] = useState("");
  const [resultados, setResultados] = useState([]);

  // Filtrar resultados en base a lo que se escribe
  useEffect(() => {
    if (filtro.trim() === "") {
      setResultados([]); // No mostrar nada si el input está vacío
    } else {
      const coincidencias = data
        .filter(user => user.nombre.toLowerCase().includes(filtro.toLowerCase()))
        .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar alfabéticamente
        .slice(0, 5); // Limitar a 5 resultados

      setResultados(coincidencias);
    }
  }, [filtro]);

  return (
    <div className='buscadorContainer'>
      <h2 className='tituloBuscador'>CCR2 VIEJO | CCR2 NUEVO | CCR3 | CCR4 | CCR5</h2>
      <input
        type="text"
        placeholder='A QUIEN BUSCAS MASTER? 🧐'
        className='inputBuscador'
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {/* Mostrar resultados */}
      {resultados.length > 0 && (
        <ul className='listaResultados'>
          {resultados.map((user, index) => (
            <li key={index} className='resultadoItem'>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                {user.cliente} | {user.origen} | {user.pagina}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador;
