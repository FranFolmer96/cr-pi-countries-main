const { Countries } = require("../db");
const { Op } = require("sequelize");

const getCountryByNameController = async (name) => {
  try {
    // Busca el país por nombre en la base de datos (insensible a mayúsculas y minúsculas)
    const countries = await Countries.findOne({
      where: { name: { [Op.iLike]: name } }, // Utiliza 'ilike' para una búsqueda insensible a mayúsculas y minúsculas
      attributes: ['id','officialName', 'name', 'image', 'continents', 'capital', 'subregion', 'area', 'population', 'maps', 'timezones'],
    });

    if (!countries) {
      console.log(`No se encontró un país con el nombre ${name}`);
      return null; // O puedes lanzar un error si prefieres
    }

    // Retorna solo los campos deseados del país encontrado
    console.log('País encontrado en la base de datos:', countries);
    return {
      id: countries.id,
      name: countries.name,
      officialName: countries.officialName,
      image: countries.image,
      continents: countries.continents,
      capital: countries.capital.slice(1, -1),
      subregion: countries.subregion,
      area: countries.area,
      population: countries.population,
      maps: countries.maps,
      timezones: countries.timezones.slice(1, -1)
    };
  } catch (error) {
    console.error('Error al obtener el país de la base de datos por nombre:', error);
    throw error;
  }
};

module.exports = getCountryByNameController;