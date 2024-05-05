const { Countries } = require("../db");

const getCountryByIdController = async (id) => {
  try {
    // Busca el país por ID en la base de datos
    const countries = await Countries.findOne({
      where: { id: id },
      attributes: ['id', 'name','officialName', 'image', 'continents', 'capital', 'subregion', 'area', 'population', 'maps', 'timezones']
    });

    if (!countries) {
      console.log(`No se encontró un país con el ID ${id}`);
      return null; // O puedes lanzar un error si prefieres
    }

    // Retorna el país encontrado
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
    console.error('Error al obtener el país de la base de datos:', error);
    throw error;
  }
};

module.exports = getCountryByIdController;