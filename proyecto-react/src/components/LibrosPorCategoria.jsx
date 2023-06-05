import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LibrosPorCategoria() {
  const { id } = useParams();
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/categoria/${id}/libros`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("No se encontraron libros en esta categoría.");
        }
      })
      .then((data) => {
        setLibros(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div>
      <h1>Libros de la Categoría {id}</h1>
      {libros.map((libro) => (
        <div key={libro.id}>
          <div>Título: {libro.titulo}</div>
          <div>Autor: {libro.autor}</div>
          <div>Categoría: {libro.categoria}</div>
          <div>----------------------------</div>
        </div>
      ))}
    </div>
  );
}

export default LibrosPorCategoria;
