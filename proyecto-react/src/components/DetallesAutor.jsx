import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallesAutor() {
  const [autor, setautor] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/autor/${id}`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setautor(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al mostrar el autor",
          error: error.message,
        });
      });
  }, []);
  return (
    <>
      {autor == null ? (
        <div>No existe el autor</div>
      ) : (
        <div className="card-holder">
          <div className="book-page">
            <div className="section">
              <div className="book-line">
                <span className="section-title">Autor</span>: {autor.nombre}
              </div>
              <div className="book-line">
                <span className="section-title">Nacionalidad</span>:{" "}
                {autor.nombre}
              </div>
            </div>
            <div className="section">
              <div className="book-line">
                <span className="section-title">Fecha de Nacimiento</span>:{" "}
                {autor.fecha_nacimiento}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetallesAutor;
