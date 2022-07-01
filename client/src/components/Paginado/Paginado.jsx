import React from 'react';
import "./Paginado.css"

export default function Paginado({gamesPerPage, allVideogames, paginado}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allVideogames/gamesPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className='paginado'>
                {pageNumbers.length > 1 && 
                pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}><strong>{number}</strong></button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}