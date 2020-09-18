const axios = require("axios");

const { getAddresLatLon } = require("../address/address");

const getWeather = async (address) => {
  let url,
    appid = "a3bf6747f2b0442cf5c5ddcad4155f82";

  const { latt, longt } = await getAddresLatLon(address);

  url = `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${longt}&appid=${appid}&units=metric`;

  const { data: weather } = await axios.get(url);

  return weather;
};

module.exports = {
  getWeather,
};
