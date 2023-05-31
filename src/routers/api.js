const express = require("express");

const router = express.Router();
const apiController = require("../controllers/api-controller");

router.get("/libros", apiController.libros);
router.get("/libros/filtrar", apiController.filtrarPorTitulo);
router.get("/autor/:id", apiController.detallesAutor);
router.get("/categoria/:id/libros", apiController.librosPorCategoria);
router.post("/libros", apiController.nuevoLibro);

module.exports = router;
