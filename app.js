const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comand not found');
}

//-----------------------------------------------------------------


//-----------------------------------------------------------------
// let argv2 = process.argv
// console.log('limite', argv.limite);


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado:${archivo}`))
//     .catch(e => console.log(e));

//-----------------------------------------------------------------
//let base = 'a';
//const fs = require('express');  // No Native of NOde
//const fs = require('./mifile'); // No Native dde Library

//console.log(process.argv);

// let data = '';
// for (let i = 1; i <= 10; i++) {
//     //console.log(2 * i);
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`The file tabla-${base}.txt has been saved!`);
// });