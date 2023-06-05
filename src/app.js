const express = require("express");
const path = require("path");
const mainRouter = require("./routers/api");
const { Sequelize, DataTypes } = require("sequelize");
const apiRouter = require("./routers/api");
const app = express();
const cors = require("cors");

app.listen(3000, () => {
  console.log("Se prendió el servidor");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.use(cors());
app.use("/api", apiRouter);
