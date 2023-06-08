import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="background">
      {libros.length > 0 ? (
        libros.map((libro, index) => (
          <div key={`lista-libro-${index}`}>
            <h2>{libro.titulo}</h2>
            <div>
              <span className="section-title">Autor/a: </span>
              <Link className="no-decoration" to={`/autor/${libro.autor_id}`}>
                {libro.autor}
              </Link>
            </div>
            <div>
              <span className="section-title">Categoria: </span>
              <Link
                className="no-decoration"
                to={`/categorias/${libro.categoria_id}`}
              >
                {libro.categoria}
              </Link>
            </div>
            <br />
          </div>
        ))
      ) : (
        <h2>No se encontraron libros con ese título.</h2>
      )}
    </div>
  );
}

export default FiltrarPorTitulo;
