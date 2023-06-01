const db = require("../../database/models");
const sequelize = db.sequelize;

module.exports = {
  libros: (req, res) => {
    const librosPromise = db.Libro.findAll();
    Promise.all([librosPromise])
      .then(([libros]) => {
        res.json(libros);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ codigo: 500, mensaje: "Error al obtener los libros" });
      });
  },

  filtrarPorTitulo: (req, res) => {
    const { titulo } = req.query;
    const librosPromise = db.Libro.findAll({ where: { titulo: titulo } });
    Promise.all([librosPromise])
      .then(([libros]) => {
        res.json(libros);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al filtrar los libros por título",
        });
      });
  },

  detallesAutor: (req, res) => {
    const { id } = req.params;
    const autorPromise = db.Autor.findByPk(id);
    Promise.all([autorPromise])
      .then(([autor]) => {
        if (autor) {
          res.json(autor);
        } else {
          res.status(404).json({ codigo: 404, mensaje: "Autor no encontrado" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los detalles del autor",
        });
      });
  },

  librosPorCategoria: (req, res) => {
    const { id } = req.params;
    const librosPromise = db.Libro.findAll({ where: { categoriaId: id } });
    Promise.all([librosPromise])
      .then(([libros]) => {
        res.json(libros);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los libros por categoría",
        });
      });
  },

  nuevoLibro: (req, res) => {
    const { titulo, autorId, categoriaId } = req.body;
    db.Libro.create({ titulo, autorId, categoriaId })
      .then((libro) => {
        res.json(libro);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ codigo: 500, mensaje: "Error al crear un nuevo libro" });
      });
  },
};
