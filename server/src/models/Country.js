const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    idd: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
  flags: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   continents: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'Unknown'
   },
   capital: {
      type: DataTypes.TEXT,
      allowNull: true,
   },
   area: {
      type:DataTypes.BOOLEAN,
      allowNull: true
   },
   population: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
   }
}, {
   timestamps: false
  });
};