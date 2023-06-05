import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import FiltrarPorTitulo from "./components/FiltrarPorTitulo";
import Libro from "./components/Libro";
import LibrosPorCategoria from "./components/LibrosPorCategoria";
import NuevoLibro from "./components/NuevoLibro";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path="libros" element={<Libros />} />
            <Route path="libros/:titulo" element={<FiltrarPorTitulo />} />
            <Route path="libro/:id" element={<Libro />} />
            <Route path="categorias/" element={<LibrosPorCategoria />} />
            <Route path="nuevoLibro" element={<NuevoLibro />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
