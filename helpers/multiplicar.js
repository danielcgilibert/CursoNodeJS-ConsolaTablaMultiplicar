const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "",
      consola = "";

    for (let index = 1; index <= hasta; index++) {
      consola += `  ${base} ${colors.yellow(
        "x"
      )} ${index}  = ${colors.bold.blue(base * index)}\n`;

      salida += `${base} x ${index}  = ${base * index}\n`;
    }
       
    if (listar) {
      console.log(colors.yellow("================"));
      console.log(`  Tabla del `, colors.underline.bold.yellow(base));
      console.log(colors.yellow("================"));
      console.log(consola);
      console.log(colors.yellow("================"));
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
