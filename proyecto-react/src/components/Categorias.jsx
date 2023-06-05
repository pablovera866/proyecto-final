import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categorias")
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
      {categorias.map((categoria) => (
        <div className="section-title" key={categoria.id}>
          <Link to={`/categorias/${categoria.id}`}>{categoria.nombre}</Link>
        </div>
      ))}
    </div>
  );
}

export default Categorias;
