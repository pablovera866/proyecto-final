import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import moment from "moment";

function DetallesAutor() {
  const [autor, setAutor] = useState(null);
  const [libros, setLibros] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/autor/${id}`)
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          throw new Error("No existe el autor");
        }
      })
      .then((resultado) => {
        setAutor(resultado);
        setLibros(resultado.libros);
      })
      .catch((error) => {
        console.log(error);
        setAutor(null);
        setLibros([]);
      });
  }, [id]);

  const formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <>
      {autor === null ? (
        <div className="background">No existe el autor</div>
      ) : (
        <div className="background">
          <div>
            <h2>Detalles del autor {autor.nombre}</h2>
          </div>
          <div>
            <span className="section-title">Nacionalidad: </span>
            <span className="no-decoration">{autor.nacionalidad}</span>
          </div>
          <div>
            <div>
              <span className="section-title">Fecha de Nacimiento: </span>
              <span className="no-decoration">
                {formatDate(autor.fecha_nacimiento)}
              </span>
            </div>
            <br />
          </div>
          {libros.length > 0 ? (
            <div>
              <h3>Libros del autor:</h3>
              <div>
                {libros.map((libro) => (
                  <div key={libro.id}>
                    <Link className="no-decoration" to={`/libro/${libro.id}`}>
                      {libro.titulo}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>No hay libros disponibles del autor.</div>
          )}
        </div>
      )}
    </>
  );
}

export default DetallesAutor;
