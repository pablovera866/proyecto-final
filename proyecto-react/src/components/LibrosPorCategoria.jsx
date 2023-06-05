import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LibrosPorCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Categorías</h1>
      {categorias.map((categoria) => (
        <div key={categoria.id}>
          <Link to={`/categorias/${categoria.id}`}>{categoria.nombre}</Link>
        </div>
      ))}
    </div>
  );
}

export default LibrosPorCategoria;
