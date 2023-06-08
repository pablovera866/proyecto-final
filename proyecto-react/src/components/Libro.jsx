import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="background">
      <h2>{libro.titulo}</h2>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className="">
            <span className="section-title">Autor/a: </span>
            <Link className="no-decoration" to={`/autor/${libro.autor_id}`}>
              {libro.autor}
            </Link>
          </div>
          <div>
            <span className="section-title">Categoría: </span>
            <Link
              className="no-decoration"
              to={`/categorias/${libro.categoria_id}`}
            >
              {libro.categoria}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Libro;
