const express = require("express");

const router = express.Router();
const apiController = require("../controllers/api-controller");

router.get("/libros", apiController.libros); //Muestra el listado de libros
router.get("/libro/:id", apiController.libro); // Muestra un solo libro
router.get("/libros/filtrar/", apiController.filtrarPorTitulo); //Filtra libros -> filtrar?titulo=1984 Muestra el libro 1984
router.get("/autor/:id", apiController.detallesAutor); //Muestra autor por ID
router.get("/categoria/:id/libros", apiController.librosPorCategoria); //Muestra el listado de libros por categoria (ID)
router.post("/libros", apiController.nuevoLibro); //

module.exports = router;
