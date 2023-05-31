module.exports = (sequelize, dataTypes) => {
  let alias = "Libro";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "libros",
    timestamps: false,
  };

  const Libro = sequelize.define(alias, cols, config);

  Libro.associate = function (models) {
    Libro.belongsTo(models.Autor);
    Libro.belongsTo(models.Categoria);
  };

  return Libro;
};
