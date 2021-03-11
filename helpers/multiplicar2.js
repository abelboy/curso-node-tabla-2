const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    // const h = argv.h;
    try {

        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green.bold} ${i} ${'='.green.bold} ${base * i}\n`);
        }
        //Aqui controlamos como si se muestra en consola o no, listar lo recibe yargs en true imprime
        if (listar) {
            console.log(colors.bgBlue.yellow.bold('=================='));
            console.log(colors.random('   Tabla del: '), base);
            console.log(colors.bgBlue.yellow.bold('=================='));
            console.log(colors.bgWhite.black(salida));
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}