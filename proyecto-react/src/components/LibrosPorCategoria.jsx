import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function LibrosPorCategoria() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState("");
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/categoria/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoria(data.nombre);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`http://localhost:3000/api/categoria/${id}/libros`)
      .then((response) => response.json())
      .then((data) => {
        setLibros(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="background">
      <h2>Libros de la categoría {categoria}</h2>
      {libros.length > 0 ? (
        libros.map((libro) => (
          <div key={libro.id}>
            <div>
              <span className="section-title">Título: </span>
              <span className="no-decoration">{libro.titulo}</span>
            </div>
            <div>
              <span className="section-title">Autor/a: </span>
              <Link className="no-decoration" to={`/autor/${libro.autor_id}`}>
                {libro.autor}
              </Link>
            </div>
            <div>
              <span className="section-title">Categoría: </span>
              <span className="no-decoration">{libro.categoria}</span>
            </div>
            <br />
          </div>
        ))
      ) : (
        <div>No hay libros disponibles en esta categoría.</div>
      )}
    </div>
  );
}

export default LibrosPorCategoria;
