require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Cargar los modelos
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => file.endsWith('.js') && file !== basename)
  .forEach((file) => {
    const model = require(path.join(__dirname, '/models', file));
    modelDefiners.push(model);
  });

// Definir los modelos en sequelize
modelDefiners.forEach((model) => model(sequelize));

// Establecer relaciones entre modelos
const { Country, Activity } = sequelize.models;

Activity.belongsToMany(Country, { through: 'user_twist' });
Country.belongsToMany(Activity, { through: 'user_twist' });

// Exportar modelos y conexión
module.exports = {
  Country,
  Activity,
  sequelize,
};