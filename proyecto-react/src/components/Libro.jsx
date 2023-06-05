import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Libro() {
  const [libro, setLibro] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/libro/${id}`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setLibro(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {libro == null ? (
        <div>No existe el libro</div>
      ) : (
        <div className="card-holder">
          <div className="book-page">
            <div className="section">
              <span className="section-title">Libro</span>
              <div className="book-line">
                <span className="section-title">Titulo</span>: {libro.titulo}
              </div>
              <div className="book-line">
                <span className="section-title">Categoria</span>:{" "}
                {libro.categoria}
              </div>
            </div>
            <div className="section">
              <span className="section-title">Autor</span>
              <div className="book-line">
                <span className="section-title">Nombre</span>: {libro.autor}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Libro;
