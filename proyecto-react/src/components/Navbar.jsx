import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const enviar = (event) => {
    event.preventDefault();
    navigate(`/libros/${event.target.busqueda.value}`);
  };
  return (
    <>
      <div className="navbar">
        <Link to={`/libros`} className="button">
          Libros
        </Link>
        <Link to={`/categorias`} className="button">
          Categorias
        </Link>
        <form onSubmit={enviar} method="POST">
          <input id="busqueda" name="busqueda" type="text"></input>
          <button className="button">buscar</button>
        </form>
        <Link to={`/nuevoLibro`} className="button">
          Nuevo Libro
        </Link>
      </div>
    </>
  );
}

export default Navbar;
