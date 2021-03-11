const colors = require('colors');
const argv = require('yargs')

.option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base para crear la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Debes indicar hasta que numero quieres multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw (colors.rainbow('La base debe ser un numero'));
        }
        return true
    })
    .argv;

module.exports = argv;