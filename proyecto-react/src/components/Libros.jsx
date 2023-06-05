import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Libros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/libros").then((respuesta) => {
      respuesta.json().then((resultado) => {
        setLibros(resultado);
      });
    });
  }, []);

  return (
    <>
      <div>
        {libros.length > 0 &&
          libros.map((libro, index) => {
            return (
              <Link to={`/libro/${libro.id}`} key={`lista-libro-${index}`}>
                <div>
                  <div>Libro:</div>
                  <div>{libro.titulo}</div>
                </div>
                <div>
                  <div>Autor:</div>
                  <div>{libro.autor}</div>
                </div>
                <div>
                  <div>Categoria:</div>
                  <div>{libro.categoria}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Libros;
