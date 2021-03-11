const { crearArchivo } = require('./helpers/multiplicar2');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));