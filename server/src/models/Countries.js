const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officialName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    population:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    maps:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    timezones:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};