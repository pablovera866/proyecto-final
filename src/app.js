const express = require("express");
const path = require("path");
const mainRouter = require("./routers/api");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();

app.listen(3000, () => {
  console.log("Se prendió el servidor");
});

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.use("/api", apiRouter);
