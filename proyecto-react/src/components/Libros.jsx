import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Libros() {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/libros")
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setLibros(resultado);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="background">
      <h3>Catálogo de Libros</h3>
      {error ? (
        <div>Error al cargar los libros.</div>
      ) : libros.length > 0 ? (
        libros.map((libro, index) => (
          <Link to={`/libro/${libro.id}`} key={`lista-libro-${index}`}>
            <div>
              <div className="section-title">{libro.titulo}</div>
            </div>
          </Link>
        ))
      ) : (
        <div>.</div>
      )}
    </div>
  );
}

export default Libros;
