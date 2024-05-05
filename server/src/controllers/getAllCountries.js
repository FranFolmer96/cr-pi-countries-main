const { Countries } = require("../db");

const getAllCountriesController = async () => {
  try {
    const countries = await Countries.findAll({
      attributes: ['id','name', 'officialName', 'image', 'continents', 'capital', 'subregion', 'area', 'population', 'maps', 'timezones'],
      raw: true
    });

    const modifiedCountries = countries.map(countries => ({
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
    }));

    return modifiedCountries;
  } catch (error) {
    console.error('Error al obtener todos los países:', error);
    throw error;
  }
};

module.exports = getAllCountriesController;