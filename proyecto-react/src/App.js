import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import FiltrarPorTitulo from "./components/FiltrarPorTitulo";
import Libro from "./components/Libro";
import Categorias from "./components/Categorias";
import LibrosPorCategoria from "./components/LibrosPorCategoria";
import DetallesAutor from "./components/DetallesAutor";
import NuevoLibro from "./components/NuevoLibro";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/libros" />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/libros/:titulo" element={<FiltrarPorTitulo />} />
          <Route path="/libro/:id" element={<Libro />} />
          <Route path="/categorias/" element={<Categorias />} />
          <Route path="/categorias/:id" element={<LibrosPorCategoria />} />
          <Route path="/autor/:id" element={<DetallesAutor />} />
          <Route path="/nuevoLibro" element={<NuevoLibro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
