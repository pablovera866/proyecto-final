module.exports = (sequelize, dataTypes) => {
  let alias = "Libro";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "libro",
    timestamps: false,
  };

  const Libro = sequelize.define(alias, cols, config);

  Libro.associate = function (models) {
    Libro.belongsTo(models.Autor, {
      foreignKey: "autor_id",
      sourceKey: "id",
      timestamps: false,
    });
    Libro.belongsTo(models.Categoria, {
      foreignKey: "categoria_id",
      sourceKey: "id",
      timestamps: false,
    });
  };
  return Libro;
};
