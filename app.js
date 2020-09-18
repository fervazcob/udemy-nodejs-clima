const argv = require("yargs").options({
  direccion: {
    demand: true,
    alias: "d",
  },
}).argv;

const { getWeather } = require("./weather/weather");

getWeather(argv.direccion)
  .then((resp) => {
    const { weather, main } = resp;

    console.log(
      `El clima para ${resp.name} es ${weather[0].main} con una temperatura de ${main.temp} ºC, una mínima de ${main.temp_min} ºC y una máxima de ${main.temp_max} ºC`
    );
  })
  .catch((err) => console.log(err));
