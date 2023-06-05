import { useEffect, useState } from "react";

function LibrosPorCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/categoria/${id}/libros`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setCategorias(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="card-holder">
        {categorias.length > 0 &&
          categorias.map((categoria, index) => {
            return (
              <div className="card" key={`libros-categoria-${index}`}>
                <div>
                  <div className="cardTitle">Categoria:</div>
                  <div className="cardVar">{categoria.nombre}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default LibrosPorCategoria;
