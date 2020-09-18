const axios = require("axios");

const getAddresLatLon = async (address) => {
  const encodedAddress = encodeURI(address);

  const instance = axios.create({
    baseURL: `https://geocode.xyz/${encodedAddress}?json=1&auth=490855227134631923128x84628`,
  });
  const location = await instance.get();

  if (location.data.error) {
    throw new Error(`No se encontro la ubicación "${address}`);
  }

  const { latt, longt } = location.data;

  return { latt, longt };
};

module.exports = {
  getAddresLatLon,
};
