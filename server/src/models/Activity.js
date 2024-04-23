module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
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
    });
  };