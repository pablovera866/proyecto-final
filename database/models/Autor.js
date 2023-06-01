module.exports = (sequelize, dataTypes) => {
  let alias = "Autor";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    nacionalidad: {
      type: dataTypes.STRING,
    },
    fecha_nacimiento: {
      type: dataTypes.DATE,
    },
  };
  let config = {
    tableName: "autor",
    timestamps: false,
  };

  const Autor = sequelize.define(alias, cols, config);

  Autor.associate = function (models) {
    Autor.hasMany(models.Libro, {
      foreignKey: "autor_id",
      targetKey: "id",
      timestamps: false,
    });
  };

  return Autor;
};
