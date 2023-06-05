import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FiltrarPorTitulo() {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(false);
  const { titulo } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/libros/filtrar?titulo=${titulo}`)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        if (resultado.length > 0) {
          setLibros(resultado);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [titulo]);

  return (
    <>
      <div>
        {libros.length > 0 ? (
          libros.map((libro, index) => (
            <div key={`lista-libro-${index}`}>
              <div>
                <div className="section-title">Libro:</div>{" "}
                <div>{libro.titulo}</div>
              </div>
              <div>
                <div className="section-title">Autor:</div>{" "}
                <div>{libro.autor}</div>
              </div>
              <div>
                <div className="section-title">Categoria:</div>{" "}
                <div>{libro.categoria}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No se encontraron libros con ese título.</div>
        )}
      </div>
    </>
  );
}

export default FiltrarPorTitulo;
