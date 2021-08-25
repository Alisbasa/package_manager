const log4js = require("log4js");

let logger = log4js.getLogger();
logger.level="debug";

logger.info("La aplicacion se inicio con exito");
logger.warn("Cuidado con el perro");
logger.error("No en contre la funcion");
logger.fatal("esto es fatal");

function sumar(x,y) {
  return x + y;

}
module.exports = sumar;
