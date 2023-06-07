import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

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
      .catch((error) => {});
  }, []);

  const formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <>
      {autor == null ? (
        <div className="background">No existe el autor</div>
      ) : (
        <div className="background">
          <div>
            <h3>Detalles del autor {autor.nombre}</h3>
          </div>
          <div>
            <span className="section-title">Nacionalidad</span>:{" "}
            {autor.nacionalidad}
          </div>
          <div>
            <div>
              <span className="section-title">Fecha de Nacimiento</span>:{" "}
              {formatDate(autor.fecha_nacimiento)}
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default DetallesAutor;
