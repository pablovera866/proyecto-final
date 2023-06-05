import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Libro() {
  const { id } = useParams();
  const [libro, setLibro] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/libro/${id}`)
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          throw new Error("Libro no encontrado");
        }
      })
      .then((resultado) => {
        setLibro(resultado);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className="section-title">Título: {libro.titulo}</div>
          <div className="section-title">Autor: {libro.autor}</div>
          <div className="section-title">Categoría: {libro.categoria}</div>
        </div>
      )}
    </div>
  );
}

export default Libro;
