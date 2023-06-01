module.exports = (sequelize, dataTypes) => {
  let alias = "Categoria";
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
    tableName: "categorias",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, cols, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Libro, {
      foreignKey: "categoria_id",
      targetKey: "id",
      timestamps: false,
    });
  };

  return Categoria;
};
