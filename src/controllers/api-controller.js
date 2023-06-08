const db = require("../../database/models");
const { Op } = require("sequelize");
const sequelize = db.sequelize;

module.exports = {
  libros: (req, res) => {
    const librosPromise = db.Libro.findAll({
      include: [{ model: db.Autor }, { model: db.Categoria }],
    });
    Promise.all([librosPromise])
      .then(([libros]) => {
        const resultado = libros.map((libro) => {
          console.log(libro);
          return {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.Autor.nombre,
            categoria: libro.Categorium.nombre,
          };
        });
        res.json(resultado);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los libros",
          error: error.message,
        });
      });
  },

  libro: (req, res) => {
    const libroId = req.params.id;
    db.Libro.findOne({
      where: { id: libroId },
      include: [{ model: db.Autor }, { model: db.Categoria }],
    })
      .then((libro) => {
        if (libro) {
          const resultado = {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.Autor.nombre,
            autor_id: libro.Autor.id,
            categoria: libro.Categorium.nombre,
            categoria_id: libro.Categorium.id,
          };
          res.json(resultado);
        } else {
          res.status(404).json({
            codigo: 404,
            mensaje: "Libro no encontrado",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener el libro",
          error: error.message,
        });
      });
  },

  filtrarPorTitulo: (req, res) => {
    const { titulo } = req.query;
    db.Libro.findAll({
      where: { titulo: { [Op.like]: "%" + titulo + "%" } },
      include: [db.Autor, db.Categoria],
    })
      .then((libros) => {
        const resultado = libros.map((libro) => {
          return {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.Autor.nombre,
            autor_id: libro.Autor.id,
            categoria: libro.Categorium.nombre,
            categoria_id: libro.Categorium.id,
          };
        });
        res.json(resultado);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al filtrar los libros por título",
          error: error.message,
        });
      });
  },

  detallesAutor: (req, res) => {
    const { id } = req.params;
    db.Autor.findByPk(id, {
      include: db.Libro,
    })
      .then((autor) => {
        if (autor) {
          const resultado = {
            id: autor.id,
            nombre: autor.nombre,
            nacionalidad: autor.nacionalidad,
            fecha_nacimiento: autor.fecha_nacimiento,
            biografia: autor.biografia,
            libros: autor.Libros,
          };
          res.json(resultado);
        } else {
          res.status(404).json({ codigo: 404, mensaje: "Autor no encontrado" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los detalles del autor",
          error: error.message,
        });
      });
  },

  categorias: (req, res) => {
    db.Categoria.findAll()
      .then((categorias) => {
        console.log(categorias);
        res.json(categorias);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener las categorías",
          error: error.message,
        });
      });
  },

  autores: (req, res) => {
    db.Autor.findAll({
      attributes: ["id", "nombre"],
    })
      .then((autores) => {
        res.json(autores);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los autores",
          error: error.message,
        });
      });
  },

  librosPorCategoria: (req, res) => {
    const { id } = req.params;
    const librosPromise = db.Libro.findAll({
      include: [
        { model: db.Autor },
        { model: db.Categoria, where: { id: id } },
      ],
    });
    Promise.all([librosPromise])
      .then(([libros]) => {
        const resultado = libros.map(
          (libro) => (
            console.log(libro),
            {
              id: libro.id,
              titulo: libro.titulo,
              autor: libro.Autor.nombre,
              autor_id: libro.Autor.id,
              categoria: libro.Categorium.nombre,
              categoria_id: libro.Categorium.id,
            }
          )
        );
        res.json(resultado);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al obtener los libros por categoría",
          error: error.message,
        });
      });
  },

  nuevoLibro: (req, res) => {
    db.Libro.create({
      titulo: req.body.titulo,
      autor_id: req.body.autor_id,
      categoria_id: req.body.categoria_id,
    })
      .then((libro) => {
        res.json(libro);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error al crear un nuevo libro",
          error: error.message,
        });
      });
  },
};
